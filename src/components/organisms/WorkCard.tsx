import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface WorkCardProps {
  content: {
    title: string;
    image: { src: string; alt: string };
    link: string;
    description: string[];
    modalDescription: {
      front: string;
      back: string;
      infra: string;
      source: { text: string; src: string };
      other: string[];
    };
  };
}

export default function WorkCard({ content }: WorkCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-12 border border-slate-200 hover:shadow-3xl transition-shadow duration-300">
        <div className="mb-6 flex items-center gap-3">
          <div className="w-2 h-8 bg-gradient-to-b from-sky-400 to-blue-600 rounded-full" />
          <h2 className="font-extrabold text-2xl text-sky-700 tracking-tight">
            {content.title}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between mt-5 md:mt-0">
            <div className="space-y-2 text-gray-700 leading-relaxed text-base">
              {content.description.map((line, idx) =>
                line === "" ? <br key={idx} /> : <p key={idx}>{line}</p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                className="flex-1 px-5 py-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold shadow hover:from-blue-500 hover:to-sky-400 transition-all duration-200"
                onClick={() => setOpen(true)}
              >
                説明を見る
              </button>
              {content.link ? (
                <Link
                  href={content.link}
                  target="_blank"
                  className="flex-1 px-5 py-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold shadow hover:from-emerald-500 hover:to-green-400 transition-all duration-200 text-center"
                >
                  サイトに飛ぶ
                </Link>
              ) : (
                <button
                  className="flex-1 px-5 py-2 rounded-full bg-gray-200 text-gray-400 font-semibold cursor-not-allowed"
                  disabled
                >
                  サイトに飛ぶ
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* モーダル */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="relative bg-white/80 backdrop-blur-lg w-11/12 md:w-3/5 max-h-[80vh] overflow-y-auto rounded-2xl border-4 border-double border-sky-400 p-8 shadow-2xl">
            <button
              className="absolute top-4 right-4 text-3xl text-sky-400 hover:text-sky-600 transition-colors"
              onClick={() => setOpen(false)}
              aria-label="閉じる"
            >
              <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
                <path
                  d="M6 6l8 8M6 14L14 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <h3 className="text-xl font-bold mb-6 text-sky-700">
              システム構成
            </h3>
            <div className="mb-4">
              <p className="text-blue-600 font-semibold mt-3">フロントエンド</p>
              <p className="ml-3 text-sm">{content.modalDescription.front}</p>
            </div>
            <div className="mb-4">
              <p className="text-blue-600 font-semibold mt-3">バックエンド</p>
              <p className="ml-3 text-sm">{content.modalDescription.back}</p>
            </div>
            <div className="mb-4">
              <p className="text-blue-600 font-semibold mt-3">インフラ</p>
              <p className="ml-3 text-sm">{content.modalDescription.infra}</p>
            </div>
            <div className="mb-4">
              <p className="text-blue-600 font-semibold mt-3">ソースコード</p>
              {content.modalDescription.source.src ? (
                <p className="ml-3 text-sm">
                  <Link
                    href={content.modalDescription.source.src}
                    target="_blank"
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    {content.modalDescription.source.text}
                  </Link>
                </p>
              ) : (
                <p className="ml-3 text-sm">
                  {content.modalDescription.source.text}
                </p>
              )}
            </div>
            <div className="mb-2">
              <p className="text-blue-600 font-semibold mt-5">その他</p>
              <div className="ml-3 space-y-1">
                {content.modalDescription.other.map((line, idx) =>
                  line === "" ? <br key={idx} /> : <p key={idx}>{line}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
