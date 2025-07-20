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
    }[] = [];

    const createPetal = () => {
      return {
        x: Math.random() * width,
        y: -20,
        size: 10 + Math.random() * 10,
        speed: 0.5 + Math.random() * 1.5,
        drift: (Math.random() - 0.5) * 1,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
      };
    };

    for (let i = 0; i < 50; i++) petals.push(createPetal());

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
        ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 192, 203, 0.6)";
        ctx.fill();
        ctx.restore();
      });

      const gradient = ctx.createLinearGradient(0, height * 0.7, 0, height);
      gradient.addColorStop(0, "rgba(255, 192, 203, 0)"); // 上は透明
      gradient.addColorStop(1, "rgba(255, 105, 180, 1.0)"); // hotpink

      ctx.fillStyle = gradient;
      ctx.fillRect(0, height * 0.5, width, height * 0.5); // 下部に描画

      requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
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
