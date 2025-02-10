"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./Container";
import FadeUp from "./FadeUp";

const steps = [
  {
    id: "/features/groupIcon.png",
    title: "Group Wallet for Shared Payments",
    desc:
      `With Group Wallet, members can pool funds for shared expenses, making it ideal for teams, friends, or families managing joint costs or community projects.                           ` +
      "Admin Control: Only the designated admin has withdrawal permissions, ensuring funds are used responsibly. Members can view all transactions, receive notifications, and contribute seamlessly to the wallet. " +
      "Group Wallet makes it easier than ever to organize group finances, enhancing accountability and transparency for collective payments",
  },
  {
    id: "/features/moneyIcon.png",
    title: "Secure Payments",
    desc: "With Group Wallet, members can pool funds for shared expenses, making it ideal for teams, friends, or families ",
  },
  {
    id: "/features/bankIcon.png",
    title: "Wide variety of payment methods",
    desc: "With Group Wallet, members can pool funds for shared expenses, making it ideal for teams, friends, or families ",
  },
];

const Services = () => {
  return (
    <section className="mb-20">
      <Container>
        <FadeUp>
          <div className="text-center pb-16">
            <h2 className="text-3xl font-bold   text-[#2A4365]">
              Our Features
            </h2>
            <p className="text-gray-600 mt-2">
              Earn rewards as you use CashFlow, with cashback on transactions
              that exceed your free limit
            </p>
          </div>

          <div className=" px-6 md:flex items-center gap-12 justify-center">
            {/* Left Column: Floating Image */}

            <div className="flex-1 flex items-center justify-center">
              <Image
                src="/features/features.png"
                alt="App Mockup"
                width={400}
                height={500}
                className="drop-shadow-xl"
              />
            </div>

            {/* Right Column: Steps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-1"
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
                    <div className="w-12 h-12 flex items-center justify-center object-contain text-[#69A5C7] font-semibold text-lg">
                      {
                        <Image
                          src={step.id}
                          alt="App Mockup"
                          width={100}
                          height={100}
                          className="drop-shadow-xl object-contain"
                        />
                      }
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

export default Services;
