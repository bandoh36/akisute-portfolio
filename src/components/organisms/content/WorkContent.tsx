import WorkCard from "@/components/organisms/WorkCard";
import { WORK_CONTENTS } from "@/constant/workConstant";

export default function WorkContent() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
      {WORK_CONTENTS.map((content) => (
        <WorkCard key={content.title} content={content} />
      ))}
    </div>
  );
}
