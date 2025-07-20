"use client";

import { useRef, useEffect } from "react";

export default function AutumnBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 星の設定
    const stars = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.6,
      radius: Math.random() * 1.2 + 0.3,
      alpha: Math.random(),
      delta: Math.random() * 0.02 + 0.01,
    }));

    // 舞う落ち葉オブジェクト（必要に応じて増減）
    const leaves = Array.from({ length: 20 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.7,
      size: 15 + Math.random() * 15,
      speedY: 0.2 + Math.random() * 0.3,
      driftX: (Math.random() - 0.5) * 0.3,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.01,
      color: `hsl(30, 80%, ${40 + Math.random() * 30}%)`, // オレンジ～黄
    }));

    // 画面下部の落ち葉の堆積
    const bottomLeavesCount = 50;
    const bottomLeaves = Array.from({ length: bottomLeavesCount }, () => ({
      x: Math.random() * width,
      y: height * 0.85 + Math.random() * (height * 0.15),
      size: 20 + Math.random() * 30,
      rotation: Math.random() * Math.PI * 2,
      color: `rgba(204, 102, 0, ${0.3 + Math.random() * 0.5})`, // 濃いオレンジ～茶色
    }));

    // 背景グラデーション描画
    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "rgba(255, 165, 79, 0.15)"); // 薄いオレンジ上部
      gradient.addColorStop(1, "rgba(255, 223, 138, 0.8)"); // 明るい黄下部
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    // 月の描画（左上）
    const drawMoon = () => {
      const moonX = 100;
      const moonY = 100;
      const moonRadius = 60;

      const gradient = ctx.createRadialGradient(
        moonX,
        moonY,
        10,
        moonX,
        moonY,
        moonRadius * 1.5
      );
      gradient.addColorStop(0, "rgba(255, 244, 214, 0.8)");
      gradient.addColorStop(1, "rgba(255, 244, 214, 0)");

      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    // 星の描画と瞬きアニメーション
    const drawStars = () => {
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();

        star.alpha += star.delta;
        if (star.alpha >= 1 || star.alpha <= 0) star.delta = -star.delta;
      }
    };

    // 舞う落ち葉の描画・移動
    const drawLeaves = () => {
      for (const leaf of leaves) {
        leaf.y += leaf.speedY;
        leaf.x += leaf.driftX;
        leaf.rotation += leaf.rotationSpeed;

        // 横方向の画面外ループ処理
        if (leaf.x > width + leaf.size) leaf.x = -leaf.size;
        if (leaf.x < -leaf.size) leaf.x = width + leaf.size;

        // 舞う落ち葉の描画
        ctx.save();
        ctx.translate(leaf.x, leaf.y);
        ctx.rotate(leaf.rotation);
        ctx.fillStyle = leaf.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, leaf.size * 0.6, leaf.size * 0.9, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    };

    // 画面下部の積もった落ち葉描画（動かない）
    const drawBottomLeaves = () => {
      for (const leaf of bottomLeaves) {
        ctx.save();
        ctx.translate(leaf.x, leaf.y);
        ctx.rotate(leaf.rotation);
        ctx.fillStyle = leaf.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, leaf.size * 0.7, leaf.size * 1.0, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    };

    // メインループ
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      drawBackground();
      drawMoon();
      drawStars();
      drawLeaves();
      drawBottomLeaves();

      requestAnimationFrame(animate);
    };

    animate();

    // リサイズ対応
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
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
