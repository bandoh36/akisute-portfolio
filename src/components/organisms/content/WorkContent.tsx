import WorkCard from "@/components/organisms/WorkCard";
import { WORK_CONTENT_PORTFOLIO } from "@/constant/workConstant";

export default function WorkContent() {
  return (
    <div className="flex flex-col items-center w-[95vw] md:w-[1100px] mx-auto mb-40">
      <WorkCard content={WORK_CONTENT_PORTFOLIO} />
    </div>
  );
}
