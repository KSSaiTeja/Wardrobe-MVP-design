"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSkeleton } from "@/components/loading-skeleton";
import HeroSection from "./hero-section";
import Image from "next/image";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#F9F6F0] text-[#1A1A1A]">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E8DED1]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-[#D4C8B0]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-[#E8DED1]/20 rounded-full blur-3xl" />
      </div>

      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrollY > 50
            ? "backdrop-blur-md bg-[#F9F6F0]/80 border-b border-[#E8DED1]"
            : "bg-transparent"
        }`}
      >
        <div className="container relative flex items-center justify-between h-20 pt-4">
          <Link
            href="/"
            className="flex-shrink-0 text-2xl font-medium tracking-tighter"
          >
            <Image
              src="/logo.svg"
              alt="Wardrobe Logo"
              width={105}
              height={66}
            />
          </Link>
          <nav className="absolute items-center hidden space-x-8 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 md:flex">
            <Link
              href="/"
              className="text-sm font-medium hover:text-[#C9A87D] transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-[#C9A87D] transition-colors"
            >
              About
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-[#C9A87D] transition-colors"
            >
              How It Works
            </Link>
          </nav>
          <div className="flex items-center flex-shrink-0 space-x-4">
            <Link
              href="/onboarding"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-[#C9A87D] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#B89A6F]"
            >
              Get Started
            </Link>
            <Link
              href="/onboarding"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#C9A87D] text-white"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1">
        {isLoading ? (
          <section className="w-full py-24 md:py-32">
            <div className="container px-4 md:px-6">
              <HeroSkeleton />
            </div>
          </section>
        ) : (
          <HeroSection />
        )}

        <section id="about" className="w-full py-12 md:py-24 bg-[#F9F6F0]/50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-light tracking-tight uppercase sm:text-4xl md:text-5xl">
                  Our Approach
                </h2>
                <p className="max-w-[900px] text-[#8A7F6B] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-extralight">
                  Personalized style recommendations based on your preferences
                </p>
              </div>
            </motion.div>
            <div className="grid items-center max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-3 lg:gap-12">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <div className="text-7xl font-light text-[#D4C8B0]">01</div>
                <h3 className="text-xl font-light">Share Your Preferences</h3>
                <p className="text-[#8A7F6B] font-extralight">
                  Tell us about your style through our visual questionnaire.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="text-7xl font-light text-[#D4C8B0]">02</div>
                <h3 className="text-xl font-light">Our Algorithm Works</h3>
                <p className="text-[#8A7F6B] font-extralight">
                  Our sophisticated algorithm analyzes your inputs to find the
                  perfect matches.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="text-7xl font-light text-[#D4C8B0]">03</div>
                <h3 className="text-xl font-light">Discover Your Wardrobe</h3>
                <p className="text-[#8A7F6B] font-extralight">
                  Get personalized recommendations that match your unique style.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="relative overflow-hidden aspect-square rounded-2xl">
                <Image
                  src="/fashion-collection-image.png"
                  alt="Fashion collection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                />
              </div>
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-light tracking-tight uppercase sm:text-4xl md:text-5xl">
                    Curated <br />
                    For Your <br />
                    <span className="text-[#C9A87D]">Lifestyle</span>
                  </h2>
                  <p className="max-w-[600px] text-[#8A7F6B] md:text-lg font-extralight">
                    We believe in a world where you have total freedom to be
                    you, without judgment. Fashion that celebrates your
                    uniqueness.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Link href="/onboarding">
                    <Button
                      size="lg"
                      className="rounded-xl bg-[#C9A87D] hover:bg-[#B89A6F] text-white font-extralight"
                    >
                      Start Your Journey
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#F9F6F0]/50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-light tracking-tight uppercase sm:text-4xl md:text-5xl">
                  Testimonials
                </h2>
                <p className="max-w-[900px] text-[#8A7F6B] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-extralight">
                  What our clients say about their experience
                </p>
              </div>
            </motion.div>
            <div className="grid items-center max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-3 lg:gap-12">
              <motion.div
                className="flex flex-col justify-center space-y-4 p-6 bg-white rounded-2xl border border-[#E8DED1]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <p className="text-[#8A7F6B] font-extralight italic">
                  "Wardrobe helped me find my style after years of confusion.
                  The recommendations perfectly match my taste and budget!"
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=faces"
                    width={40}
                    height={40}
                    alt="Priya S. - Delhi"
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-light">Priya S.</p>
                    <p className="text-sm text-[#8A7F6B] font-extralight">
                      Delhi
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center space-y-4 p-6 bg-white rounded-2xl border border-[#E8DED1]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <p className="text-[#8A7F6B] font-extralight italic">
                  "As someone who hates shopping, this app is a lifesaver. The
                  style quiz was fun and the recommendations were spot on."
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=faces"
                    width={40}
                    height={40}
                    alt="Rahul M. - Mumbai"
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-light">Rahul M.</p>
                    <p className="text-sm text-[#8A7F6B] font-extralight">
                      Mumbai
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center space-y-4 p-6 bg-white rounded-2xl border border-[#E8DED1]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <p className="text-[#8A7F6B] font-extralight italic">
                  "The visual style selection made it so easy to communicate my
                  preferences. I love every piece that was recommended!"
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=faces"
                    width={40}
                    height={40}
                    alt="Ananya K. - Bangalore"
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-light">Ananya K.</p>
                    <p className="text-sm text-[#8A7F6B] font-extralight">
                      Bangalore
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#C9A87D] text-white">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-light tracking-tight uppercase md:text-4xl/tight">
                Ready To Transform <br />
                Your Wardrobe?
              </h2>
              <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-extralight">
                Join thousands of fashion-forward Indians who have discovered
                their perfect style with Wardrobe.
              </p>
            </motion.div>
            <div className="flex gap-4 lg:justify-end">
              <Link href="/onboarding">
                <Button
                  size="lg"
                  className="rounded-xl bg-white hover:bg-white/90 text-[#C9A87D] font-extralight"
                >
                  Get Started Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-[#E8DED1] py-6 md:py-0 bg-[#F9F6F0]">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-[#8A7F6B] md:text-left font-extralight">
            © {new Date().getFullYear()} WARDROBE. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-[#8A7F6B] font-extralight">
            <Link href="#" className="hover:text-[#C9A87D] transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-[#C9A87D] transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-[#C9A87D] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
