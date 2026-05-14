import * as React from "react";
import { SKILLSET_CONTENT } from "@/constant/skillsetConstant";

export interface SkillsetContentProps {
  id: string;
}

const skillsetContent = SKILLSET_CONTENT;

const getSkillContents = (type: string) => {
  const resultContents = [];
  for (let i = 0; i < skillsetContent.length; i++) {
    skillsetContent[i].id === type && resultContents.push(skillsetContent[i]);
  }
  return resultContents;
};

// 星のレーティングを表示するコンポーネント
const Rating: React.FC<{ value: number; max?: number }> = ({
  value,
  max = 3,
}) => (
  <span>
    {Array.from({ length: max }).map((_, i) =>
      i < value ? (
        <span key={i} className="text-yellow-400">
          ★
        </span>
      ) : (
        <span key={i} className="text-gray-300">
          ☆
        </span>
      )
    )}
  </span>
);

export default function SkillsetList({ id }: SkillsetContentProps) {
  return (
    <div
      className="
        w-[95vw] md:w-[1100px] max-w-[1200px] bg-white rounded-[10px]
        shadow-lg p-6 mb-6 mx-0 md:mx-6 overflow-auto
      "
    >
      <div>
        <h2 className="text-lg font-bold text-blue-600 mb-4">
          {id === "qualification" && "資格"}
          {id === "front" && "フロントエンド"}
          {id === "back" && "バックエンド"}
          {id === "other" && "その他"}
        </h2>
        <table className="w-full border-collapse">
          <thead>
            {id === "qualification" ? (
              <tr>
                <th className="w-1/2 py-2"></th>
                <th className="w-1/2 py-2"></th>
              </tr>
            ) : (
              <tr className="bg-gray-100">
                <th className="w-[15%] py-2 font-medium text-left">技術要素</th>
                <th className="w-[15%] py-2 font-medium text-left">レベル</th>
                <th className="w-[70%] py-2 font-medium text-left">説明</th>
              </tr>
            )}
          </thead>
          <tbody>
            {getSkillContents(id).map((row, idx) => (
              <tr key={`${row.id}-${idx}`} className="border-b last:border-b-0">
                <td className="py-2 px-2 font-semibold">{row.tech}</td>
                {id === "qualification" ? (
                  <></>
                ) : (
                  <td className="py-2 px-2">
                    <Rating value={row.level} max={3} />
                  </td>
                )}
                <td className="py-2 px-2">{row.explain}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
