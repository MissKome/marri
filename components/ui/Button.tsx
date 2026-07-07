import { ArrowRight } from "lucide-react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium transition-all duration-300",
        {
          "bg-[#071A35] text-white hover:-translate-y-1 hover:shadow-xl":
            variant === "primary",

          "border border-[#071A35] bg-white text-[#071A35] hover:bg-[#071A35] hover:text-white":
            variant === "secondary",
        }
      )}
    >
      {children}
      <ArrowRight size={18} />
    </button>
  );
}