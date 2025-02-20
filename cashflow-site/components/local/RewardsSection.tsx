"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import FadeUp from "./FadeUp";

const RewardsSection = () => {
  const cards = [
    {
      title: "Bronze Plan Reward",
      desc: "20% cashback on transactions after receiving 25,000F",
    },
    {
      title: "Silver Plan Reward",
      desc: "20% cashback on transactions after receiving 100,000F",
    },
    {
      title: "Gold Plan Reward",
      desc: "20% cashback on transactions after receiving 260,000F",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="bg-secondary py-32 text-white my-32" id="reward">
      <Container>
        <FadeUp>
          {/* Heading & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold mb-4 text-grey-200 lg:text-6xl">
              Rewards Tiers
            </h2>
            <p className="text-gray-100 max-w-2xl mx-auto lg:text-xl">
              Unlock greater benefits as you reach new transaction milestones.
              Enjoy consistent cashback rewards at every tier.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 "
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-6 h-full bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#2A4365]">
                    {card.title}
                  </h3>
                  <p className="text-gray-700">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </FadeUp>
      </Container>
    </section>
  );
};

export default RewardsSection;
