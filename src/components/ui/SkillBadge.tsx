
function SkillBadge({ label }: { label: string })

{

  return (
    <span
      className="
        inline-flex items-center
        rounded-xl border border-border
        bg-background/60
        px-4 py-2
        text-sm text-foreground
        backdrop-blur
      "
    >
      {label}
    </span>
  );
}
