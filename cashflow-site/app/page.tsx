"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroSection from "@/components/local/Hero";
import FeaturesSection from "@/components/local/FeatureSection";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroSection />
      <FeaturesSection />
    </motion.div>
  );
}
