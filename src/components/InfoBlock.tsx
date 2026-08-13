export default function InfoBlock({
  label,
  children,
  variant = "blue",
}: {
  label: string;
  children: React.ReactNode;
  variant?: "blue" | "amber";
}) {
  const labelClass = variant === "amber" ? "text-amber-400" : "text-neon-bright";
  const boxClass =
    variant === "amber"
      ? "border-amber-500/25 bg-amber-500/5"
      : "border-neon/15 bg-black/20";

  return (
    <div className="mt-6">
      <div className={`text-xs font-semibold tracking-wider ${labelClass}`}>{label}</div>
      <div className={`mt-3 rounded-lg border p-4 text-sm text-foreground/90 ${boxClass}`}>
        {children}
      </div>
    </div>
  );
}
