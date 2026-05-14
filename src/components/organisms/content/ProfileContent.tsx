import Image from "next/image";
import {
  PROFILE_CONTENT,
  BIRTHDAY,
  WORKING_STARTDATE,
} from "@/constant/profileConstant";
import { getYears } from "@/lib/common/getYears";
import { FaEnvelope, FaGithub } from "react-icons/fa";

export default function ProfileContent() {
  const profileContent = PROFILE_CONTENT;
  const age = getYears(BIRTHDAY, "birthday");
  const workYears = getYears(WORKING_STARTDATE, "work");

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto p-4 md:p-8">
      {/* 画像エリア */}
      <div className="flex-shrink-0 w-40 h-40 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-white bg-gray-100 mb-6 md:mb-0 md:mr-10">
        <Image
          src={profileContent.image.src}
          alt={profileContent.image.alt}
          width={320}
          height={320}
          priority
          placeholder="blur"
          blurDataURL={profileContent.image.blurDataURL}
          sizes="(max-width: 768px) 160px, 320px"
          className="rounded-full object-cover shadow-lg border-4 border-white bg-gray-100"
        />
      </div>

      {/* プロフィール・連絡先エリア */}
      <div className="flex-1 bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-10 flex flex-col justify-between w-full">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 tracking-wide">
            {profileContent.name}
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-4">
            <span className="font-semibold">{age}歳</span>、社会人
            <span className="font-semibold">{workYears}年目</span>
          </p>
          <div className="mt-2 space-y-2 text-gray-700 text-sm md:text-base leading-relaxed">
            {profileContent.description.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <a
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm md:text-base underline"
            target="_blank"
            rel="noopener noreferrer"
            href={`mailto:${profileContent.email}`}
          >
            <FaEnvelope className="w-5 h-5" />
            {profileContent.email}
          </a>
          <a
            className="flex items-center gap-2 text-gray-800 hover:text-black text-sm md:text-base underline"
            target="_blank"
            href={profileContent.github}
          >
            <FaGithub className="w-5 h-5" />
            {profileContent.github}
          </a>
        </div>
      </div>
    </div>
  );
}
