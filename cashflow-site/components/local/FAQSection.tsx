"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

const faqs = [
  {
    question: "What is this platform all about?",
    answer:
      "This platform allows you to swap currency by posting a request to send money to a specific country. Instead of traditional money transfers, you can connect with someone in that country who can help you make a purchase or assist in other ways, while you give the equivalent amount in your local currency to a designated person.",
  },
  {
    question: "How do I post a request to send money?",
    answer:
      "This platform allows you to swap currency by posting a request to send money to a specific country. Instead of traditional money transfers, you can connect with someone in that country who can help you make a purchase or assist in other ways, while you give the equivalent amount in your local currency to a designated person.",
  },
  {
    question: "How do I contact someone who has posted a request?",
    answer:
      "This platform allows you to swap currency by posting a request to send money to a specific country. Instead of traditional money transfers, you can connect with someone in that country who can help you make a purchase or assist in other ways, while you give the equivalent amount in your local currency to a designated person.",
  },
  {
    question: "Is it safe to swap currency using this platform?",
    answer:
      "This platform allows you to swap currency by posting a request to send money to a specific country. Instead of traditional money transfers, you can connect with someone in that country who can help you make a purchase or assist in other ways, while you give the equivalent amount in your local currency to a designated person.",
  },
  {
    question: "What should I do if I face any issues with a transaction?",
    answer:
      "This platform allows you to swap currency by posting a request to send money to a specific country. Instead of traditional money transfers, you can connect with someone in that country who can help you make a purchase or assist in other ways, while you give the equivalent amount in your local currency to a designated person.",
  },
  {
    question: "Are there any fees for using the platform?",
    answer:
      "This platform allows you to swap currency by posting a request to send money to a specific country. Instead of traditional money transfers, you can connect with someone in that country who can help you make a purchase or assist in other ways, while you give the equivalent amount in your local currency to a designated person.",
  },
  {
    question: "What types of transactions can I make on this platform?",
    answer:
      "This platform allows you to swap currency by posting a request to send money to a specific country. Instead of traditional money transfers, you can connect with someone in that country who can help you make a purchase or assist in other ways, while you give the equivalent amount in your local currency to a designated person.",
  },
  {
    question: "How do I ensure the transaction goes smoothly?",
    answer:
      "YThis platform allows you to swap currency by posting a request to send money to a specific country. Instead of traditional money transfers, you can connect with someone in that country who can help you make a purchase or assist in other ways, while you give the equivalent amount in your local currency to a designated person.",
  },
  {
    question: "Can I use this platform for personal or business transactions?",
    answer:
      "This platform allows you to swap currency by posting a request to send money to a specific country. Instead of traditional money transfers, you can connect with someone in that country who can help you make a purchase or assist in other ways, while you give the equivalent amount in your local currency to a designated person.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support various payment methods, including bank transfers, mobile money, and other peer-to-peer payment options.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black py-16 px-4 my-32" id="faq">
      <FadeUp>
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-[#0F3554] lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-2 lg:text-xl">
            Know more about Cashflow
          </p>

          <div className="max-w-3xl mx-auto mt-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  className="w-full text-left py-4 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <span className="text-xl">
                    {openIndex === index ? "▲" : "▼"}
                  </span>
                </button>

                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-gray-600 pb-4 text-center sm:text-left"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
};

export default FAQSection;
