"use client";
import { useEffect, useRef } from "react";

export default function SummerBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationId: number;

    let waterLevel = height * 0.6;
    let wavePhase = 0;
    const waveAmplitude = 8;
    const waveLength = width / 1.5;
    const waveSpeed = 0.02;

    // 泡
    let bubbles: { x: number; y: number; r: number; speed: number }[] = [];

    // 波紋
    let ripples: { x: number; y: number; r: number; alpha: number }[] = [];

    // resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      waterLevel = height * 0.6;
    };
    window.addEventListener("resize", handleResize);

    // クリックで波紋
    const handleClick = (e: MouseEvent) => {
      ripples.push({ x: e.clientX, y: e.clientY, r: 0, alpha: 1 });
    };
    window.addEventListener("click", handleClick);

    // アニメーションループ
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 背景（空気）
      ctx.fillStyle = "#f0f8ff";
      ctx.fillRect(0, 0, width, height);

      // 水面の波
      ctx.beginPath();
      ctx.moveTo(0, waterLevel);
      for (let x = 0; x <= width; x++) {
        const y =
          waterLevel +
          Math.sin((x / waveLength) * Math.PI * 2 + wavePhase) * waveAmplitude;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(0, waterLevel, 0, height);
      gradient.addColorStop(0, "rgba(0, 180, 255, 0.8)");
      gradient.addColorStop(1, "rgba(0, 90, 180, 1)");
      ctx.fillStyle = gradient;
      ctx.fill();

      wavePhase += waveSpeed;

      // 泡（生成 & 上昇）
      if (Math.random() < 0.03) {
        const x = Math.random() * width;
        const r = 2 + Math.random() * 3;
        const speed = 0.5 + Math.random();
        bubbles.push({ x, y: height, r, speed });
      }
      bubbles = bubbles.filter((b) => b.y > waterLevel - 10);
      bubbles.forEach((b) => {
        b.y -= b.speed;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.fill();
      });

      // 波紋（クリックで発生）
      ripples = ripples.filter((r) => r.alpha > 0.01);
      ripples.forEach((r) => {
        r.r += 2;
        r.alpha *= 0.96;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${r.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // 水槽の枠線
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
      ctx.lineWidth = 4;
      ctx.strokeRect(0, 0, width, height);

      // 内側のハイライト
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1;
      ctx.strokeRect(6, 6, width - 12, height - 12);

      animationId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClick);
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
