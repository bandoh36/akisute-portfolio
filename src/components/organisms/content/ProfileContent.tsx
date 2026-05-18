import { PROFILE_CONTENT } from "@/constant/profileConstant";

export default function ProfileContent() {
  const profileContent = PROFILE_CONTENT;

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
      <div className="rounded-[28px] border border-white/60 bg-white/85 p-6 shadow-2xl backdrop-blur-xl">
        <div className="space-y-4">
          <div>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              現在担当していること
            </h3>
          </div>
          <div className="space-y-3">
            {profileContent.summaryCards.map((card) => (
              <div key={card.title} className="rounded-2xl bg-slate-100 p-4">
                <p className="text-xs tracking-[0.08em] text-sky-700 font-semibold">
                  {card.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border border-white/60 bg-white/88 p-6 shadow-2xl backdrop-blur-xl md:p-8">
        <div className="space-y-6">
          <div>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              プロダクト改善に近い領域で担当していること
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {profileContent.lead}
            </p>
          </div>
          <div className="space-y-4 text-sm leading-7 text-slate-700 md:text-base">
            {profileContent.description.map((line, idx) => (
              <p key={idx} className="whitespace-pre-line">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
