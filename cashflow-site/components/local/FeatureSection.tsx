// components/FeaturesSection.tsx
import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/local/Container";
import FadeUp from "./FadeUp";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-40 my-20 bg-[#E5F1F8]" id="feature">
      <Container>
        <FadeUp>
          <div className="max-w-6xl mx-auto px-6 text-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-6xl font-semibold text-secondary">
              CashFlow offers <br />{" "}
              <span className="font-bold">competitive rates</span>
            </h2>
            <p className="mt-4 text-gray-700 text-lg md:text-xl">
              Designed to keep digital transactions affordable. Here’s a
              breakdown of our main charges:
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className=" p-6 rounded-lg shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-secondary">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
};

// Features Data
const features = [
  {
    title: "Wallet-to-Wallet Transfers",
    description:
      "Save on each transfer with cost-effective, minimal fees when sending money between CashFlow users.",
  },
  {
    title: "Taxi Mode Transactions",
    description:
      "Pay drivers and merchants quickly using QR codes with low transaction fees.",
  },
  {
    title: "Low Withdrawal Charges",
    description:
      "Enjoy low rates for withdrawals, with fees as low as 1.0% based on your subscription.",
  },
];

export default FeaturesSection;
