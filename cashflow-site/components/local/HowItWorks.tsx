"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./Container";
import FadeUp from "./FadeUp";

const steps = [
  {
    id: "01",
    title: "Create your account",
    desc: "Install the app and create your free account to get started.",
  },
  {
    id: "02",
    title: "Set up your wallet",
    desc: "Install the app and create your free account to get started.",
  },
  {
    id: "03",
    title: "Start transacting",
    desc: "Install the app and create your free account to get started.",
  },
  {
    id: "04",
    title: "Withdraw funds",
    desc: "Install the app and create your free account to get started.",
  },
];

const HowItWorks = () => {
  return (
    <section className="mb-20 my-24">
      <Container>
        <FadeUp>
          <div className="text-center pb-16">
            <h2 className="text-3xl font-bold   text-[#2A4365]">
              How it works
            </h2>
            <p className="text-gray-600   mt-2">
              Get started with the quick and easy steps to follow
            </p>
          </div>

          <div className=" px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* Left Column: Floating Image */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center"
            >
              <Image
                src="/iphone.png"
                alt="App Mockup"
                width={400}
                height={500}
                className="drop-shadow-xl"
              />
            </motion.div>

            {/* Right Column: Steps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="mt-6 space-y-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#69A5C7] text-[#69A5C7] font-semibold text-lg">
                      {step.id}
                    </div>
                    <div>
                      <h3 className="text-[#2A4365] font-semibold text-lg">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
};

export default HowItWorks;
