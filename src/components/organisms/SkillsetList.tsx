import { SkillSection } from "@/constant/skillsetConstant";

export interface SkillsetContentProps {
  section: SkillSection;
}

export default function SkillsetList({ section }: SkillsetContentProps) {
  return (
    <div className="rounded-[28px] border border-white/60 bg-white/88 p-6 shadow-2xl backdrop-blur-xl md:p-7">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-bold tracking-tight text-slate-950">
          {section.title}
        </h3>
        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
          {section.items.length} items
        </span>
      </div>
      <div className="mt-5 grid gap-4">
        {section.items.map((item) => (
          <div
            key={item.name}
            className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h4 className="text-lg font-semibold text-slate-900">
                  {item.name}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.summary}
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 md:text-base">
              {item.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-[0.4rem] h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
