export const SITE = {
  name: "Safiri",
  tagline: "Safe, Culturally Immersive Tourism Across Africa",
  description: "Your trusted companion for exploring Africa with confidence — real-time safety insights, cultural guidance, and curated experiences.",
  email: "hello@safiri.africa",
  emergency: "+254 700 123 456",
  whatsapp: "+254700123456",
  social: {
    instagram: "https://instagram.com/safiri",
    twitter: "https://twitter.com/safiri",
  },
};

export const REGIONS = [
  "All Regions",
  "East Africa",
  "West Africa",
  "Southern Africa",
  "North Africa",
  "Central Africa",
] as const;

export const SAFETY_LEVELS = {
  safe: { label: "Safe", color: "text-emerald-600 dark:text-emerald-400" },
  moderate: { label: "Moderate Caution", color: "text-amber-600 dark:text-amber-400" },
  advisory: { label: "Advisory", color: "text-red-600 dark:text-red-400" },
} as const;

export const EXPERIENCE_CATEGORIES = [
  "All",
  "Cultural",
  "Adventure",
  "Wildlife",
  "Culinary",
  "Historical",
] as const;