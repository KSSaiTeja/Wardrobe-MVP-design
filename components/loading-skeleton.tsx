"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

export function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E8DED1] bg-white">
      <Skeleton className="w-full aspect-square" />
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <Skeleton className="w-2/3 h-4" />
          <Skeleton className="w-1/4 h-4" />
        </div>
        <div className="flex items-center justify-between">
          <Skeleton className="w-1/3 h-3" />
          <Skeleton className="w-1/4 h-3 rounded-full" />
        </div>
        <Skeleton className="w-full mt-2 rounded-full h-9" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 8 }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="w-full min-h-screen py-12 md:py-24 lg:py-32 bg-[#F9F6F0] overflow-hidden flex flex-col items-center justify-center">
      <div className="container px-4 mx-auto md:px-6">
        <div className="relative">
          {/* Logo skeleton */}
          <div className="mb-20 text-center">
            <Skeleton className="w-32 h-8 mx-auto" />
          </div>

          {/* Main content skeleton */}
          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Top row images skeleton */}
            <div className="flex justify-between px-2 mb-8 sm:px-0">
              <Skeleton className="w-[40%] sm:w-[280px] h-[140px] sm:h-[200px] rounded-3xl" />
              <Skeleton className="w-[40%] sm:w-[280px] h-[140px] sm:h-[200px] rounded-3xl" />
            </div>

            {/* Main heading and CTA skeleton */}
            <div className="mb-6 text-center">
              <Skeleton className="h-[clamp(2rem,6vw,5rem)] w-3/4 mx-auto mb-4 sm:mb-6" />
              <Skeleton className="w-2/3 h-6 mx-auto mb-8" />
              <div className="flex justify-center mb-12">
                <Skeleton className="w-40 h-12 rounded-full" />
              </div>
            </div>

            {/* Bottom row images skeleton */}
            <div className="flex justify-center gap-4 sm:gap-[100px] md:gap-[200px]">
              <Skeleton className="w-[40%] sm:w-[180px] md:w-[200px] h-[180px] sm:h-[220px] md:h-[240px] rounded-3xl" />
              <Skeleton className="w-[40%] sm:w-[240px] md:w-[280px] h-[140px] sm:h-[160px] md:h-[180px] rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OnboardingCardSkeleton() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] flex flex-col items-center justify-center p-4">
      <motion.div
        className="w-full max-w-4xl space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full h-1 bg-[#E8DED1] rounded-full">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#C9A87D] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "20%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>

        <div className="flex justify-between px-4">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <Skeleton className="w-10 h-10 mb-2 rounded-full" />
              <Skeleton className="w-12 h-3" />
            </div>
          ))}
        </div>

        <div className="space-y-3 text-center">
          <Skeleton className="w-3/4 h-10 mx-auto" />
          <Skeleton className="w-2/3 h-5 mx-auto" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="aspect-[3/4] w-full rounded-2xl" />
            ))}
        </div>

        <div className="flex justify-between">
          <Skeleton className="w-24 h-12 rounded-xl" />
          <Skeleton className="w-32 h-12 rounded-xl" />
        </div>
      </motion.div>
    </div>
  );
}
