"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { saveUserPreferences } from "@/lib/user-preferences";
import { OnboardingCardSkeleton } from "@/components/loading-skeleton";
import type { UserPreferences } from "@/lib/types";

const genderInfo = {
  male: {
    name: "Male",
    description: "Styles and fits traditionally designed for men.",
  },
  female: {
    name: "Female",
    description: "Styles and fits traditionally designed for women.",
  },
  unisex: {
    name: "Unisex",
    description: "Inclusive of all gender expressions and neutral styles.",
  },
};

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState<UserPreferences>({
    gender: "",
    stylePreference: [],
    colorPreferences: [],
    budget: [3000],
    age: "",
    occasion: [],
  });
  const [loading, setLoading] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const totalSteps = 6;

  const handleNext = () => {
    if (step < totalSteps) {
      setDirection(1);
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const updateSinglePreference = (
    key: keyof UserPreferences,
    value: UserPreferences[keyof UserPreferences],
  ) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  const toggleArrayPreference = (key: keyof UserPreferences, value: string) => {
    setPreferences((prev) => {
      const currentValues = [...prev[key]];
      if (currentValues.includes(value)) {
        return { ...prev, [key]: currentValues.filter((v) => v !== value) };
      } else {
        return { ...prev, [key]: [...currentValues, value] };
      }
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await saveUserPreferences(preferences);
      router.push("/recommendations");
    } catch (error) {
      console.error("Error saving preferences:", error);
    } finally {
      setLoading(false);
    }
  };

  const isStepComplete = () => {
    switch (step) {
      case 1:
        return !!preferences.gender;
      case 2:
        return preferences.stylePreference.length > 0;
      case 3:
        return preferences.colorPreferences.length > 0;
      case 4:
        return preferences.occasion.length > 0;
      case 5:
        return preferences.budget[0] > 0; // Budget step - always true since we have a default
      case 6:
        return !!preferences.age;
      default:
        return false;
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const transitionConfig = {
    x: { type: "spring", stiffness: 300, damping: 30, duration: 0.3 },
    opacity: { duration: 0.2 },
  };

  const stepContent = [
    {
      title: "Tell us about yourself",
      subtitle: "Let's start with the basics to personalize your experience",
    },
    {
      title: "What's your style?",
      subtitle: "Choose one or more styles that resonate with you",
    },
    { title: "Color preferences", subtitle: "Select colors you love to wear" },
    {
      title: "What are the occasions?",
      subtitle: "Select the occasions you typically dress for",
    },
    {
      title: "What's your budget?",
      subtitle: "Help us recommend clothing within your price range",
    },
    {
      title: "A bit more about you",
      subtitle: "This helps us fine-tune our recommendations",
    },
  ];

  const colorOptions = [
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Navy", hex: "#0A1E3C" },
    { name: "Beige", hex: "#F5F5DC" },
    { name: "Gray", hex: "#808080" },
    { name: "Brown", hex: "#964B00" },
    { name: "Red", hex: "#FF0000" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Green", hex: "#008000" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Purple", hex: "#800080" },
    { name: "Pink", hex: "#FFC0CB" },
  ];

  if (isPageLoading) return <OnboardingCardSkeleton />;

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#1A1A1A]">
      <div className="overflow-hidden fixed inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E8DED1]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-[#D4C8B0]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-[#E8DED1]/20 rounded-full blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#F9F6F0]/80 border-b border-[#E8DED1]">
        <div className="container flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-medium tracking-tighter">
            WARDROBE.
          </Link>
          <div className="text-sm text-[#8A7F6B] font-light">
            Step {step} of {totalSteps}
          </div>
        </div>
      </header>

      <div className="container relative z-10 py-8 max-w-4xl">
        <div className="relative w-full h-1 bg-[#E8DED1] rounded-full mb-8 sm:mb-12">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#C9A87D] rounded-full"
            initial={{ width: `${((step - 1) / totalSteps) * 100}%` }}
            animate={{ width: `${(step / totalSteps) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        <div className="flex justify-between px-0 mb-8 sm:mb-12 sm:px-4">
          {[1, 2, 3, 4, 5, 6].map((stepNumber) => (
            <div key={stepNumber} className="flex flex-col flex-1 items-center">
              <div
                className={`w-6 h-6 sm:w-9 sm:h-9 rounded-full flex items-center justify-center mb-1 sm:mb-2 transition-all duration-300 text-xs sm:text-sm
                  ${
                    stepNumber < step
                      ? "bg-[#C9A87D] text-white"
                      : stepNumber === step
                      ? "bg-white border-2 border-[#C9A87D] text-[#C9A87D]"
                      : "bg-[#E8DED1] text-[#8A7F6B]"
                  }`}
              >
                {stepNumber < step ? (
                  <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                ) : (
                  stepNumber
                )}
              </div>
              <span
                className={`text-[8px] text-center sm:text-xs ${
                  stepNumber === step
                    ? "text-[#C9A87D] font-medium"
                    : "text-[#8A7F6B]"
                }`}
              >
                {stepNumber === 1
                  ? "Gender"
                  : stepNumber === 2
                  ? "Style"
                  : stepNumber === 3
                  ? "Colors"
                  : stepNumber === 4
                  ? "Occasion"
                  : stepNumber === 5
                  ? "Budget"
                  : "Age"}
              </span>
            </div>
          ))}
        </div>

        <motion.div
          className="mb-6 space-y-2 text-center sm:mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-xl font-light tracking-tight sm:text-2xl md:text-3xl text-[#1A1A1A]">
            {stepContent[step - 1].title}
          </h1>
          <p className="text-[#8A7F6B] text-xs sm:text-sm md:text-base font-light max-w-xl mx-auto">
            {stepContent[step - 1].subtitle}
          </p>
        </motion.div>

        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30, duration: 0.4 },
              opacity: { duration: 0.4 },
            }}
            className="mb-8 sm:mb-10 min-h-[250px] sm:min-h-[300px]"
          >
            {step === 1 && (
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                {Object.keys(genderInfo).map((genderKey) => (
                  <div
                    key={genderKey}
                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl focus-within:ring-4 focus-within:ring-[#C9A87D]/70"
                    onClick={() => updateSinglePreference("gender", genderKey)}
                    tabIndex={0}
                    onKeyPress={(e) =>
                      e.key === "Enter" &&
                      updateSinglePreference("gender", genderKey)
                    }
                  >
                    <div className="aspect-[3/4] relative bg-white transition-all duration-300 ease-in-out">
                      <Image
                        src={`/${genderKey}-fashion-silhouette.png`}
                        alt={
                          genderInfo[genderKey as keyof typeof genderInfo].name
                        }
                        fill
                        className="object-contain p-4 transition-transform duration-300 ease-in-out sm:p-6 group-hover:scale-105"
                        sizes="(max-width: 640px) 30vw, (max-width: 768px) 30vw, 30vw"
                        priority={step === 1}
                      />
                      <div className="flex absolute inset-0 flex-col justify-end p-2 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 from-black/60 via-black/30 group-hover:opacity-100 sm:p-3">
                        <h3 className="text-xs font-semibold text-white sm:text-sm">
                          {
                            genderInfo[genderKey as keyof typeof genderInfo]
                              .name
                          }
                        </h3>
                        <p className="text-white/80 text-[10px] sm:text-xs line-clamp-2">
                          {
                            genderInfo[genderKey as keyof typeof genderInfo]
                              .description
                          }
                        </p>
                      </div>
                    </div>
                    {preferences.gender === genderKey && (
                      <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-[#C9A87D] text-white rounded-full p-0.5 sm:p-1 z-10">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {["casual", "formal", "ethnic", "indo-western"].map((style) => (
                  <div
                    key={style}
                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl focus-within:ring-4 focus-within:ring-[#C9A87D]/70"
                    onClick={() =>
                      toggleArrayPreference("stylePreference", style)
                    }
                    tabIndex={0}
                    onKeyPress={(e) =>
                      e.key === "Enter" &&
                      toggleArrayPreference("stylePreference", style)
                    }
                  >
                    <div className="relative bg-white transition-all duration-300 ease-in-out aspect-video">
                      <Image
                        src={`/${style}-style.png`}
                        alt={`${style} Style`}
                        fill
                        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                        sizes="(max-width: 640px) 45vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/70" />
                      <div className="absolute right-0 bottom-0 left-0 p-2 text-white sm:p-3">
                        <h3 className="font-medium text-sm sm:text-base mb-0.5">
                          {style.toUpperCase().replace("-", " ")}
                        </h3>
                      </div>
                    </div>
                    {preferences.stylePreference.includes(style) && (
                      <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-[#C9A87D] text-white rounded-full p-0.5 sm:p-1 z-10">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-[#E8DED1] shadow-sm">
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 sm:gap-3">
                  {colorOptions.map((color) => (
                    <motion.div
                      key={color.name}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col gap-1 items-center cursor-pointer group"
                      onClick={() =>
                        toggleArrayPreference("colorPreferences", color.name)
                      }
                      tabIndex={0}
                      onKeyPress={(e) =>
                        e.key === "Enter" &&
                        toggleArrayPreference("colorPreferences", color.name)
                      }
                    >
                      <div className="relative w-10 h-10 sm:w-14 sm:h-14">
                        <div
                          className="w-full h-full rounded-full transition-all duration-200 ease-in-out group-hover:opacity-80"
                          style={{
                            backgroundColor: color.hex,
                            border:
                              color.name === "White"
                                ? "1px solid #E0E0E0"
                                : "none",
                          }}
                        />
                        {preferences.colorPreferences.includes(color.name) && (
                          <div className="absolute top-0 right-0 bg-[#C9A87D] text-white rounded-full p-0.5">
                            <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                          </div>
                        )}
                      </div>
                      <span className="text-[9px] sm:text-xs text-center text-[#8A7F6B] group-hover:text-[#C9A87D] transition-colors">
                        {color.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {["everyday", "work", "special", "festive"].map((occ) => (
                  <div
                    key={occ}
                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl focus-within:ring-4 focus-within:ring-[#C9A87D]/70"
                    onClick={() => toggleArrayPreference("occasion", occ)}
                    tabIndex={0}
                    onKeyPress={(e) =>
                      e.key === "Enter" &&
                      toggleArrayPreference("occasion", occ)
                    }
                  >
                    <div className="relative bg-white transition-all duration-300 ease-in-out aspect-video">
                      <Image
                        src={`/${occ.replace(" ", "-")}-occasion.png`}
                        alt={`${occ} Occasion`}
                        fill
                        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                        sizes="(max-width: 640px) 45vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/70" />
                      <div className="absolute right-0 bottom-0 left-0 p-2 text-white sm:p-3">
                        <h3 className="font-medium text-sm sm:text-base mb-0.5">
                          {occ.toUpperCase().replace("-", " ")}
                        </h3>
                      </div>
                    </div>
                    {preferences.occasion.includes(occ) && (
                      <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-[#C9A87D] text-white rounded-full p-0.5 sm:p-1 z-10">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {step === 5 && (
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[#E8DED1] shadow-sm">
                <h3 className="text-base sm:text-lg font-medium text-[#1A1A1A] mb-3 sm:mb-4 text-center">
                  Monthly clothing budget (₹)
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center text-xl sm:text-2xl font-medium text-[#C9A87D]">
                    ₹{preferences.budget[0].toLocaleString()}
                  </div>
                  <div className="relative pt-1">
                    <input
                      type="range"
                      min="500"
                      max="10000"
                      step="500"
                      value={preferences.budget[0]}
                      onChange={(e) =>
                        updateSinglePreference("budget", [
                          Number.parseInt(e.target.value),
                        ])
                      }
                      className="w-full h-2 bg-[#E8DED1] rounded-lg appearance-none cursor-pointer accent-[#C9A87D]"
                      aria-label="Budget slider"
                    />
                    <div className="flex justify-between text-[10px] sm:text-xs text-[#8A7F6B] mt-2 px-1">
                      <span>₹500</span>
                      <span>₹10,000+</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
                {["18-24", "25-34", "35-44", "45+"].map((age) => (
                  <button
                    key={age}
                    type="button"
                    onClick={() => updateSinglePreference("age", age)}
                    className={`relative overflow-hidden rounded-xl aspect-[4/3] flex items-center justify-center text-center transition-all duration-300 ease-in-out hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#C9A87D]/70 focus:ring-offset-2 focus:ring-offset-[#F9F6F0]
                      ${
                        preferences.age === age
                          ? "bg-[#C9A87D] text-white shadow-lg"
                          : "bg-white text-[#1A1A1A] hover:bg-[#E8DED1]/70"
                      }`}
                  >
                    <span className="text-base font-light sm:text-lg">
                      {age}
                    </span>
                    {preferences.age === age && (
                      <div className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 bg-white rounded-full p-0.5">
                        <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#C9A87D]" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center mt-6 sm:mt-8">
          <motion.button
            type="button"
            onClick={step > 1 ? handleBack : () => router.push("/")}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-white border border-[#E8DED1] text-[#8A7F6B] hover:bg-[#E8DED1]/60 transition-colors duration-200 text-xs sm:text-sm"
            whileTap={{ scale: 0.97 }}
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{step > 1 ? "Back" : "Home"}</span>
          </motion.button>
          <motion.button
            type="button"
            onClick={handleNext}
            disabled={!isStepComplete() || loading}
            className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-white transition-all duration-200 text-xs sm:text-sm
              ${
                isStepComplete() && !loading
                  ? "bg-[#C9A87D] hover:bg-[#B89A6F] shadow-md hover:shadow-lg"
                  : "bg-[#D4C8B0] cursor-not-allowed"
              }`}
            whileTap={isStepComplete() && !loading ? { scale: 0.97 } : {}}
          >
            {loading ? (
              <span className="flex gap-2 items-center">
                <svg
                  className="w-3 h-3 animate-spin sm:w-4 sm:h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </span>
            ) : step === totalSteps ? (
              "Find My Style"
            ) : (
              "Continue"
            )}
            {!loading && <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
