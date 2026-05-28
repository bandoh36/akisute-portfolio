import { PROFILE_CONTENT } from "@/constant/profileConstant";

export default function ProfileContent() {
  const profileContent = PROFILE_CONTENT;

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 md:gap-6">
      <div className="rounded-[24px] border border-white/60 bg-white/88 p-5 shadow-2xl backdrop-blur-xl md:rounded-[28px] md:p-8">
        <div className="space-y-4 md:space-y-6">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-950 md:mt-2 md:text-3xl">
              これまでの経験
            </h3>
          </div>
          <div className="space-y-3 text-sm leading-6 text-slate-700 md:space-y-4 md:text-base md:leading-7">
            {profileContent.description.map((line, idx) => (
              <p key={idx} className="whitespace-pre-line">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[24px] border border-white/60 bg-white/85 p-5 shadow-2xl backdrop-blur-xl md:rounded-[28px] md:p-6">
        <div className="space-y-3 md:space-y-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 md:mt-2 md:text-2xl">
              現在担当していること
            </h3>
          </div>
          <div className="space-y-3">
            {profileContent.summaryCards.map((card) => (
              <div key={card.title} className="rounded-2xl bg-slate-100 p-4">
                <p className="text-[11px] font-semibold tracking-[0.06em] text-sky-700 md:text-xs md:tracking-[0.08em]">
                  {card.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
