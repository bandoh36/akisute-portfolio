import { HISTORY_CONTENT } from "@/constant/historyConstant";

export default function HistoryContent() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
      {HISTORY_CONTENT.map((item, idx) => (
        <article
          key={idx}
          className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/88 p-6 shadow-2xl backdrop-blur-xl md:p-8"
        >
          <div className="absolute bottom-0 left-[110px] top-0 hidden w-px bg-slate-200 md:block" />
          <div className="relative grid gap-6 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10">
            <div className="relative md:pr-6">
              <div className="absolute -right-[9px] top-1 hidden h-4 w-4 rounded-full border-4 border-sky-200 bg-sky-500 md:block" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                {item.period}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {item.role}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                {item.title}
              </h3>
              <div className="space-y-4 text-sm leading-7 text-slate-700 md:text-base">
                {item.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
