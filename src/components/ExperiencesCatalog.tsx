import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Star, Clock, MapPin, Heart, CaretDown } from "@phosphor-icons/react";
import { experiencesData, type Experience } from "@/data/mockData";
import { EXPERIENCE_CATEGORIES } from "@/constants";

export default function ExperiencesCatalog() {
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState<string[]>([]);

  const filtered = experiencesData.filter((e) => category === "All" || e.category === category);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);
  };

  return (
    <section id="experiences" className="border-t border-border px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <Compass size={12} />
            Curated Experiences
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Cultural Experiences</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Hand-picked experiences that connect you with Africa's rich cultural heritage, wildlife, and traditions.
          </p>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-2">
          {EXPERIENCE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
                category === cat
                  ? "border-foreground bg-foreground text-background"
                  : "border-border hover:border-foreground/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className="group rounded-lg border border-border bg-card hover:shadow-sm transition-all"
            >
              <div className="relative h-40 overflow-hidden rounded-t-lg bg-accent">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl opacity-30">{exp.country === "Kenya" ? "🦁" : exp.country === "Tanzania" ? "🏝️" : exp.country === "South Africa" ? "🍷" : exp.country === "Ghana" ? "🏛️" : exp.country === "Morocco" ? "🏜️" : exp.country === "Rwanda" ? "🦍" : exp.country === "Namibia" ? "🏜️" : exp.country === "Ethiopia" ? "⛪" : "🌍"}</span>
                </div>
                <div className="absolute top-3 left-3 rounded-full bg-background/80 px-2.5 py-0.5 text-[10px] font-medium backdrop-blur-sm">
                  {exp.category}
                </div>
                <button
                  onClick={() => toggleFavorite(exp.id)}
                  className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                >
                  <Heart
                    size={12}
                    weight={favorites.includes(exp.id) ? "fill" : "regular"}
                    className={favorites.includes(exp.id) ? "text-red-500" : "text-muted-foreground"}
                  />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin size={10} />
                  {exp.country}
                  <span className="mx-1">·</span>
                  <Clock size={10} />
                  {exp.duration}
                </div>
                <h3 className="mt-1.5 text-sm font-semibold">{exp.title}</h3>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Star size={12} weight="fill" className="text-amber-500" />
                    <span className="text-xs font-medium">{exp.rating}</span>
                    <span className="text-xs text-muted-foreground">({exp.reviews})</span>
                  </div>
                  <span className="text-sm font-semibold">${exp.price}</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {exp.highlights.slice(0, 3).map((h, j) => (
                    <span key={j} className="rounded-md bg-accent px-2 py-0.5 text-[10px] text-muted-foreground">
                      {h}
                    </span>
                  ))}
                </div>
                <div className="mt-3 rounded-md border border-border bg-accent/30 p-2.5">
                  <p className="text-[10px] leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">Cultural note:</span> {exp.culturalSignificance}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}