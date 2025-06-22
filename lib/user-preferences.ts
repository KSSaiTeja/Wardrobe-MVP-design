import type { UserPreferences } from "./types";

// This is a mock implementation for the MVP
// In a real application, this would connect to a database

let userPreferences: UserPreferences | null = null;

export async function saveUserPreferences(preferences: UserPreferences) {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // In a real app, this would be an API call to save to a database
  userPreferences = preferences;

  // Save to localStorage for persistence in the demo
  if (typeof window !== "undefined") {
    localStorage.setItem("userPreferences", JSON.stringify(preferences));
  }

  return { success: true };
}

export async function getUserPreferences() {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Try to get from memory first
  if (userPreferences) {
    return userPreferences;
  }

  // Try to get from localStorage
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("userPreferences");
    if (stored) {
      userPreferences = JSON.parse(stored);
      return userPreferences;
    }
  }

  // Return default preferences if none found
  return {
    gender: "female",
    stylePreference: "casual",
    budget: [3000],
    age: "25-34",
    occasion: "everyday",
  };
}
