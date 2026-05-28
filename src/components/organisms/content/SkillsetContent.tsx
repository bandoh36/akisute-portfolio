import SkillsetList from "@/components/organisms/SkillsetList";
import { QUALIFICATIONS, SKILLSET_SECTIONS } from "@/constant/skillsetConstant";

export default function SkillsetContent() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 md:gap-6">
      <div className="rounded-[24px] border border-white/60 bg-white/88 p-5 shadow-2xl backdrop-blur-xl md:rounded-[28px] md:p-7">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-700 md:text-sm md:tracking-[0.18em]">
              Qualifications
            </p>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-950 md:text-2xl">
              保有資格
            </h3>
          </div>
        </div>
        <div className="mt-4 grid gap-3 md:mt-6 md:grid-cols-2">
          {QUALIFICATIONS.map((qualification) => (
            <div
              key={qualification.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 md:rounded-3xl md:p-5"
            >
              <p className="text-sm font-semibold text-slate-900 md:text-base">
                {qualification.title}
              </p>
              <p className="mt-1.5 text-sm leading-6 text-slate-500 md:mt-2">
                {qualification.acquiredAt}取得
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {SKILLSET_SECTIONS.map((section) => (
          <SkillsetList key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
