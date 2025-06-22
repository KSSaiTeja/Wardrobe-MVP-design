"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PackageOpen, Settings2 } from "lucide-react" // Changed icon
import { motion } from "framer-motion"

export default function NoResultsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-lg mx-auto my-10 sm:my-16 p-6 sm:p-10 bg-gradient-to-br from-[#FDFBFB] to-[#EBEDEE] rounded-3xl shadow-xl text-center border border-gray-200/70"
    >
      <div className="flex justify-center mb-6 sm:mb-8">
        <div className="p-5 bg-white rounded-full shadow-lg">
          <PackageOpen className="w-12 h-12 sm:w-16 sm:h-16 text-[#C9A87D]" strokeWidth={1.5} />
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl font-light tracking-tight text-[#3A3A3A] mb-3 sm:mb-4">
        No exact matches right now...
      </h2>

      <p className="text-[#7A7A7A] text-sm sm:text-base font-extralight mb-6 sm:mb-8 max-w-sm mx-auto">
        Our stylists are always curating. Try adjusting your preferences, or check back soon for new arrivals!
      </p>

      <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 12 }}>
        <Link href="/onboarding">
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto rounded-xl border-[#C9A87D] text-[#C9A87D] hover:bg-[#F9F6F0] hover:text-[#B89A6F] transition-all duration-300 px-8 py-3 text-sm sm:text-base font-normal group"
          >
            <Settings2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2.5 transition-transform duration-300 group-hover:rotate-90" />
            Adjust Your Preferences
          </Button>
        </Link>
      </motion.div>

      <p className="text-xs text-gray-400/80 mt-8 font-extralight">WARDROBE &mdash; Constantly Evolving Your Style.</p>
    </motion.div>
  )
}
