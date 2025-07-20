"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ANIMATION_TIME = 6000;

export default function TopTemp() {
  const [fadeIn, setFadeIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setFadeIn(true);
    const timer = setTimeout(() => {
      sessionStorage.setItem("fromTop", "true");
      router.push("/home");
    }, ANIMATION_TIME);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* 背景画像 */}
      <Image
        src="/img/topPageBackground.jpg"
        alt="topPageBackground"
        fill
        style={{ objectFit: "cover" }}
        className="z-0"
        priority
      />

      {/* フェードインするメインメッセージ */}
      <div
        className={`
          absolute inset-0 flex flex-col items-center justify-center z-10
          transition-opacity duration-1000
          ${fadeIn ? "opacity-100" : "opacity-0"}
        `}
      >
        <div className="bg-black/70 rounded-lg px-8 py-6 border-4 border-white shadow-lg">
          <p className="text-3xl md:text-5xl font-bold text-white font-mono tracking-widest drop-shadow-lg">
            Welcome!!
          </p>
          <p className="text-xl md:text-3xl text-green-400 font-mono mt-4">
            Shunsuke Bando's Portfolio!!
          </p>
        </div>
      </div>

      {/* 右下ローディング表示 */}
      <div className="absolute bottom-6 right-8 z-20 flex items-center space-x-2">
        <span className="text-white font-mono text-sm md:text-base">
          Loading
        </span>
        <span className="w-3 h-3 rounded-full bg-green-400 animate-bounce [animation-delay:.1s]"></span>
        <span className="w-3 h-3 rounded-full bg-green-400 animate-bounce [animation-delay:.3s]"></span>
        <span className="w-3 h-3 rounded-full bg-green-400 animate-bounce [animation-delay:.5s]"></span>
      </div>
    </div>
  );
}
