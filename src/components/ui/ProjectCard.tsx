import { Github } from "lucide-react";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  repoUrl?: string;
  featured?: boolean;
};

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  repoUrl,
  featured,
}: ProjectCardProps) {
  return (
    <article
      className="
        group relative overflow-hidden
        rounded-2xl border border-border bg-card
        transition-all duration-300
        hover:border-primary/40
      "
    >
      {/* FEATURE BADGE */}
      {featured && (
        <span
          className="
            absolute top-4 right-4 z-10
            rounded-full bg-primary/15 px-3 py-1
            text-xs font-medium text-primary
            backdrop-blur
          "
        >
          Destacado
        </span>
      )}

      {/* IMAGE */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="
            object-cover object-center
            transition-transform duration-500
            group-hover:scale-105
          "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-6 space-y-5">
        {/* Title + description */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            {description}
          </p>
        </div>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="
                rounded-full border border-border
                bg-background px-3 py-1
                text-xs text-muted
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-3 pt-2">
          {repoUrl ? (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                text-sm text-muted
                hover:text-primary transition
              "
            >
              <Github className="w-4 h-4" />
              Código
            </a>
          ) : (
            <span
              className="
                inline-flex items-center
                rounded-lg border border-border
                bg-background/60 px-4 py-2
                text-sm text-muted
              "
            >
              🚧 En construcción
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
