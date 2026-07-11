import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Shield, MapPin, Globe, CaretDown, Check, XCircle } from "@phosphor-icons/react";
import { emergencyContacts } from "@/data/mockData";

export default function EmergencySOS() {
  const [selectedCountry, setSelectedCountry] = useState(emergencyContacts[0]);
  const [showContacts, setShowContacts] = useState(false);

  return (
    <section id="emergency" className="border-t border-border px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <Shield size={12} />
            Emergency Support
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Emergency SOS & Etiquette Desk</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Country-specific emergency numbers, embassy contacts, and cultural etiquette guides for respectful travel.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* Emergency Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-lg border border-border bg-card">
              <div className="border-b border-border p-4">
                <h3 className="text-sm font-semibold flex items-center gap-2">
                  <Phone size={14} />
                  Emergency Numbers
                </h3>
              </div>

              <div className="relative p-4">
                <select
                  value={selectedCountry.country}
                  onChange={(e) => setSelectedCountry(emergencyContacts.find((c) => c.country === e.target.value) || emergencyContacts[0])}
                  className="h-9 w-full appearance-none rounded-md border border-border bg-transparent px-3 pr-8 text-xs font-medium outline-none focus:border-ring transition-colors"
                >
                  {emergencyContacts.map((c) => (
                    <option key={c.country} value={c.country}>{c.country}</option>
                  ))}
                </select>
                <CaretDown size={12} className="pointer-events-none absolute right-7 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>

              <div className="px-4 pb-4 space-y-2">
                {[
                  { label: "Police", number: selectedCountry.police },
                  { label: "Ambulance", number: selectedCountry.ambulance },
                  { label: "Tourism Police", number: selectedCountry.tourismPolice },
                  { label: "Embassy", number: selectedCountry.embassy },
                ].map((contact) => (
                  <div
                    key={contact.label}
                    className="group flex items-center justify-between rounded-md border border-border p-3 hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-muted-foreground">{contact.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="metric-value text-xs font-medium">{contact.number}</span>
                      <a
                        href={`tel:${contact.number.replace(/\s/g, "")}`}
                        className="flex size-7 items-center justify-center rounded-md border border-border hover:bg-accent transition-colors"
                      >
                        <Phone size={11} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Etiquette Desk */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="rounded-lg border border-border bg-card"
          >
            <div className="border-b border-border p-4">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                <Globe size={14} />
                Cultural Etiquette Guide
              </h3>
            </div>
            <div className="p-4 space-y-4">
              <div className="rounded-md bg-accent/30 p-3">
                <h4 className="mb-1 text-xs font-medium">General Rules of Thumb</h4>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check size={10} className="mt-0.5 shrink-0" />
                    Greet with the right hand only — the left is considered unclean
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={10} className="mt-0.5 shrink-0" />
                    Ask permission before photographing people
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={10} className="mt-0.5 shrink-0" />
                    Dress modestly, especially in rural and religious areas
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={10} className="mt-0.5 shrink-0" />
                    Learn a few words in the local language
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={10} className="mt-0.5 shrink-0" />
                    Remove shoes when entering someone's home
                  </li>
                </ul>
              </div>

              <div className="rounded-md bg-accent/30 p-3">
                <h4 className="mb-1 text-xs font-medium">Regional Specifics</h4>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div>
                    <span className="font-medium text-foreground">East Africa:</span> Swahili is widely spoken. "Hakuna Matata" is genuine culture, not just a phrase.
                  </div>
                  <div>
                    <span className="font-medium text-foreground">West Africa:</span> Hospitality is paramount. Expect to be offered food and drink — accept graciously.
                  </div>
                  <div>
                    <span className="font-medium text-foreground">North Africa:</span> Ramadan affects daily rhythms. Avoid eating/drinking in public during daylight hours.
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Southern Africa:</span> Tipping is customary (10-15% at restaurants). "Howzit" is a common greeting.
                  </div>
                </div>
              </div>

              <div className="rounded-md border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950/20">
                <h4 className="mb-1 flex items-center gap-1.5 text-xs font-medium text-amber-800 dark:text-amber-300">
                  <Shield size={12} />
                  Emergency Protocol
                </h4>
                <p className="text-xs text-amber-700 dark:text-amber-400">
                  Save your embassy's number before traveling. Register with your embassy's travel app.
                  Share your itinerary with someone at home. Download offline maps of your destination.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}