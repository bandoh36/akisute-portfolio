import Image from "next/image";

export interface WorkCardProps {
  content: {
    title: string;
    subtitle: string;
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
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/60 bg-white/88 p-6 shadow-2xl backdrop-blur-xl md:p-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-3xl font-bold tracking-tight text-slate-950">
            {content.title}
          </h3>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
            {content.subtitle}
          </p>
        </div>

        <div className="relative aspect-[16/8] overflow-hidden rounded-[24px] shadow-xl">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="100vw"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
              詳細
            </p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700 md:text-base">
              {content.description.map((line, idx) => (
                <p key={`${content.title}-${idx}`}>{line}</p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
              技術スタック
            </p>
            <div className="mt-4 grid gap-4">
              <StackBlock
                title="フロントエンド"
                value={content.modalDescription.front}
              />
              <StackBlock
                title="バックエンド"
                value={content.modalDescription.back}
              />
              <StackBlock
                title="インフラ"
                value={content.modalDescription.infra}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StackBlockProps {
  title: string;
  value: string;
}

function StackBlock({ title, value }: StackBlockProps) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{value}</p>
    </div>
  );
}
