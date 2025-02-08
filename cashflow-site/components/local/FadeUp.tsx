// components/FadeUp.tsx
"use client"; // Needed for Next.js 13+ with App Router

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeUpProps {
  children: React.ReactNode;
}

const FadeUp: React.FC<FadeUpProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
