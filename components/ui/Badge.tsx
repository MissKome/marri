interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <div className="inline-flex rounded-full border border-[#F4B6A8] bg-white px-5 py-2 text-sm font-medium text-[#071A35] shadow-sm">
      {children}
    </div>
  );
}