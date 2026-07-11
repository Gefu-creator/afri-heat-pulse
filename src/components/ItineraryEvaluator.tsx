import { useState } from "react";
import { motion } from "framer-motion";
import { Suitcase, MapPin, Calendar, Check, ArrowRight, Star, Clock } from "@phosphor-icons/react";
import { sampleItinerary } from "@/data/mockData";

export default function ItineraryEvaluator() {
  const [activeDay, setActiveDay] = useState(1);

  const metrics = [
    { label: "Overall Score", value: sampleItinerary.overall, color: "text-emerald-600 dark:text-emerald-400" },
    { label: "Cultural Fit", value: sampleItinerary.culturalFit, color: "text-blue-600 dark:text-blue-400" },
    { label: "Cost Efficiency", value: sampleItinerary.costEfficiency, color: "text-amber-600 dark:text-amber-400" },
    { label: "Risk Score", value: 100 - sampleItinerary.riskScore, color: "text-rose-600 dark:text-rose-400" },
  ];

  return (
    <section id="itinerary" className="border-t border-border px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <Suitcase size={12} />
            Trip Analysis
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Itinerary Evaluator</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            AI-powered itinerary analysis with safety, cultural fit, and cost efficiency insights.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Itinerary details */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="rounded-lg border border-border bg-card"
          >
            <div className="border-b border-border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold">{sampleItinerary.title}</h3>
                  <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin size={10} /> {sampleItinerary.destination}</span>
                    <span className="flex items-center gap-1"><Calendar size={10} /> {sampleItinerary.duration} days</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> ${sampleItinerary.budget}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex border-b border-border overflow-x-auto">
              {sampleItinerary.days.map((day) => (
                <button
                  key={day.day}
                  onClick={() => setActiveDay(day.day)}
                  className={`flex shrink-0 items-center gap-1.5 border-r border-border px-4 py-3 text-xs font-medium transition-colors ${
                    activeDay === day.day
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/50"
                  }`}
                >
                  <Calendar size={10} />
                  Day {day.day}
                </button>
              ))}
            </div>

            <div className="p-4">
              {(() => {
                const day = sampleItinerary.days.find((d) => d.day === activeDay)!;
                return (
                  <motion.div
                    key={day.day}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <MapPin size={12} />
                      {day.location}
                    </div>
                    <div className="mt-3 space-y-2">
                      {day.activities.map((activity, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <ArrowRight size={10} className="mt-0.5 shrink-0" />
                          {activity}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                      {day.accommodation && (
                        <span className="rounded-md bg-accent px-2 py-1">🏨 {day.accommodation}</span>
                      )}
                      {day.meals.map((meal, i) => (
                        <span key={i} className="rounded-md bg-accent px-2 py-1">🍽️ {meal}</span>
                      ))}
                    </div>
                  </motion.div>
                );
              })()}
            </div>
          </motion.div>

          {/* Metrics & Recommendations */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="rounded-lg border border-border bg-card p-4"
            >
              <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Evaluation Metrics</h4>
              <div className="space-y-3">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{m.label}</span>
                      <span className={`metric-value font-medium ${m.color}`}>{m.value}%</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-border overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${m.value}%`, backgroundColor: "currentColor", opacity: 0.5 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="rounded-lg border border-border bg-card p-4"
            >
              <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <Check size={12} className="inline mr-1" />
                Recommendations
              </h4>
              <ul className="space-y-2">
                {sampleItinerary.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-accent">
                      <Star size={8} weight="fill" />
                    </span>
                    {rec}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}