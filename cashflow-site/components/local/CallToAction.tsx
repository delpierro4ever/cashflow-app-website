import React from "react";
import Container from "./Container";
import FadeUp from "./FadeUp";
import { motion } from "framer-motion";
import Image from "next/image";

function CallToAction() {
  return (
    <div>
      <Container className="my-32">
        <FadeUp>
          <div className="bg-primary text-center sm:text-left rounded-3xl p-12 sm:mx-36">
            <h1 className="text-white  font-bold text-4xl">
              Make transactions <br />
              easier
            </h1>
            <p className="text-white">
              With Cashflow, ensure quick and secure transactions <br /> across
              multple payment platforms
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
        </FadeUp>
      </Container>
    </div>
  );
}

export default CallToAction;
