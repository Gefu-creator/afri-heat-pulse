import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Star, MagnifyingGlass, Medal, Globe, Envelope, Phone, Check, SealCheck } from "@phosphor-icons/react";
import { guidesData, type Guide } from "@/data/mockData";

export default function GuidesDirectory() {
  const [search, setSearch] = useState("");
  const [certifiedOnly, setCertifiedOnly] = useState(false);

  const filtered = guidesData.filter((g) => {
    const matchSearch = g.name.toLowerCase().includes(search.toLowerCase()) ||
      g.specialty.toLowerCase().includes(search.toLowerCase()) ||
      g.country.toLowerCase().includes(search.toLowerCase());
    const matchCert = !certifiedOnly || g.certified;
    return matchSearch && matchCert;
  });

  return (
    <section id="guides" className="border-t border-border px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <Users size={12} />
            Trusted Locals
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Guides Directory</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Vetted local guides with deep cultural knowledge. Each guide is reviewed by travelers and verified by Safiri.
          </p>
        </motion.div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative">
            <MagnifyingGlass size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search guides, specialties, countries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9 w-64 rounded-md border border-border bg-transparent pl-8 pr-3 text-xs outline-none focus:border-ring transition-colors"
            />
          </div>
          <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
            <input
              type="checkbox"
              checked={certifiedOnly}
              onChange={(e) => setCertifiedOnly(e.target.checked)}
              className="size-3.5 rounded border-border accent-foreground"
            />
            <SealCheck size={12} />
            Certified guides only
          </label>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((guide, i) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className="rounded-lg border border-border bg-card p-4 hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold">
                  {guide.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold truncate">{guide.name}</h3>
                    {guide.certified && (
                      <span className="flex shrink-0 items-center gap-0.5 rounded-full bg-emerald-100 px-1.5 py-0.5 text-[9px] font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                        <SealCheck size={8} weight="fill" />
                        Certified
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{guide.specialty}</p>
                  <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <Globe size={10} />
                    {guide.country}
                    <span className="mx-1">·</span>
                    <Star size={10} weight="fill" className="text-amber-500" />
                    {guide.rating} ({guide.reviews})
                  </div>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-1">
                {guide.languages.map((lang) => (
                  <span key={lang} className="rounded-md bg-accent px-2 py-0.5 text-[10px] text-muted-foreground">
                    {lang}
                  </span>
                ))}
              </div>

              <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                {guide.about}
              </p>

              <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span className="text-sm font-semibold text-foreground">${guide.pricePerDay}</span>
                  /day
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${guide.phone}`}
                    className="flex size-7 items-center justify-center rounded-md border border-border hover:bg-accent transition-colors"
                    title="Call"
                  >
                    <Phone size={12} />
                  </a>
                  <a
                    href={`mailto:${guide.email}`}
                    className="flex size-7 items-center justify-center rounded-md border border-border hover:bg-accent transition-colors"
                    title="Email"
                  >
                    <Envelope size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}