import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Shield, ShieldCheck, ShieldWarning, MagnifyingGlass, XCircle, Globe, CaretDown } from "@phosphor-icons/react";
import { countrySafetyData, type CountrySafety } from "@/data/mockData";
import { REGIONS, SAFETY_LEVELS } from "@/constants";

const safetyBg = {
  safe: "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900",
  moderate: "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900",
  advisory: "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900",
};

export default function SafetyMap() {
  const [region, setRegion] = useState("All Regions");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<CountrySafety | null>(null);

  const filtered = countrySafetyData.filter((c) => {
    const matchRegion = region === "All Regions" || c.region === region;
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.region.toLowerCase().includes(search.toLowerCase());
    return matchRegion && matchSearch;
  });

  const getSafetyIcon = (level: string) => {
    switch (level) {
      case "safe": return <ShieldCheck size={14} className="text-emerald-600 dark:text-emerald-400" weight="fill" />;
      case "moderate": return <ShieldWarning size={14} className="text-amber-600 dark:text-amber-400" weight="fill" />;
      case "advisory": return <Shield size={14} className="text-red-600 dark:text-red-400" weight="fill" />;
      default: return null;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 75) return "text-emerald-600 dark:text-emerald-400";
    if (score >= 55) return "text-amber-600 dark:text-amber-400";
    return "text-red-600 dark:text-red-400";
  };

  return (
    <section id="safety" className="border-t border-border px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <ShieldCheck size={12} />
            Safety Intelligence
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Safety Map & Metrics</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Real-time safety assessments across African countries. Scores based on crime, health, transport, and political stability data.
          </p>
        </motion.div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <MagnifyingGlass size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search countries..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-9 w-48 rounded-md border border-border bg-transparent pl-8 pr-3 text-xs outline-none focus:border-ring transition-colors"
              />
            </div>
            <div className="relative">
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="h-9 appearance-none rounded-md border border-border bg-transparent px-3 pr-8 text-xs font-medium outline-none focus:border-ring transition-colors"
              >
                {REGIONS.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              <CaretDown size={12} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-emerald-500" /> Safe</span>
            <span className="flex items-center gap-1.5"><ShieldWarning size={12} className="text-amber-500" /> Moderate</span>
            <span className="flex items-center gap-1.5"><Shield size={12} className="text-red-500" /> Advisory</span>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((country, i) => (
            <motion.button
              key={country.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              onClick={() => setSelected(selected?.id === country.id ? null : country)}
              className={`group relative flex items-start gap-3 rounded-lg border p-4 text-left transition-all hover:shadow-sm ${
                safetyBg[country.safetyLevel]
              } ${selected?.id === country.id ? "ring-1 ring-ring" : ""}`}
            >
              <span className="mt-0.5 text-lg">{country.flag}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{country.name}</span>
                  {getSafetyIcon(country.safetyLevel)}
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                  <Globe size={10} />
                  {country.region}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-1.5 flex-1 rounded-full bg-border overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${getScoreColor(country.metrics.overall)}`}
                      style={{ width: `${country.metrics.overall}%`, backgroundColor: "currentColor", opacity: 0.7 }}
                    />
                  </div>
                  <span className={`metric-value text-xs font-medium ${getScoreColor(country.metrics.overall)}`}>
                    {country.metrics.overall}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 flex flex-col items-center gap-2 text-center text-sm text-muted-foreground">
            <XCircle size={24} />
            <p>No countries match your search.</p>
          </div>
        )}

        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-lg border border-border bg-accent/30 p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{selected.flag}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{selected.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      Last updated: {selected.lastUpdated} &middot; Risk Score: <span className={`metric-value font-medium ${getScoreColor(100 - selected.riskScore)}`}>{selected.riskScore}/100</span>
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="flex size-7 items-center justify-center rounded-md hover:bg-accent transition-colors"
              >
                <XCircle size={14} />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {[
                { label: "Overall", value: selected.metrics.overall },
                { label: "Petty Crime", value: selected.metrics.pettyCrime },
                { label: "Violent Crime", value: selected.metrics.violentCrime },
                { label: "Health", value: selected.metrics.health },
                { label: "Transport", value: selected.metrics.transport },
                { label: "Political", value: selected.metrics.political },
              ].map((metric) => (
                <div key={metric.label} className="rounded-md border border-border bg-background p-3 text-center">
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                  <div className={`mt-1 metric-value text-lg font-bold ${getScoreColor(metric.value)}`}>
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Safety Tips</h4>
              <ul className="space-y-1.5">
                {selected.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-0.5 text-foreground">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}