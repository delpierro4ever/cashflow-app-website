"use client";

import { pricingPlans } from "../data/pricingData";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import Container from "./Container";
import FadeUp from "./FadeUp";

const SubscriptionPlans = () => {
  return (
    <section className="my-32">
      <Container className="my-32">
        <FadeUp>
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-[#2A4365]">
              Our Subscription Plans
            </h2>
            <p className="text-gray-600 mt-2">
              Choose the plan that fits your needs and enjoy great perks along
              the way.
            </p>

            {/* Pricing Cards Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="border rounded-xl shadow-lg p-6 bg-white py-12"
                >
                  <h3 className="text-xl font-semibold text-[#2A4365]">
                    {plan.name}
                  </h3>
                  <p className="text-2xl text-left font-bold text-[#2A4365] mt-2">
                    {plan.price}
                  </p>

                  {/* Features List */}
                  <ul className="mt-4 space-y-2 text-left">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        {feature.included ? (
                          <CheckCircle className="text-green-500" size={20} />
                        ) : (
                          <XCircle className="text-red-500" size={20} />
                        )}
                        <span className="text-gray-700 leading-9">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Choose Plan Button */}
                  <Button className="mt-6 w-full bg-primary text-white hover:bg-[#2A4365]">
                    Choose Plan
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
};

export default SubscriptionPlans;
