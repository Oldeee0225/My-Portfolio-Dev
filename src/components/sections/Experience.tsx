"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";
import { Briefcase, GraduationCap } from "lucide-react";

type ExperienceItem = {
  id: number;
  type: "work" | "education";
  title: string;
  subtitle: string;
  period: string;
  description: string;
};

const experience: ExperienceItem[] = [
  {
    id: 1,
    type: "work",
    title: "Tech Nest Software Development",
    subtitle: "Proyectos personales",
    period: "2024 — Presente",
    description:
      "Desarrollo de aplicaciones web utilizando React, Next.js y Tailwind CSS, aplicando buenas prácticas, control de versiones y enfoque en UI limpia.",
  },
  {
    id: 2,
    type: "education",
    title: "Ingeniería en Desarrollo de Software",
    subtitle: "Tech Institute",
    period: "2023 — Presente",
    description:
      "Estudio de fundamentos de programación, desarrollo web moderno y construcción de proyectos prácticos orientados a resolver problemas reales.",
  },
  {
    id: 3,
    type: "education",
    title: "Licenciatura en Inglés con Énfasis en la Enseñanza",
    subtitle: "Universidad Autónoma de Chiriquí",
    period: "2025 — Presente",
    description:
      "Formación académica enfocada en el dominio del idioma inglés y metodologías de enseñanza.",
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="scroll-mt-32 w-full py-24 md:py-32 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto space-y-16 md:space-y-20">

        {/* HEADER */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Experiencia
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-base md:text-lg">
            Mi recorrido formativo y práctico dentro del desarrollo de software.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">

          {/* VIRTICAL LINE */}
          <div className="
            absolute 
            left-4 sm:left-6 
            top-0 bottom-0 
            w-px 
            bg-gradient-to-b 
            from-primary/80 
            via-primary/40 
            to-transparent
          " />

          <div className="space-y-12 sm:space-y-16">
            {experience.map((item) => {
              const Icon =
                item.type === "work" ? Briefcase : GraduationCap;

              return (
                <div
                  key={item.id}
                  className="
                    relative 
                    pl-14 sm:pl-20
                  "
                >
                  {/* ICON */}
                  <div className="absolute left-0 top-1">
                    <div className="
                      w-9 h-9 sm:w-12 sm:h-12
                      rounded-xl 
                      bg-primary/10 
                      border border-primary/30 
                      flex items-center justify-center
                    ">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                  </div>

                  {/* CARD */}
                  <div className="
                    rounded-2xl 
                    border border-border 
                    bg-card/70 
                    backdrop-blur 
                    p-5 sm:p-6 
                    space-y-3
                  ">
                    {/* HEADER */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted">
                          {item.subtitle}
                        </p>
                      </div>

                      <span className="
                        w-fit
                        text-xs 
                        px-3 py-1 
                        rounded-full 
                        border border-border 
                        bg-background
                        text-muted
                      ">
                        {item.period}
                      </span>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-sm sm:text-base text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
