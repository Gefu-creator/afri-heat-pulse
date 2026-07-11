export interface CountrySafety {
  id: string;
  name: string;
  flag: string;
  region: string;
  safetyLevel: "safe" | "moderate" | "advisory";
  riskScore: number; // 0-100 (lower = safer)
  lastUpdated: string;
  metrics: {
    overall: number;
    pettyCrime: number;
    violentCrime: number;
    health: number;
    transport: number;
    political: number;
  };
  tips: string[];
}

export interface Experience {
  id: string;
  title: string;
  category: string;
  country: string;
  region: string;
  image: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  highlights: string[];
  culturalSignificance: string;
}

export interface Guide {
  id: string;
  name: string;
  avatar: string;
  country: string;
  region: string;
  specialty: string;
  languages: string[];
  rating: number;
  reviews: number;
  pricePerDay: number;
  certified: boolean;
  about: string;
  phone: string;
  email: string;
}

export interface ItineraryDay {
  day: number;
  location: string;
  activities: string[];
  accommodation: string;
  meals: string[];
}

export interface ItineraryEvaluation {
  id: string;
  title: string;
  destination: string;
  duration: number;
  budget: number;
  days: ItineraryDay[];
  riskScore: number;
  culturalFit: number;
  costEfficiency: number;
  overall: number;
  recommendations: string[];
}

export const countrySafetyData: CountrySafety[] = [
  {
    id: "ke",
    name: "Kenya",
    flag: "🇰🇪",
    region: "East Africa",
    safetyLevel: "moderate",
    riskScore: 32,
    lastUpdated: "2025-06-12",
    metrics: { overall: 68, pettyCrime: 55, violentCrime: 40, health: 70, transport: 65, political: 50 },
    tips: ["Avoid isolated areas in Nairobi after dark", "Use registered taxis (Uber/Bolt)", "Keep valuables in hotel safe", "Stay aware in crowded markets"],
  },
  {
    id: "rw",
    name: "Rwanda",
    flag: "🇷🇼",
    region: "East Africa",
    safetyLevel: "safe",
    riskScore: 18,
    lastUpdated: "2025-06-10",
    metrics: { overall: 82, pettyCrime: 75, violentCrime: 85, health: 78, transport: 80, political: 70 },
    tips: ["Kigali is one of the safest cities in Africa", "Respect plastic bag ban", "Carry ID at all times", "Use moto-taxis for short trips"],
  },
  {
    id: "za",
    name: "South Africa",
    flag: "🇿🇦",
    region: "Southern Africa",
    safetyLevel: "moderate",
    riskScore: 42,
    lastUpdated: "2025-06-08",
    metrics: { overall: 58, pettyCrime: 40, violentCrime: 35, health: 72, transport: 60, political: 55 },
    tips: ["Avoid townships without a guide", "Keep car doors locked while driving", "Use Uber in cities", "Don't walk alone at night in Joburg CBD"],
  },
  {
    id: "gh",
    name: "Ghana",
    flag: "🇬🇭",
    region: "West Africa",
    safetyLevel: "safe",
    riskScore: 24,
    lastUpdated: "2025-06-11",
    metrics: { overall: 76, pettyCrime: 65, violentCrime: 80, health: 72, transport: 70, political: 68 },
    tips: ["Accra is very welcoming to tourists", "Use tro-tros for authentic local travel", "Learn a few Twi phrases", "Visit Cape Coast Castle"],
  },
  {
    id: "ma",
    name: "Morocco",
    flag: "🇲🇦",
    region: "North Africa",
    safetyLevel: "moderate",
    riskScore: 30,
    lastUpdated: "2025-06-09",
    metrics: { overall: 70, pettyCrime: 50, violentCrime: 75, health: 68, transport: 72, political: 60 },
    tips: ["Bargain in souks but stay firm", "Beware of unofficial guides in medinas", "Dress modestly outside tourist areas", "Try street food from busy stalls"],
  },
  {
    id: "tz",
    name: "Tanzania",
    flag: "🇹🇿",
    region: "East Africa",
    safetyLevel: "safe",
    riskScore: 26,
    lastUpdated: "2025-06-10",
    metrics: { overall: 74, pettyCrime: 60, violentCrime: 78, health: 72, transport: 68, political: 65 },
    tips: ["Zanzibar is a must-visit", "Book safaris with reputable operators", "Respect local dress codes on Zanzibar", "Carry small bills for tips"],
  },
  {
    id: "ng",
    name: "Nigeria",
    flag: "🇳🇬",
    region: "West Africa",
    safetyLevel: "advisory",
    riskScore: 52,
    lastUpdated: "2025-06-07",
    metrics: { overall: 48, pettyCrime: 40, violentCrime: 30, health: 50, transport: 45, political: 35 },
    tips: ["Avoid non-essential travel to the North-East", "Use hotel-recommended drivers", "Keep a low profile in Lagos", "Stay in well-known areas"],
  },
  {
    id: "et",
    name: "Ethiopia",
    flag: "🇪🇹",
    region: "East Africa",
    safetyLevel: "moderate",
    riskScore: 34,
    lastUpdated: "2025-06-06",
    metrics: { overall: 66, pettyCrime: 58, violentCrime: 65, health: 60, transport: 62, political: 45 },
    tips: ["Visit Lalibela and the rock-hewn churches", "Use Ethio Telecom for local SIM", "Avoid border regions", "Try Ethiopian coffee ceremony"],
  },
  {
    id: "na",
    name: "Namibia",
    flag: "🇳🇦",
    region: "Southern Africa",
    safetyLevel: "safe",
    riskScore: 15,
    lastUpdated: "2025-06-12",
    metrics: { overall: 85, pettyCrime: 78, violentCrime: 88, health: 80, transport: 82, political: 78 },
    tips: ["Self-drive safaris are safe and popular", "Book accommodation in advance for peak season", "Carry enough water for desert drives", "Visit Sossusvlei dunes"],
  },
  {
    id: "sn",
    name: "Senegal",
    flag: "🇸🇳",
    region: "West Africa",
    safetyLevel: "safe",
    riskScore: 22,
    lastUpdated: "2025-06-11",
    metrics: { overall: 78, pettyCrime: 68, violentCrime: 82, health: 74, transport: 72, political: 66 },
    tips: ["Dakar is vibrant and welcoming", "Visit Goree Island", "Learn basic Wolof greetings", "Try thieboudienne (national dish)"],
  },
];

export const experiencesData: Experience[] = [
  {
    id: "exp-1",
    title: "Maasai Mara Safari",
    category: "Wildlife",
    country: "Kenya",
    region: "East Africa",
    image: "",
    duration: "5 days",
    price: 2450,
    rating: 4.9,
    reviews: 342,
    description: "Witness the Great Migration and the Big Five with expert Maasai guides who share ancestral knowledge of the land.",
    highlights: ["Great Migration river crossings", "Big Five game drives", "Maasai village visit", "Hot air balloon safari"],
    culturalSignificance: "The Maasai people have coexisted with wildlife for centuries. Your visit supports community conservancies.",
  },
  {
    id: "exp-2",
    title: "Zanzibar Stone Town & Spice Tour",
    category: "Cultural",
    country: "Tanzania",
    region: "East Africa",
    image: "",
    duration: "3 days",
    price: 890,
    rating: 4.7,
    reviews: 218,
    description: "Explore the labyrinthine streets of Stone Town and discover the spice plantations that shaped Zanzibar's history.",
    highlights: ["Stone Town walking tour", "Spice farm visit", "Prison Island snorkeling", "Sunset dhow cruise"],
    culturalSignificance: "Stone Town is a UNESCO World Heritage site blending Swahili, Arab, Indian, and European influences.",
  },
  {
    id: "exp-3",
    title: "Cape Town & Winelands Journey",
    category: "Culinary",
    country: "South Africa",
    region: "Southern Africa",
    image: "",
    duration: "6 days",
    price: 2100,
    rating: 4.8,
    reviews: 295,
    description: "From Table Mountain to Stellenbosch vineyards, experience the best of South African food, wine, and nature.",
    highlights: ["Table Mountain cable car", "Stellenbosch wine tasting", "Cape of Good Hope", "Bo-Kaap cooking class"],
    culturalSignificance: "The Cape Winelands reflect 300+ years of winemaking tradition blending Dutch, French, and African heritage.",
  },
  {
    id: "exp-4",
    title: "Ghana's Slave Route & Heritage",
    category: "Historical",
    country: "Ghana",
    region: "West Africa",
    image: "",
    duration: "4 days",
    price: 1200,
    rating: 4.9,
    reviews: 176,
    description: "A profound journey through Ghana's slave castles, Kakum National Park, and the vibrant culture of the Ashanti kingdom.",
    highlights: ["Cape Coast Castle tour", "Kakum canopy walkway", "Kumasi market visit", "Kente cloth weaving workshop"],
    culturalSignificance: "This route traces the history of the trans-Atlantic slave trade — a pilgrimage for the African diaspora.",
  },
  {
    id: "exp-5",
    title: "Moroccan Sahara & Medinas",
    category: "Adventure",
    country: "Morocco",
    region: "North Africa",
    image: "",
    duration: "7 days",
    price: 1650,
    rating: 4.6,
    reviews: 412,
    description: "Traverse the Atlas Mountains, camel trek in the Sahara, and get lost in the ancient medinas of Fes and Marrakech.",
    highlights: ["Sahara camel trek & camp", "Fes medina tour", "Atlas Mountain hiking", "Moroccan cooking class"],
    culturalSignificance: "Morocco's medinas are living UNESCO sites where Berber, Arab, and Andalusian traditions converge.",
  },
  {
    id: "exp-6",
    title: "Rwanda Gorilla Trekking",
    category: "Wildlife",
    country: "Rwanda",
    region: "East Africa",
    image: "",
    duration: "4 days",
    price: 4500,
    rating: 5.0,
    reviews: 89,
    description: "An intimate encounter with mountain gorillas in Volcanoes National Park, led by expert trackers and conservationists.",
    highlights: ["Gorilla trekking permit", "Dian Fossey hike", "Lake Kivu relaxation", "Kigali Genocide Memorial"],
    culturalSignificance: "Rwanda's conservation model is a global success story — trekking fees fund community development and gorilla protection.",
  },
  {
    id: "exp-7",
    title: "Sossusvlei & Namib Desert",
    category: "Adventure",
    country: "Namibia",
    region: "Southern Africa",
    image: "",
    duration: "5 days",
    price: 1900,
    rating: 4.8,
    reviews: 134,
    description: "Explore the world's oldest desert — climb the iconic red dunes of Sossusvlei and discover the Skeleton Coast.",
    highlights: ["Dune 45 sunrise climb", "Deadvlei photography", "Skeleton Coast drive", "Stargazing in the desert"],
    culturalSignificance: "The Namib Desert is home to the Himba people, one of Africa's last semi-nomadic communities.",
  },
  {
    id: "exp-8",
    title: "Ethiopian Historic Circuit",
    category: "Historical",
    country: "Ethiopia",
    region: "East Africa",
    image: "",
    duration: "8 days",
    price: 1800,
    rating: 4.7,
    reviews: 167,
    description: "Follow the Historic North Circuit — Lalibela's rock-hewn churches, Gondar's castles, and the monasteries of Lake Tana.",
    highlights: ["Lalibela rock churches", "Gondar's Fasil Ghebbi", "Blue Nile Falls", "Axum obelisks"],
    culturalSignificance: "Ethiopia is the only African nation never colonized, with a unique Christian heritage dating to the 4th century.",
  },
];

export const guidesData: Guide[] = [
  {
    id: "guide-1",
    name: "Amina Okafor",
    avatar: "",
    country: "Ghana",
    region: "West Africa",
    specialty: "Cultural Heritage & History",
    languages: ["English", "Twi", "Ga"],
    rating: 4.9,
    reviews: 127,
    pricePerDay: 85,
    certified: true,
    about: "Amina is a trained historian from the University of Ghana with 8 years of experience leading heritage tours along the slave route.",
    phone: "+233 50 123 4567",
    email: "amina@safiri.africa",
  },
  {
    id: "guide-2",
    name: "James Mwangi",
    avatar: "",
    country: "Kenya",
    region: "East Africa",
    specialty: "Wildlife & Safari",
    languages: ["English", "Swahili", "Kikuyu"],
    rating: 4.8,
    reviews: 203,
    pricePerDay: 120,
    certified: true,
    about: "James grew up in the shadow of Mount Kenya and has been a KPSGA-certified safari guide for 12 years. He knows every animal track in the Mara.",
    phone: "+254 712 345 678",
    email: "james@safiri.africa",
  },
  {
    id: "guide-3",
    name: "Zahara Benali",
    avatar: "",
    country: "Morocco",
    region: "North Africa",
    specialty: "Medina & Culinary Tours",
    languages: ["Arabic", "French", "English", "Spanish"],
    rating: 4.7,
    reviews: 156,
    pricePerDay: 70,
    certified: true,
    about: "Zahara grew up in the Fes medina and trained as a chef. She leads intimate food tours and cooking classes in her family's riad.",
    phone: "+212 6 12 345 678",
    email: "zahara@safiri.africa",
  },
  {
    id: "guide-4",
    name: "Thabo Ndlovu",
    avatar: "",
    country: "South Africa",
    region: "Southern Africa",
    specialty: "Adventure & Wine",
    languages: ["English", "Afrikaans", "Zulu"],
    rating: 4.9,
    reviews: 94,
    pricePerDay: 110,
    certified: true,
    about: "Thabo is a former park ranger turned adventure guide. He leads hiking, kayaking, and wine tours across the Western Cape.",
    phone: "+27 82 345 6789",
    email: "thabo@safiri.africa",
  },
  {
    id: "guide-5",
    name: "Aisha Uwimana",
    avatar: "",
    country: "Rwanda",
    region: "East Africa",
    specialty: "Gorilla Trekking & Conservation",
    languages: ["Kinyarwanda", "French", "English"],
    rating: 5.0,
    reviews: 68,
    pricePerDay: 150,
    certified: true,
    about: "Aisha worked with the Dian Fossey Gorilla Fund before becoming an independent guide. Her knowledge of gorilla families is unmatched.",
    phone: "+250 788 123 456",
    email: "aisha@safiri.africa",
  },
  {
    id: "guide-6",
    name: "Kofi Mensah",
    avatar: "",
    country: "Ghana",
    region: "West Africa",
    specialty: "Historical & Diaspora Tours",
    languages: ["English", "Twi", "Ewe"],
    rating: 4.6,
    reviews: 82,
    pricePerDay: 75,
    certified: false,
    about: "Kofi is a storyteller and cultural ambassador who specializes in genealogy tours for diaspora visitors tracing their roots.",
    phone: "+233 54 987 6543",
    email: "kofi@safiri.africa",
  },
];

export const sampleItinerary: ItineraryEvaluation = {
  id: "itinerary-1",
  title: "East Africa Explorer",
  destination: "Kenya & Tanzania",
  duration: 10,
  budget: 4800,
  days: [
    { day: 1, location: "Nairobi, Kenya", activities: ["Arrival & airport pickup", "Nairobi National Park half-day safari", "Dinner at Carnivore restaurant"], accommodation: "Tribe Hotel, Nairobi", meals: ["Breakfast", "Dinner"] },
    { day: 2, location: "Nairobi → Maasai Mara", activities: ["Morning flight to Mara", "Afternoon game drive", "Sundowner on the plains"], accommodation: "Mara Serena Safari Lodge", meals: ["Breakfast", "Lunch", "Dinner"] },
    { day: 3, location: "Maasai Mara", activities: ["Full-day game drive", "Mara River crossing viewing", "Bush breakfast"], accommodation: "Mara Serena Safari Lodge", meals: ["Breakfast", "Lunch", "Dinner"] },
    { day: 4, location: "Maasai Mara", activities: ["Maasai village visit", "Nature walk with ranger", "Photography workshop"], accommodation: "Mara Serena Safari Lodge", meals: ["Breakfast", "Lunch", "Dinner"] },
    { day: 5, location: "Maasai Mara → Arusha", activities: ["Flight to Arusha", "Lunch and city tour", "Cultural heritage museum"], accommodation: "Arusha Coffee Lodge", meals: ["Breakfast", "Lunch"] },
    { day: 6, location: "Arusha → Serengeti", activities: ["Drive to Serengeti via Ngorongoro", "Stop at Olduvai Gorge", "Afternoon game drive"], accommodation: "Serengeti Migration Camp", meals: ["Breakfast", "Lunch", "Dinner"] },
    { day: 7, location: "Serengeti", activities: ["Dawn game drive for predators", "Hot air balloon safari (optional)", "Sundowner game drive"], accommodation: "Serengeti Migration Camp", meals: ["Breakfast", "Lunch", "Dinner"] },
    { day: 8, location: "Serengeti → Ngorongoro", activities: ["Ngorongoro Crater full-day tour", "Lion & rhino spotting", "Crater rim sundowner"], accommodation: "Ngorongoro Serena Lodge", meals: ["Breakfast", "Lunch", "Dinner"] },
    { day: 9, location: "Ngorongoro → Zanzibar", activities: ["Flight to Zanzibar", "Stone Town walking tour", "Sunset dhow cruise"], accommodation: "Zuri Zanzibar", meals: ["Breakfast", "Dinner"] },
    { day: 10, location: "Zanzibar", activities: ["Spice farm tour", "Prison Island snorkeling", "Departure"], accommodation: "", meals: ["Breakfast", "Lunch"] },
  ],
  riskScore: 28,
  culturalFit: 88,
  costEfficiency: 75,
  overall: 82,
  recommendations: [
    "Add 2 days in Zanzibar for beach relaxation",
    "Book hot air balloon in Serengeti in advance",
    "Pack light layers for morning game drives",
    "Bring insect repellent with DEET",
    "Consider travel insurance with medical evacuation",
  ],
};

export const emergencyContacts = [
  { country: "Kenya", police: "999", ambulance: "999", tourismPolice: "+254 20 272 4151", embassy: "+254 20 363 6000" },
  { country: "Tanzania", police: "112", ambulance: "112", tourismPolice: "+255 22 211 6450", embassy: "+254 20 363 6000" },
  { country: "South Africa", police: "10111", ambulance: "10177", tourismPolice: "+27 12 393 8600", embassy: "+27 12 431 4000" },
  { country: "Ghana", police: "191", ambulance: "193", tourismPolice: "+233 30 266 6500", embassy: "+233 30 274 1000" },
  { country: "Morocco", police: "19", ambulance: "15", tourismPolice: "+212 5 37 21 79 79", embassy: "+212 5 37 63 72 00" },
  { country: "Rwanda", police: "112", ambulance: "112", tourismPolice: "+250 788 311 111", embassy: "+250 252 596 400" },
  { country: "Namibia", police: "10111", ambulance: "112", tourismPolice: "+264 61 209 3111", embassy: "+264 61 212 996" },
  { country: "Nigeria", police: "112", ambulance: "112", tourismPolice: "+234 9 523 9031", embassy: "+234 9 461 4000" },
  { country: "Ethiopia", police: "911", ambulance: "907", tourismPolice: "+251 11 126 3000", embassy: "+251 11 130 6000" },
  { country: "Senegal", police: "17", ambulance: "18", tourismPolice: "+221 33 889 47 00", embassy: "+221 33 823 67 18" },
];