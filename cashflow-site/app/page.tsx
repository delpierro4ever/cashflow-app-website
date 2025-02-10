"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroSection from "@/components/local/Hero";
import FeaturesSection from "@/components/local/FeatureSection";
import HowItWorks from "@/components/local/HowItWorks";
import SubscriptionPlans from "@/components/local/SubscriptionPlans";
import RewardsSection from "@/components/local/RewardsSection";
import Services from "@/components/local/Services";
import TeamSection from "@/components/local/TeamSection";
import FAQSection from "@/components/local/FAQSection";
import ContactForm from "@/components/local/ContactForm";
import CallToAction from "@/components/local/CallToAction";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <SubscriptionPlans />
      <RewardsSection />
      <Services />
      <TeamSection />
      <FAQSection />
      <ContactForm />
      <CallToAction />
    </motion.div>
  );
}
