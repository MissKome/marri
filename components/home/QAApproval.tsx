"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Rocket,
  Bug,
  TestTube2,
  Server,
} from "lucide-react";

type Props = {
  onDeploy?: () => void;
};

const stats = [
  {
    label: "Environment",
    value: "Production",
    icon: Server,
  },
  {
    label: "Build",
    value: "Final Version",
    icon: Rocket,
  },
  {
    label: "Test Cases",
    value: "24",
    icon: TestTube2,
  },
  {
    label: "Passed",
    value: "24",
    icon: CheckCircle2,
  },
  {
    label: "Failed",
    value: "0",
    icon: Bug,
  },
  {
    label: "Critical Bugs",
    value: "0",
    icon: ShieldCheck,
  },
];

export default function QAApproval({ onDeploy }: Props) {
  return (
    <section className="bg-[#071A35] py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.3em] text-[#F4B6A8] text-sm font-semibold">
            Quality Assurance Report
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Final QA Report
          </h2>

          <p className="mt-6 text-lg text-gray-300">
            Every milestone has been tested.
            Every requirement has been verified.
            The release is ready for production.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <Icon
                  size={28}
                  className="text-[#F4B6A8]"
                />

                <p className="mt-6 text-gray-400">
                  {item.label}
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  {item.value}
                </h3>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-green-500/30 bg-green-500/10 p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-green-400">
            ✅ APPROVED FOR PRODUCTION
          </h3>

          <p className="mt-4 text-gray-300">
            All test cases passed successfully.
            No known issues remain.
            The application is ready for deployment.
          </p>

          <button
            onClick={onDeploy}
            className="mt-8 rounded-full bg-[#F4B6A8] px-8 py-4 text-lg font-semibold text-[#071A35] transition hover:scale-105"
          >
            🚀 Deploy Version Forever
          </button>
        </motion.div>

      </div>
    </section>
  );
}