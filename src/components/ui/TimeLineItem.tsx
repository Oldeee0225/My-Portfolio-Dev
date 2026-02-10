import { Briefcase, GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";

export type TimelineItemProps = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  type: "work" | "education";
  isLast?: boolean;
};

export default function TimelineItem({
  title,
  subtitle,
  period,
  description,
  type,
  isLast = false,
}: TimelineItemProps) {
  const isWork = type === "work";

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
 <div className="relative flex gap-10">
  {/* Línea + Icono */}
  <div className="relative flex flex-col items-center">
    {/* Icon container */}
    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/30">
      {isWork ? (
        <Briefcase className="h-5 w-5 text-primary" />
      ) : (
        <GraduationCap className="h-5 w-5 text-primary" />
      )}
    </div>

    {/* VERTICAL LINE */}
    {!isLast && (
      <div className="absolute top-12 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />
    )}
  </div>

      {/* CARD */}
      <div className="relative w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition hover:border-white/20">
        {/* Period */}
        <span className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
          {period}
        </span>

        {/* CONTENT */}
        <h3 className="text-lg font-semibold text-foreground">
          {title}
        </h3>

        <p className="mt-1 text-sm text-muted">
          {subtitle}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-muted">
          {description}
        </p>
      </div>
    </div>
  );
}
