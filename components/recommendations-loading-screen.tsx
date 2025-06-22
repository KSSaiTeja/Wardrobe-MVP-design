"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function RecommendationsLoadingScreen() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  // Fashion facts to display during loading
  const fashionFacts = [
    "The fashion industry is valued at over $3 trillion globally, making it one of the largest industries in the world.",
    "The average Indian consumer spends approximately 7-8% of their income on clothing and fashion accessories.",
    "Fast fashion brands produce up to 52 micro-seasons per year, encouraging constant consumption.",
    "It takes about 2,700 liters of water to produce one cotton t-shirt, equivalent to what one person drinks in 2.5 years.",
    "The Indian textile industry is one of the oldest in the world, dating back several centuries.",
    "Sustainable fashion is growing at a rate of 9.5% annually in India as consumers become more environmentally conscious.",
    "Traditional Indian textiles like Khadi, Banarasi silk, and Chanderi are experiencing a revival in modern fashion.",
    "The average person wears only 20% of the clothes in their wardrobe regularly.",
    "India is the second-largest exporter of textiles and clothing in the world.",
    "The concept of 'capsule wardrobe' was introduced in the 1970s to promote mindful consumption.",
  ];

  useEffect(() => {
    // Rotate through facts every 5 seconds
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % fashionFacts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F9F6F0] text-[#1A1A1A] p-3 sm:p-4 safe-padding">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E8DED1]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-[#D4C8B0]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-[#E8DED1]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-md px-3 mx-auto space-y-6 text-center sm:space-y-8 sm:px-0">
        <motion.h1
          className="mb-6 text-3xl font-light tracking-tighter sm:text-4xl sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          WARDROBE.
        </motion.h1>

        <motion.div
          className="flex justify-center mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Loader2 className="h-10 w-10 sm:h-12 sm:w-12 animate-spin text-[#C9A87D]" />
        </motion.div>

        <motion.div
          className="space-y-3 sm:space-y-4 min-h-[100px] sm:min-h-[120px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-lg font-light sm:text-xl">Did you know?</h2>
          <motion.div
            key={currentFactIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="min-h-[70px] sm:min-h-[80px] flex items-center justify-center"
          >
            <p className="text-[#8A7F6B] font-light text-base sm:text-lg italic">
              "{fashionFacts[currentFactIndex]}"
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-[#8A7F6B] font-light text-sm">
            Curating your personalized style recommendations...
          </p>
          <motion.div
            className="absolute transform -translate-x-1/2 -bottom-8 left-1/2"
            animate={{
              y: [0, -5, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <svg
              width="20"
              height="10"
              viewBox="0 0 20 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L10 9L19 1"
                stroke="#C9A87D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
