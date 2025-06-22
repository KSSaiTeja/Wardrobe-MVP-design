"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen py-12 md:py-24 lg:py-32 bg-[#F9F6F0] overflow-hidden flex flex-col items-center justify-center">
      <div className="container px-4 mx-auto md:px-6">
        <div className="relative">
          {/* Logo */}
          {/* <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <Image
              src="/logo.svg"
              alt="Wardrobe Logo"
              width={105}
              height={66}
              className="mx-auto"
              priority
            /> 
          </motion.div> */}

          {/* Main content */}
          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Top row images */}
            <div className="flex justify-between px-2 mb-8 sm:px-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-[40%] sm:w-[280px] h-[140px] sm:h-[200px] relative rounded-3xl overflow-hidden shadow-lg"
              >
                <Image
                  src="/clothing-rack.png"
                  alt="Clothing rack"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 40vw, 280px"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-[40%] sm:w-[280px] h-[140px] sm:h-[200px] relative rounded-3xl overflow-hidden shadow-lg"
              >
                <Image
                  src="/folding-clothes.png"
                  alt="Folding clothes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 40vw, 280px"
                />
              </motion.div>
            </div>

            {/* Main heading and CTA */}
            <motion.div
              className="mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[clamp(2rem,6vw,5rem)] font-bold tracking-tight leading-none text-[#1A1A1A] mb-4 sm:mb-6">
                UNLEASH YOUR STYLE
              </h2>
              <p className="text-[#8A7F6B] text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Discover your personal style with our premium clothing style
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center mb-12"
              >
                <Link href="/onboarding">
                  <Button
                    size="lg"
                    className="bg-[#C9A87D] hover:bg-[#B89A6F] text-white rounded-full px-8 py-6"
                  >
                    GET STARTED <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Bottom row images */}
            <div className="flex justify-center gap-4 sm:gap-[100px] md:gap-[200px]">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-[40%] sm:w-[180px] md:w-[200px] h-[180px] sm:h-[220px] md:h-[240px] relative rounded-3xl overflow-hidden shadow-lg"
              >
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop"
                  alt="Woman in casual outfit"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 40vw, (max-width: 768px) 180px, 200px"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-[40%] sm:w-[240px] md:w-[280px] h-[140px] sm:h-[160px] md:h-[180px] relative rounded-3xl overflow-hidden shadow-lg"
              >
                <Image
                  src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&h=1000&fit=crop"
                  alt="Man in formal attire"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 40vw, (max-width: 768px) 240px, 280px"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
