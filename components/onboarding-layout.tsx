"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

interface OnboardingLayoutProps {
  children: ReactNode
  step: number
  totalSteps: number
  title: string
  subtitle: string
}

export default function OnboardingLayout({ children, step, totalSteps, title, subtitle }: OnboardingLayoutProps) {
  const progress = (step / totalSteps) * 100

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-light tracking-tighter">
            WARDROBE
          </Link>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <div className="text-sm text-muted-foreground font-light">
              Step {step} of {totalSteps}
            </div>
          </div>
        </div>
      </header>

      <div className="container max-w-3xl py-8">
        <Progress value={progress} className="mb-8 h-1 bg-[#e2e0dd]" indicatorClassName="bg-black" />

        <motion.div
          className="space-y-2 text-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl">{title}</h1>
          <p className="text-muted-foreground md:text-xl font-light">{subtitle}</p>
        </motion.div>

        {children}
      </div>
    </div>
  )
}
