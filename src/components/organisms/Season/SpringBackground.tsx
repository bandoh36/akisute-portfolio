"use client";
import { useEffect, useRef } from "react";

export default function SpringBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 花びらオブジェクト
    let petals: {
      x: number;
      y: number;
      size: number;
      speed: number;
      drift: number;
      angle: number;
      rotationSpeed: number;
      color: string;
      axisOffset: number;
    }[] = [];

    const createPetal = () => {
      return {
        x: Math.random() * width,
        y: -20,
        size: 10 + Math.random() * 10,
        speed: 0.5 + Math.random() * 1.5,
        drift: (Math.random() - 0.5) * 1.5,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
        color: `rgba(255, ${180 + Math.floor(Math.random() * 40)}, ${
          200 + Math.floor(Math.random() * 30)
        }, ${0.5 + Math.random() * 0.3})`, // ランダムなピンク色
        axisOffset: (Math.random() - 0.5) * 5, // 軸のずれ
      };
    };

    let animationId: number;

    for (let i = 0; i < 30; i++) petals.push(createPetal());

    const render = () => {
      ctx.fillStyle = "#fff8f5"; // 春っぽい背景色
      ctx.fillRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speed;
        p.x += p.drift;
        p.angle += p.rotationSpeed;

        // 再生成
        if (p.y > height + 20) {
          Object.assign(p, createPetal());
          p.y = -20;
        }

        // 花びら描画（楕円）
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        ctx.beginPath();
        // しずく型（縦長・先端を尖らせる）
        const widthPetal = p.size * 0.6;
        const heightPetal = p.size * 1.5;
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(
          widthPetal + p.axisOffset,
          -heightPetal * 0.4, // 右上
          widthPetal,
          heightPetal * 0.7, // 右下
          0,
          heightPetal // 先端
        );
        ctx.bezierCurveTo(
          -widthPetal,
          heightPetal * 0.7, // 左下
          -widthPetal + p.axisOffset,
          -heightPetal * 0.4, // 左上
          0,
          0 // 戻る
        );
        ctx.closePath();
        ctx.fillStyle = p.color;
        ctx.shadowColor = "rgba(255,192,203,0.3)";
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.restore();
      });

      const gradient = ctx.createLinearGradient(0, height * 0.3, 0, height);
      gradient.addColorStop(0, "rgba(255, 192, 203, 0)");
      gradient.addColorStop(1, "rgba(255, 105, 180, 1.0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, height * 0.3, width, height * 0.7);

      animationId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
