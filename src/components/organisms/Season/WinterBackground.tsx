"use client";

import { useEffect, useRef } from "react";

export default function WinterBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snowflakes: Snowflake[] = [];

  const snowflakeCount = 20; // 少なめ
  const colors = ["#ffffff", "#e0f7ff", "#ccf2ff"]; // 明るい白〜水色

  class Snowflake {
    x: number = 0;
    y: number = 0;
    radius: number = 0;
    speedY: number = 0;
    sway: number = 0;
    swaySpeed: number = 0;
    color: string = "";
    angle: number = 0;

    constructor(width: number, height: number) {
      this.reset(width, height);
    }

    reset(width: number, height: number) {
      this.x = Math.random() * width;
      this.y = Math.random() * -height; // 上から降ってくる
      this.radius = 5 + Math.random() * 2; // 大きめ
      this.speedY = 0.3 + Math.random() * 0.4; // ゆっくり落ちる
      this.sway = Math.random() * 20 + 10; // 横揺れ幅
      this.swaySpeed = 0.005 + Math.random() * 0.005;
      this.angle = Math.random() * Math.PI * 2;
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update(width: number, height: number) {
      this.angle += this.swaySpeed;
      this.x += Math.cos(this.angle) * 0.5;
      this.y += this.speedY;

      if (this.y > height + this.radius) {
        this.reset(width, height);
      }
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.save();
      ctx.beginPath();
      ctx.globalAlpha = 0.7;
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push(new Snowflake(canvas.width, canvas.height));
    }

    let animationId: number;
    const animate = () => {
      if (!canvas || !ctx) return;
      const { width, height } = canvas;

      // 背景グラデーション（上から下へ濃く）
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#eaf6ff"); // 薄い
      gradient.addColorStop(1, "#003366"); // 濃い青
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 雪の描画
      for (const flake of snowflakes) {
        flake.update(width, height);
        flake.draw(ctx);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );
}
