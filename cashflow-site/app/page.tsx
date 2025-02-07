"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p>Hello, world!</p>
    </motion.div>
  );
}
