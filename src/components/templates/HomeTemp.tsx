"use client";
import { useState, SyntheticEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ProfileContent from "@/components/organisms/content/ProfileContent";
import NavigationTab from "@/components/organisms/NavigationTab";
import PageNameOverlay from "@/components/organisms/PageNameOverlay";
import SeasonBackgroung from "@/components/organisms/SeasonBackground";
import HistoryContent from "@/components/organisms/content/HistoryContent";
import SkillsetContent from "@/components/organisms/content/SkillsetContent";
import WorkContent from "@/components/organisms/content/WorkContent";

export default function HomeTemp() {
  const [tabValue, setTabValue] = useState(0);
  const tabChange = (event: SyntheticEvent, value: number) => {
    setTabValue(value);
  };

  return (
    <div className="relative">
      {/* 背景 - z-0 */}
      <div className="absolute inset-0 z-0">
        <PageNameOverlay tabValue={tabValue} />
        <SeasonBackgroung tabValue={tabValue} />
      </div>
      <div className="relative z-10">
        <div className="flex flex-col items-center w-full pb-16 md:px-16">
          {/* タイトル */}
          <div className="w-full flex justify-center md:justify-start pt-10 md:pt-16 h-[115px] md:h-[100px]">
            <h1 className="text-3xl md:text-5xl font-bold font-sans">
              Akisute&apos;s Portfolio
            </h1>
          </div>
          {/* ナビゲーションタブ */}
          <div className="flex w-full items-center md:items-end justify-center md:justify-end pr-0 md:pr-8 mb-2 md:mb-5 h-[5px] md:h-[50px]">
            <NavigationTab tabValue={tabValue} tabChange={tabChange} />
          </div>
          {/* メインコンテンツ */}

          <AnimatePresence mode="wait">
            {tabValue === 0 && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-10 mx-4 md:mx-16 w-full"
              >
                <ProfileContent />
              </motion.div>
            )}
            {tabValue === 1 && (
              <motion.div
                key="history"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-10 mx-4 md:mx-16 w-full"
              >
                <HistoryContent />
              </motion.div>
            )}
            {tabValue === 2 && (
              <motion.div
                key="skillset"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-10 mx-4 md:mx-16 w-full"
              >
                <SkillsetContent />
              </motion.div>
            )}
            {tabValue === 3 && (
              <motion.div
                key="work"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-10 mx-4 md:mx-16 w-full"
              >
                <WorkContent />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
