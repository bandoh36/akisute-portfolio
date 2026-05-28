import { HISTORY_CONTENT } from "@/constant/historyConstant";

export default function HistoryContent() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 md:gap-6">
      {HISTORY_CONTENT.map((item, idx) => (
        <article
          key={idx}
          className="relative overflow-hidden rounded-[24px] border border-white/60 bg-white/88 p-5 shadow-2xl backdrop-blur-xl md:rounded-[28px] md:p-8"
        >
          <div className="absolute bottom-0 left-[110px] top-0 hidden w-px bg-slate-200 md:block" />
          <div className="relative grid gap-4 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10">
            <div className="relative md:pr-6">
              <div className="absolute -right-[9px] top-1 hidden h-4 w-4 rounded-full border-4 border-sky-200 bg-sky-500 md:block" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 md:text-sm md:tracking-[0.2em]">
                {item.period}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500 md:mt-3 md:leading-relaxed">
                {item.role}
              </p>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-slate-950 md:text-2xl">
                {item.title}
              </h3>
              <div className="space-y-3 text-sm leading-6 text-slate-700 md:space-y-4 md:text-base md:leading-7">
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
