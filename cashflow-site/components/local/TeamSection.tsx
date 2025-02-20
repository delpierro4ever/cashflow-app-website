"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Container from "./Container";
import FadeUp from "./FadeUp";

const teamMembers = [
  {
    name: "Dr. Aminkeng Z. Leke",
    role: "Founder",
    image: "/team/doc.png", // Replace with actual image path
  },
  {
    name: "Miss Vifieh Ruth",
    role: "Backend developer",
    image: "/team/ruth.png",
  },
  {
    name: "Eng. Yunkavi Sabastian",
    role: "Lead Engineer",
    image: "/team/sebastien.png",
  },
  {
    name: "Eng. Ngoe Kelson",
    role: "Lead Backend Developer",
    image: "/team/Kelson.png",
  },
  {
    name: "Eng. Frunwi Mugri Ndeh",
    role: "Frontend Developer",
    image: "/team/chrome.png",
  },
];

const TeamSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section className="bg-[#0F3554] text-white py-16 px-4" id="teams">
      <Container>
        <FadeUp>
          <div className="container mx-auto text-center">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <h2 className="text-4xl font-bold lg:text-6xl">Our Team</h2>
              <p className="text-gray-300 mx-auto mt-4 lg:text-xl">
                As a dynamic team of experts, we specialize in delivering
                cutting-edge solutions across a diverse spectrum of services.
                With a relentless commitment to quality, integrity, and client
                satisfaction, we empower businesses, organizations, and
                communities to thrive in an ever-evolving digital landscape.
              </p>
            </motion.div>

            {/* Team Members Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white text-black rounded-lg overflow-hidden shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(member.image)}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-gray-500">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Modal for Image View */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
              >
                <motion.img
                  src={selectedImage}
                  alt="Team Member"
                  className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </FadeUp>
      </Container>
    </section>
  );
};

export default TeamSection;
