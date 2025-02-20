"use client ";

// components/HeroSection.tsx

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Container from "./Container"; // Optional: use your reusable container for consistent layout

const HeroSection: React.FC = () => {
  return (
    <Container id="hero">
      <section className="py-12 my-12">
        <div className=" text-center justify-center md:flex items-center md:text-left gap-8 ">
          {/* First Column */}
          <div className="flex-1">
            <h1 className="text-4xl lg:text-8xl font-bold text-secondary leading-9">
              Day to day <br /> <span className="text-primary">payments</span>
              <br />
              made simple
            </h1>
            <p className="mt-4 text-lg lg:text-xl text-gray-700">
              This is a description under the large text, explaining the main
              value proposition or features of your product or service.
            </p>
            <div className="mt-8 flex space-x-4 items-center justify-center md:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="cursor-pointer"
              >
                <Image
                  src="/googleplay.png"
                  alt="Google Play Store"
                  width={150}
                  height={50}
                  className="object-contain "
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="cursor-pointer"
              >
                <Image
                  src="/appleplay.png"
                  alt="APPle Play Store"
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>

          {/* Second Column */}
          <div className="flex-1">
            <motion.div
              animate={{ y: [0, -10, 0] }} // Moves up by 10px and back to 0
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full h-full"
            >
              <Image
                src="/hero.png"
                alt="Hero Photo"
                width={1900}
                height={1900}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
