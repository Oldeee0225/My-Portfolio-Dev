import React from "react";


type SkillItem = {
  name: string;
  level: number;
  icon: React.ElementType;
};

type SkillCardProps = {
  title: string;
  icon: React.ElementType;
  accent: "blue" | "violet" | "purple" | "orange";
  skills: SkillItem[];
};

const accentStyles = {
  blue: {
    iconBg: "bg-blue-500/10",
    iconText: "text-blue-500",
    bar: "from-blue-500 to-blue-600",
  },
  violet: {
    iconBg: "bg-violet-500/10",
    iconText: "text-violet-500",
    bar: "from-violet-500 to-violet-600",
  },
  purple: {
    iconBg: "bg-purple-500/10",
    iconText: "text-purple-500",
    bar: "from-purple-500 to-purple-600",
  },
  orange: {
    iconBg: "bg-orange-500/10",
    iconText: "text-orange-500",
    bar: "from-orange-500 to-orange-600",
  },
};

export default function SkillCard({
  title,
  icon: Icon,
  accent,
  skills,
}: SkillCardProps) {
  const styles = accentStyles[accent];


  return (
    <div className="rounded-2xl border border-border bg-card p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${styles.iconBg}`}
        >
          <Icon className={`w-6 h-6 ${styles.iconText}`} />
        </div>
        <h3 className="text-xl font-semibold text-foreground">
          {title}
        </h3>
      </div>

      {/* SKILLS */}
      <div className="space-y-5">
        {skills.map((skill) => {
          const SkillIcon = skill.icon;

          return (
            <div key={skill.name}>
              <div className="flex items-center justify-between mb-2 text-sm">
                <div className="flex items-center gap-2 text-muted">
                  <SkillIcon className="w-4 h-4" />
                  <span>{skill.name}</span>
                </div>
                <span className="text-muted">{skill.level}%</span>
              </div>

              <div className="h-1.5 rounded-full bg-border overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${styles.bar}`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
