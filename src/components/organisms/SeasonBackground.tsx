import { AnimatePresence, motion } from "framer-motion";
import SpringBackground from "@/components/organisms/Season/SpringBackground";
import SummerBackground from "@/components/organisms/Season/SummerBackground";
import AutumnBackground from "@/components/organisms/Season/AutumnBackground";
import WinterBackground from "@/components/organisms/Season/WinterBackground";

interface SeasonBackgroungProps {
  tabValue: number;
}

function getCurrentSeasonIndex(): number {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return 0; // 春
  if (month >= 6 && month <= 8) return 1; // 夏
  if (month >= 9 && month <= 11) return 2; // 秋
  return 3; // 冬
}

const seasonOrderMap: Record<number, number[]> = {
  0: [0, 1, 2, 3], // 春
  1: [1, 2, 3, 0], // 夏
  2: [2, 3, 0, 1], // 秋
  3: [3, 0, 1, 2], // 冬
};

export default function SeasonBackground({ tabValue }: SeasonBackgroungProps) {
  const currentSeasonIndex = getCurrentSeasonIndex();
  const seasonOrder = seasonOrderMap[currentSeasonIndex];
  const currentSeason = seasonOrder[tabValue];

  return (
    <AnimatePresence mode="wait">
      {currentSeason === 0 && (
        <motion.div
          key="spring"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-0 pointer-events-auto"
        >
          <SpringBackground />
        </motion.div>
      )}
      {currentSeason === 1 && (
        <motion.div
          key="summer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-0 pointer-events-auto"
        >
          <SummerBackground />
        </motion.div>
      )}
      {currentSeason === 2 && (
        <motion.div
          key="autumn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-0 pointer-events-auto"
        >
          <AutumnBackground />
        </motion.div>
      )}
      {currentSeason === 3 && (
        <motion.div
          key="winter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-0 pointer-events-auto"
        >
          <WinterBackground />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
