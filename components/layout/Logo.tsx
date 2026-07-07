import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B1F3A] text-lg font-bold text-white shadow-lg">
        ♾
      </div>

      <div>
        <h2 className="text-xl font-bold text-[#0B1F3A]">
          Marriage
        </h2>

        <p className="text-xs uppercase tracking-[0.25em] text-[#F4B6A8]">
          Version Forever
        </p>
      </div>
    </Link>
  );
}