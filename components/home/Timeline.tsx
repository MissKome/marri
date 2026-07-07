"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const timeline = [
  {
    version: "0.1",
    title: "First Hello",
    date: "12 March 2022",
    description:
      "Every great story starts with a simple introduction.",
    image: "/timeline/hello.jpg",
  },
  {
    version: "0.3",
    title: "First Conversation",
    date: "18 March 2022",
    description:
      "One conversation became many, and we never wanted them to end.",
    image: "/timeline/conversation.jpg",
  },
  {
    version: "0.5",
    title: "First Date",
    date: "2 April 2022",
    description:
      "The first official release of our relationship.",
    image: "/timeline/date.jpg",
  },
  {
    version: "0.8",
    title: "The Proposal",
    date: "15 February 2026",
    description:
      "The biggest feature update before Version Forever.",
    image: "/timeline/proposal.jpg",
  },
  {
    version: "1.0",
    title: "Wedding Day",
    date: "22 August 2026",
    description:
      "Official deployment into forever.",
    image: "/timeline/wedding.jpg",
  },
];

export default function Timeline() {
  return (
    <section className="bg-[#FAF8F6] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[#F4B6A8]">
            Development Timeline
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#071A35]">
            Every Release
            <br />
            Brought Us Here
          </h2>
        </div>

        <div className="relative mt-24">

          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-[#F4B6A8]/40 lg:block" />

          <div className="space-y-24">

            {timeline.map((item, index) => (
              <motion.div
                key={item.version}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >

                <div className="overflow-hidden rounded-[32px] shadow-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={500}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div>

                  <span className="rounded-full bg-[#071A35] px-5 py-2 text-sm font-semibold text-white">
                    Version {item.version}
                  </span>

                  <h3 className="mt-6 text-4xl font-bold text-[#071A35]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[#F4B6A8] font-medium">
                    {item.date}
                  </p>

                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}