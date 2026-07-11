import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SafetyMap from "@/components/SafetyMap";
import ExperiencesCatalog from "@/components/ExperiencesCatalog";
import ItineraryEvaluator from "@/components/ItineraryEvaluator";
import GuidesDirectory from "@/components/GuidesDirectory";
import EmergencySOS from "@/components/EmergencySOS";
import { MapPin } from "@phosphor-icons/react";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored ? stored === "dark" : prefersDark;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    const sections = ["safety", "experiences", "itinerary", "guides", "emergency"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="bottom-right" />
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      <main>
        <HeroSection />
        <SafetyMap />
        <ExperiencesCatalog />
        <ItineraryEvaluator />
        <GuidesDirectory />
        <EmergencySOS />
      </main>

      <footer className="border-t border-border px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin size={12} weight="fill" />
            <span className="font-medium text-foreground">Safiri</span>
            &copy; {new Date().getFullYear()} &middot; All rights reserved
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="mailto:hello@safiri.africa" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;