"use client";

import { useEffect, useState } from "react";

const leafColors = ["#e67e22", "#d35400", "#f39c12", "#c0392b"];
const leafShapes = ["🍁", "🍂"];

function FallingLeaf() {
  const [left, setLeft] = useState(0);
  const [delay, setDelay] = useState(0);
  const [duration, setDuration] = useState(0);
  const [size, setSize] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [color, setColor] = useState("#000");
  const [leaf, setLeaf] = useState("");

  useEffect(() => {
    setLeft(Math.random() * 100);
    setDelay(Math.random() * 8);
    // 落下時間を長くしてゆっくり舞う感じに
    setDuration(20 + Math.random() * 10);
    setSize(20 + Math.random() * 25);
    setRotate(Math.random() * 360);
    setColor(leafColors[Math.floor(Math.random() * leafColors.length)]);
    setLeaf(leafShapes[Math.floor(Math.random() * leafShapes.length)]);
  }, []);

  return (
    <div
      className="absolute pointer-events-none select-none"
      style={{
        top: "-10%",
        left: `${left}%`,
        animationName: "fall",
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        fontSize: `${size}px`,
        color: color,
        userSelect: "none",
      }}
    >
      <div
        style={{
          animationName: "sway",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          animationDelay: `${delay}s`,
          animationDuration: `${duration / 4}s`,
          display: "inline-block",
        }}
      >
        {leaf}
      </div>
    </div>
  );
}

export default function AutumnBackground() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#fff4e6] via-[#f5c396] to-[#d35400]">
      {/* 落ち葉アニメーション: 数は6枚に減らす */}
      {Array.from({ length: 6 }).map((_, i) => (
        <FallingLeaf key={i} />
      ))}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10%);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0.3;
          }
        }
        @keyframes sway {
          0%,
          100% {
            transform: translateX(0) rotate(0deg);
          }
          50% {
            transform: translateX(20px) rotate(40deg);
          }
        }
      `}</style>
    </div>
  );
}
