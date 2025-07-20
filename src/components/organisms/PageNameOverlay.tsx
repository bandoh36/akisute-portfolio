"use client";

import { AnimatePresence, motion } from "framer-motion";

function getPageName(tabValue: number) {
  if (tabValue === 0) return "PROFILE";
  if (tabValue === 1) return "HISTORY";
  if (tabValue === 2) return "SKILLSET";
  if (tabValue === 3) return "WORK";
  return "";
}

interface PageNameOverlayProps {
  tabValue: number;
}

const PageNameOverlay = ({ tabValue }: PageNameOverlayProps) => {
  const pageName = getPageName(tabValue);

  return (
    <AnimatePresence mode="wait">
      {pageName && (
        <motion.div
          key={pageName}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }} // ← ここを0.4秒に短縮
          className="
            fixed bottom-0 right-0 z-50
            pointer-events-none select-none
            text-[10vw] md:text-[10vw] font-extrabold
            text-white
            drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]
            leading-none
            pr-6 pb-4
          "
          style={{
            letterSpacing: "0.08em",
            lineHeight: 1,
          }}
        >
          {pageName}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageNameOverlay;
