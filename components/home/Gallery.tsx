"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  {
    src: "/gallery/1.jpg",
    title: "Version 0.1",
    caption: "First Hello",
  },
  {
    src: "/gallery/2.jpg",
    title: "Version 0.3",
    caption: "First Conversation",
  },
  {
    src: "/gallery/3.jpg",
    title: "Version 0.5",
    caption: "First Date",
  },
  {
    src: "/gallery/4.jpg",
    title: "Version 0.8",
    caption: "The Proposal",
  },
  {
    src: "/gallery/5.jpg",
    title: "Version 1.0",
    caption: "Wedding Day",
  },
  {
    src: "/gallery/6.jpg",
    title: "Future Release",
    caption: "Version Forever ❤️",
  },
];

export default function Gallery() {
  return (
    <section className="bg-[#FAF8F6] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F4B6A8]">
            Gallery
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#071A35]">
            Memories in Every Version
          </h2>

          <p className="mt-4 text-gray-600">
            Every release tells part of our story.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-3xl bg-white shadow-lg"
            >
              <div className="relative h-80">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-sm text-[#F4B6A8]">{photo.title}</p>

                <h3 className="mt-2 text-xl font-bold text-[#071A35]">
                  {photo.caption}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}