import SkillsetList from "@/components/organisms/SkillsetList";
import {
  QUALIFICATIONS,
  SKILLSET_SECTIONS,
} from "@/constant/skillsetConstant";

export default function SkillsetContent() {
  return (
    <div className="flex flex-col items-center md:mb-50">
      <div
        className="
          w-[95vw] md:w-[1100px] max-w-[1200px] bg-white rounded-[10px]
          shadow-lg p-6 mb-6 mx-0 md:mx-6
        "
      >
        <h2 className="text-lg md:text-xl font-bold text-blue-600 mb-5">資格</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {QUALIFICATIONS.map((qualification) => (
            <li
              key={qualification.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
            >
              <p className="font-semibold text-slate-900">{qualification.title}</p>
              <p className="mt-2 text-sm text-slate-600">
                {qualification.acquiredAt} 取得
              </p>
            </li>
          ))}
        </ul>
      </div>
      {SKILLSET_SECTIONS.map((section) => (
        <SkillsetList key={section.id} section={section} />
      ))}
    </div>
  );
}
