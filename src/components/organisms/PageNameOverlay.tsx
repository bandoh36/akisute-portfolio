"use client";

import { AnimatePresence, motion } from "framer-motion";

interface PageNameOverlayProps {
  sectionName: string;
}

const PageNameOverlay = ({ sectionName }: PageNameOverlayProps) => {
  return (
    <AnimatePresence mode="wait">
      {sectionName && (
        <motion.div
          key={sectionName}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="
            fixed bottom-0 right-0 z-10
            pointer-events-none select-none
            text-[13vw] md:text-[11vw] font-extrabold
            text-white
            drop-shadow-[0_0_10px_rgba(255,255,255,0.16)]
            leading-none
            pr-3 pb-2 md:pr-8 md:pb-6
          "
          style={{
            letterSpacing: "0.08em",
            lineHeight: 1,
          }}
        >
          {sectionName}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageNameOverlay;
