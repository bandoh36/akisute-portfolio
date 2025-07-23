import SkillsetList from "@/components/organisms/SkillsetList";

export default function SkillsetContent() {
  return (
    <div className="flex flex-col items-center md:mb-50">
      <SkillsetList id="qualification" />
      <SkillsetList id="front" />
      <SkillsetList id="back" />
      <SkillsetList id="other" />
    </div>
  );
}
