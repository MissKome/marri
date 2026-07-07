"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F6]">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 rounded-full bg-[#F4B6A8]/20 blur-[120px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 py-32 lg:flex-row">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center lg:text-left"
        >
          <Badge>🚀 Production Release Candidate</Badge>

          <h1 className="mt-8 font-heading text-5xl font-bold leading-tight text-[#071A35] md:text-7xl">
            Marriage:
            <br />
            Version Forever
          </h1>

          <p className="mt-6 text-xl font-semibold text-[#071A35]">
            Built with Love.
            <br />
            Reviewed by Family.
           <br />
           QA Approved.
          <br />
          Ready for Deployment.
          </p>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Every great product has a journey. Ours began with a simple hello,
            grew through countless beautiful moments, and is finally preparing
            for its biggest release.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button>Begin the Experience</Button>

            <Button variant="secondary">
              Explore Our Story
            </Button>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[40px] bg-[#F4B6A8]/30 blur-2xl" />

          <div className="relative overflow-hidden rounded-[40px] shadow-2xl">
            <Image
              src="/images/couple.jpg"
              alt="The Couple"
              width={550}
              height={700}
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}