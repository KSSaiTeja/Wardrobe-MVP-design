"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getUserPreferences } from "@/lib/user-preferences";
import {
  getStrictRecommendations,
  getRelaxedRecommendations,
} from "@/lib/recommendations";
import type { ClothingItem, UserPreferences } from "@/lib/types";
import RecommendationsLoadingScreen from "@/components/recommendations-loading-screen";
import NoResultsCard from "@/components/no-results-card";

export default function RecommendationsPage() {
  const [userPreferences, setUserPreferences] =
    useState<UserPreferences | null>(null);
  const [strictRecommendations, setStrictRecommendations] = useState<
    ClothingItem[]
  >([]);
  const [relaxedRecommendations, setRelaxedRecommendations] = useState<
    ClothingItem[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [loadingFacts, setLoadingFacts] = useState(true);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setLoadingFacts(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const preferences = await getUserPreferences();
        if (preferences) {
          setUserPreferences(preferences as UserPreferences);
          const [strict, relaxed] = await Promise.all([
            getStrictRecommendations(preferences as UserPreferences),
            getRelaxedRecommendations(preferences as UserPreferences),
          ]);
          setStrictRecommendations(strict);
          setRelaxedRecommendations(relaxed);
        } else {
          const defaultPrefs: UserPreferences = {
            gender: "unisex",
            stylePreference: [],
            budget: [5000],
            age: "18-24",
            occasion: [],
            colorPreferences: [],
          };
          const [strict, relaxed] = await Promise.all([
            getStrictRecommendations(defaultPrefs),
            getRelaxedRecommendations(defaultPrefs),
          ]);
          setStrictRecommendations(strict);
          setRelaxedRecommendations(relaxed);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setStrictRecommendations([]);
        setRelaxedRecommendations([]);
      } finally {
        setLoading(false);
        setTimeout(() => setLoadingFacts(false), 500);
      }
    };

    fetchData();
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  const ProductCard = ({ item }: { item: ClothingItem }) => (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <Card className="overflow-hidden rounded-2xl border border-[#E8DED1] bg-white hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        <div className="overflow-hidden relative aspect-square">
          <Image
            src={item.image}
            alt={item.name}
            className="object-cover"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 w-7 h-7 rounded-full shadow-sm backdrop-blur-sm bg-white/90 hover:bg-white sm:w-8 sm:h-8"
            onClick={() => toggleFavorite(item.id)}
          >
            <Heart
              className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${
                favorites.includes(item.id)
                  ? "fill-[#C9A87D] text-[#C9A87D]"
                  : "text-[#8A7F6B]"
              }`}
            />
          </Button>
        </div>
        <CardContent className="flex flex-col flex-grow justify-between p-2 space-y-1 sm:p-3">
          <div>
            <h3 className="text-xs sm:text-sm font-medium text-[#1A1A1A] line-clamp-1">
              {item.name}
            </h3>
            <p className="text-[10px] sm:text-xs text-[#8A7F6B]">
              {item.brand}
            </p>
          </div>
          <div className="flex justify-between items-center mt-1 sm:mt-2">
            <Badge className="bg-[#F9F6F0] text-[#C9A87D] border-[#E8DED1] hover:bg-[#E8DED1] text-[9px] sm:text-[10px] font-normal px-1.5 py-0.5">
              ₹{item.price.toLocaleString()}
            </Badge>
            <Link
              href={item.productUrl || `#`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] sm:text-xs text-[#C9A87D] hover:underline"
            >
              Buy
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  if (loading || loadingFacts) {
    return <RecommendationsLoadingScreen />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F9F6F0]">
      <div className="overflow-hidden fixed inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E8DED1]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-[#D4C8B0]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-[#E8DED1]/20 rounded-full blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#F9F6F0]/80 border-b border-[#E8DED1]">
        <div className="container flex justify-between items-center px-3 h-14 sm:h-16 sm:px-4">
          <Link
            href="/"
            className="text-xl font-medium tracking-tighter sm:text-2xl"
          >
            WARDROBE.
          </Link>
          <div className="flex flex-1 justify-end items-center space-x-2 sm:space-x-4">
            <nav className="flex items-center space-x-1 sm:space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="relative w-9 h-9 sm:h-10 sm:w-10"
              >
                <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-[#8A7F6B]" />
                {favorites.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#C9A87D] text-[10px] font-bold text-white">
                    {favorites.length}
                  </span>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 sm:h-10 sm:w-10"
              >
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-[#8A7F6B]" />
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1">
        <div className="bg-[#C9A87D] text-white py-6 sm:py-8">
          <div className="container px-3 sm:px-4">
            <Link
              href="/onboarding"
              className="inline-flex items-center mb-3 text-xs font-light transition-colors sm:text-sm text-white/80 sm:mb-4 hover:text-white"
            >
              <ArrowLeft className="mr-1 w-3 h-3 sm:h-4 sm:w-4" />
              Refine your preferences
            </Link>

            <motion.div
              className="mb-4 space-y-1 sm:mb-6 sm:space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-xl font-light tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
                YOUR CURATED STYLE SELECTION
              </h1>
              {userPreferences && (
                <p className="text-xs font-extralight sm:text-sm text-white/80">
                  Discover pieces that match your unique taste.
                  {userPreferences.stylePreference.length > 0 &&
                    ` Style: ${userPreferences.stylePreference.join(", ")}.`}
                  {` Budget: ~₹${userPreferences.budget[0]}.`}
                </p>
              )}
            </motion.div>
          </div>
        </div>

        <div className="container py-6 sm:py-8">
          {/* Show strict recommendations if available */}
          {strictRecommendations.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 sm:mb-10"
            >
              <div className="mb-4 sm:mb-5">
                <h2 className="text-lg sm:text-xl font-light tracking-tight text-[#1A1A1A] mb-1">
                  Based on Your Preferences
                </h2>
                <p className="text-xs sm:text-sm text-[#8A7F6B] font-light">
                  Items that perfectly match your style, budget, and preferences
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-4">
                {strictRecommendations.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </motion.section>
          )}

          {/* Show relaxed recommendations if available */}
          {relaxedRecommendations.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-4 sm:mb-5">
                <h2 className="text-lg sm:text-xl font-light tracking-tight text-[#1A1A1A] mb-1">
                  More Options for You
                </h2>
                <p className="text-xs sm:text-sm text-[#8A7F6B] font-light">
                  Additional styles that complement your taste
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-4">
                {relaxedRecommendations.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </motion.section>
          )}

          {/* Show No Results card only when both sections are empty */}
          {strictRecommendations.length === 0 &&
            relaxedRecommendations.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="py-8 text-center"
              >
                <NoResultsCard />
              </motion.div>
            )}
        </div>
      </main>
    </div>
  );
}
