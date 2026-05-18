"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaEnvelope, FaGithub } from "react-icons/fa";

import ProfileContent from "@/components/organisms/content/ProfileContent";
import NavigationTab from "@/components/organisms/NavigationTab";
import PageNameOverlay from "@/components/organisms/PageNameOverlay";
import SeasonBackground from "@/components/organisms/SeasonBackground";
import HistoryContent from "@/components/organisms/content/HistoryContent";
import SkillsetContent from "@/components/organisms/content/SkillsetContent";
import WorkContent from "@/components/organisms/content/WorkContent";
import {
  BIRTHDAY,
  PROFILE_CONTENT,
  WORKING_STARTDATE,
} from "@/constant/profileConstant";
import { getYears } from "@/lib/common/getYears";

export default function HomeTemp() {
  const sections = useMemo(
    () => [
      { id: "profile", label: "PROFILE", overlay: "PROFILE" },
      { id: "history", label: "CAREER", overlay: "CAREER" },
      { id: "skillset", label: "SKILLS", overlay: "SKILLS" },
      { id: "work", label: "WORKS", overlay: "WORKS" },
    ],
    [],
  );
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const age = getYears(BIRTHDAY, "birthday");
  const workYears = getYears(WORKING_STARTDATE, "work");

  useEffect(() => {
    const updateActiveSection = () => {
      const currentPosition = window.scrollY + window.innerHeight * 0.35;

      const matchedSection = [...sections].reverse().find((section) => {
        const element = document.getElementById(section.id);
        if (!element) return false;

        return element.offsetTop <= currentPosition;
      });

      if (matchedSection) {
        setActiveSection(matchedSection.id);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sections]);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(sectionId);
  };

  const currentOverlay =
    sections.find((section) => section.id === activeSection)?.overlay ??
    "PROFILE";

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <SeasonBackground currentSection={activeSection} />
        <div className="absolute inset-0 bg-slate-950/30 backdrop-[blur(0.5px)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_34%),linear-gradient(180deg,_rgba(15,23,42,0.06)_0%,_rgba(15,23,42,0.42)_65%,_rgba(15,23,42,0.56)_100%)]" />
        <PageNameOverlay sectionName={currentOverlay} />
      </div>
      <div className="relative z-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-24 pt-8 md:px-8 md:pt-14">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-6"
          >
            <div className="rounded-[32px] border border-white/15 bg-white/12 p-6 shadow-2xl backdrop-blur-2xl md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
                <div className="flex h-full flex-col justify-between gap-8">
                  <div className="space-y-3">
                    <span className="inline-flex rounded-full border border-sky-200/30 bg-sky-100/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-100">
                      Career Portfolio
                    </span>
                    <div className="space-y-4">
                      <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
                        Akisute&apos;s Portfolio
                      </h1>
                      <p className="max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
                        {PROFILE_CONTENT.lead}
                      </p>
                    </div>
                    <div className="pt-2">
                      <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-white/80 bg-white/20 shadow-lg md:h-32 md:w-32">
                        <Image
                          src={PROFILE_CONTENT.image.src}
                          alt={PROFILE_CONTENT.image.alt}
                          width={320}
                          height={320}
                          priority
                          placeholder="blur"
                          blurDataURL={PROFILE_CONTENT.image.blurDataURL}
                          sizes="128px"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`mailto:${PROFILE_CONTENT.email}`}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                    >
                      <FaEnvelope className="h-4 w-4" />
                      Contact
                    </a>
                    <a
                      href={PROFILE_CONTENT.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                    >
                      <FaGithub className="h-4 w-4" />
                      GitHub
                    </a>
                    <button
                      type="button"
                      onClick={() => handleNavigate("work")}
                      className="inline-flex items-center gap-2 rounded-full border border-transparent bg-sky-400/90 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                    >
                      View Works
                    </button>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  <div className="rounded-3xl border border-white/15 bg-slate-950/35 p-5 backdrop-blur-md">
                    <p className="text-sm text-slate-300">Name</p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      {PROFILE_CONTENT.name}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/15 bg-slate-950/35 p-5 backdrop-blur-md">
                    <p className="text-sm text-slate-300">Career</p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      {age}歳 / 社会人{workYears}年目
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/15 bg-slate-950/35 p-5 backdrop-blur-md sm:col-span-3 lg:col-span-1">
                    <p className="text-sm text-slate-300">Current Focus</p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      {PROFILE_CONTENT.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <div className="sticky top-4 z-30 mt-6 flex justify-center">
            <NavigationTab
              currentSection={activeSection}
              sections={sections}
              onNavigate={handleNavigate}
            />
          </div>

          <div className="mt-10 space-y-8 md:space-y-12">
            <motion.section
              id="profile"
              data-section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="scroll-mt-28"
            >
              <SectionIntro
                eyebrow="PROFILE"
                title="どんなことを担当しているか"
              />
              <div className="mt-5">
                <ProfileContent />
              </div>
            </motion.section>

            <motion.section
              id="history"
              data-section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="scroll-mt-28"
            >
              <SectionIntro eyebrow="CAREER" title="これまでの経歴" />
              <div className="mt-5">
                <HistoryContent />
              </div>
            </motion.section>

            <motion.section
              id="skillset"
              data-section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="scroll-mt-28"
            >
              <SectionIntro eyebrow="SKILLS" title="保有スキルと資格" />
              <div className="mt-5">
                <SkillsetContent />
              </div>
            </motion.section>

            <motion.section
              id="work"
              data-section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="scroll-mt-28"
            >
              <SectionIntro eyebrow="WORKS" title="制作物とアウトプット" />
              <div className="mt-5">
                <WorkContent />
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

function SectionIntro({ eyebrow, title, description }: SectionIntroProps) {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-200 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
