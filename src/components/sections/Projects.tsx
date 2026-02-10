"use client";

import { motion } from "framer-motion";
import { fadeUp, mobileVariants, viewportConfig } from "../../lib/animations";
import { useIsMobile } from "../../hooks/use-is-mobile";
import MotionSection from "../ui/MotionSection";
import ProjectCard from "../../components/ui/ProjectCard";

const projects = [
  {
    title: "Electric Cell",
    description:
      "Aplicación iOS para gestión y venta de productos tecnológicos, enfocada en rendimiento, UI limpia y experiencia de usuario.",
    category: "Mobile App",
    platform: "iOS",
    company: "TechNest",
    tech: ["SwiftUI", "iOS", "SwiftData"],
    status: "Completado",
    image: "/projects/electric-cell.jpg",
    repoUrl: "https://github.com/Oldeee0225/ElectricCell-J-M",
    featured: true,
  },
  {
    title: "Avocado",
    description:
      "Aplicación Android orientada a la gestión de productos y procesos internos, en proyectos agrícolas.",
    category: "Mobile App",
    platform: "Android",
    company: "TechNest",
    tech: ["Kotlin", "Android", "Firebase"],
    status: "Completado",
    image: "/projects/avocado.jpg",
    repoUrl: "https://github.com/Oldeee0225/AvocadoApp",
    featured: true,
  },
  {
    title: "Restaurant System",
    description:
      "Sistema iOS para gestión de restaurantes: pedidos, mesas y control interno. Proyecto actualmente en desarrollo.",
    category: "Mobile App",
    platform: "iOS",
    company: "TechNest",
    tech: ["SwiftUI", "iOS", "Firebase"],
    status: "En construcción",
    image: "/projects/restaurant-system.jpg",
    featured: true,
  },
  {
    title: "Portafolio Personal",
    description:
      "Portafolio web personal para mostrar proyectos, habilidades y experiencia como desarrollador de software.",
    category: "Web",
    company: "Personal",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Completado",
    image: "/projects/portfolio.jpg",
    repoUrl: "https://github.com/Oldeee0225/My-Portfolio-Dev",
    featured: true,
  },
  {
    title: "Sky Tech Learning",
    description:
      "Plataforma web educativa enfocada en tecnología y enseñanza moderna. Proyecto actualmente en desarrollo.",
    category: "Web",
    company: "TechNest",
    tech: ["Next.js", "React", "Tailwind CSS"],
    status: "En construcción",
    image: "/projects/sky-tech-learning.jpg",
    featured: true,
  },
  {
    title: "Phantom",
    description:
      "Herramienta desarrollada en Excel para automatización y control de datos, optimizando procesos internos.",
    category: "Herramienta",
    company: "VSC",
    tech: ["Excel", "Macros", "Automatización"],
    status: "Completado",
    image: "/projects/phantom.jpg",
    featured: false,
  },
];

export default function Projects() {
  const isMobile = useIsMobile();
  return (
    <MotionSection
      id="projects"
      variants={isMobile ? mobileVariants : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="scroll-mt-32 w-full py-28 md:py-32 px-6 bg-background mobile-static"
    >
      <div className="max-w-7xl mx-auto space-y-14 md:space-y-20">

        {/* HEADER */}
        <div className="text-center space-y-5">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
            Portafolio
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Proyectos Destacados
          </h2>

          <p className="mx-auto max-w-2xl text-base md:text-lg text-muted leading-relaxed">
            Una selección de proyectos donde aplico diseño limpio, arquitectura
            clara y enfoque en producto real.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

      </div>
    </MotionSection>
  );
}
