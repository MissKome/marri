"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-gray-200/40">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Logo />

        <nav className="hidden items-center gap-10 text-sm font-medium text-[#0B1F3A] md:flex">
          <Link href="/">Home</Link>

          <Link href="/our-story">Our Story</Link>

          <Link href="/gallery">Gallery</Link>

          <Link href="/faq">FAQ</Link>
        </nav>

        <button className="rounded-full bg-[#0B1F3A] px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-[#16345E]">
          Start Testing
        </button>

      </div>
    </header>
  );
}