import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, MapPin, Compass, MapTrifold, Users, Suitcase, Phone, List, X, CaretDown } from "@phosphor-icons/react";
import { useIsMobile } from "@/hooks/use-mobile";

const NAV_ITEMS = [
  { id: "safety", label: "Safety Map", icon: MapTrifold },
  { id: "experiences", label: "Experiences", icon: Compass },
  { id: "itinerary", label: "Itinerary", icon: Suitcase },
  { id: "guides", label: "Guides", icon: Users },
  { id: "emergency", label: "Emergency", icon: Phone },
];

interface NavbarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ activeSection, setActiveSection, isDark, toggleTheme }: NavbarProps) {
  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button onClick={() => scrollToSection("hero")} className="flex items-center gap-2 text-sm font-medium tracking-tight">
          <MapPin weight="fill" className="size-4" />
          <span className="font-semibold tracking-tight">Safiri</span>
        </button>

        {isMobile ? (
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="flex size-8 items-center justify-center rounded-md hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex size-8 items-center justify-center rounded-md hover:bg-accent transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={16} /> : <List size={16} />}
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                    activeSection === item.id
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  <Icon size={14} />
                  {item.label}
                </button>
              );
            })}
            <div className="ml-3 h-5 w-px bg-border" />
            <button
              onClick={toggleTheme}
              className="ml-2 flex size-8 items-center justify-center rounded-md hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isMobile && mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}