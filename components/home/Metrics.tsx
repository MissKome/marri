"use client";

import { motion } from "framer-motion";
import { Heart, GitBranch, ShieldCheck, Rocket } from "lucide-react";

const metrics = [
  {
    icon: Heart,
    title: "Together Since",
    value: "2022",
    subtitle: "The beginning of our story",
  },
  {
    icon: GitBranch,
    title: "Relationship Milestones",
    value: "3+",
    subtitle: "Beautiful versions released",
  },
  {
    icon: ShieldCheck,
    title: "Critical Bugs",
    value: "0",
    subtitle: "Approved for deployment",
  },
  {
    icon: Rocket,
    title: "Current Version",
    value: "Final Version",
    subtitle: "Marriage: Version Forever",
  },
];

export default function Metrics() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F4B6A8]">
            Release Overview
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#071A35] md:text-5xl">
            Every Great Product
            <br />
            Starts With Meaningful Metrics
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-[28px] border border-[#F4B6A8]/20 bg-[#FAF8F6] p-8 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071A35] text-white">
                  <Icon size={26} />
                </div>

                <h3 className="mt-8 text-lg font-semibold text-gray-600">
                  {metric.title}
                </h3>

                <p className="mt-2 text-5xl font-bold text-[#071A35]">
                  {metric.value}
                </p>

                <p className="mt-4 text-gray-500">
                  {metric.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}