"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Wrench,
  Bug,
  CheckCircle2,
} from "lucide-react";

const sections = [
  {
    title: "New Features",
    icon: Sparkles,
    color: "text-[#F4B6A8]",
    items: [
      "Lifetime Partnership Enabled",
      "Forever Begins",
      "Shared Dreams Activated",
    ],
  },
  {
    title: "Improvements",
    icon: Wrench,
    color: "text-blue-500",
    items: [
      "Communication Optimized",
      "Teamwork Enhanced",
      "Daily Laughter Increased",
    ],
  },
  {
    title: "Bug Fixes",
    icon: Bug,
    color: "text-green-500",
    items: [
      "Long Distance Issue Resolved",
      "Waiting Period Removed",
      "Missing 'I Love You' Messages Fixed",
    ],
  },
];

export default function ReleaseNotes() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F4B6A8]">
            Release Notes
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#071A35]">
            Marriage Version 1.0.0
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Every major release comes with exciting improvements.
            Here's everything included in Version Forever.
          </p>
        </div>

        <div className="mt-20 space-y-8">

          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                className="rounded-[32px] border border-gray-100 bg-[#FAF8F6] p-8 shadow-sm"
              >
                <div className="flex items-center gap-4">

                  <div className="rounded-2xl bg-white p-4 shadow">
                    <Icon
                      size={28}
                      className={section.color}
                    />
                  </div>

                  <h3 className="text-3xl font-bold text-[#071A35]">
                    {section.title}
                  </h3>

                </div>

                <div className="mt-8 space-y-5">

                  {section.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-2xl bg-white p-5"
                    >
                      <CheckCircle2
                        className="text-green-500"
                        size={22}
                      />

                      <span className="text-lg text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-green-200 bg-green-50 p-8"
          >
            <h3 className="text-3xl font-bold text-green-700">
              Known Issues
            </h3>

            <p className="mt-6 text-xl text-green-700">
              🎉 No known issues detected.
            </p>

            <p className="mt-2 text-gray-600">
              Build approved for production deployment.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}