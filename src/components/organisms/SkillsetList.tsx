import { SkillSection } from "@/constant/skillsetConstant";

export interface SkillsetContentProps {
  section: SkillSection;
}

export default function SkillsetList({ section }: SkillsetContentProps) {
  return (
    <div
      className="
        w-[95vw] md:w-[1100px] max-w-[1200px] bg-white rounded-[10px]
        shadow-lg p-6 mb-6 mx-0 md:mx-6 overflow-auto
      "
    >
      <h2 className="text-lg md:text-xl font-bold text-blue-600 mb-5">
        {section.title}
      </h2>
      <div className="grid gap-4">
        {section.items.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="text-base md:text-lg font-semibold text-slate-900">
                {item.name}
              </h3>
              <span className="text-sm font-medium text-sky-700 bg-sky-100 rounded-full px-3 py-1 w-fit">
                {item.summary}
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-sm md:text-base text-slate-700 leading-relaxed list-disc pl-5">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
