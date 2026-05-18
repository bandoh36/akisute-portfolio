import SkillsetList from "@/components/organisms/SkillsetList";
import { QUALIFICATIONS, SKILLSET_SECTIONS } from "@/constant/skillsetConstant";

export default function SkillsetContent() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
      <div className="rounded-[28px] border border-white/60 bg-white/88 p-6 shadow-2xl backdrop-blur-xl md:p-7">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-sky-700">
              Qualifications
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              保有資格
            </h3>
          </div>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {QUALIFICATIONS.map((qualification) => (
            <div
              key={qualification.title}
              className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5"
            >
              <p className="font-semibold text-slate-900">
                {qualification.title}
              </p>
              <p className="mt-2 text-sm text-slate-500">
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
