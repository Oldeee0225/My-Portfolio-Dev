"use client";

import { motion } from "framer-motion";
import { fadeUp, mobileVariants, viewportConfig } from "../../lib/animations";
import { useIsMobile } from "../../hooks/use-is-mobile";
import MotionSection from "../ui/MotionSection";
import SkillCard from "../ui/SkillCard";
import {
  Smartphone,
  Server,
  Cloud,
  Code2,
  Terminal,
  Palette,
  Blocks,
  Cpu,
  Database,
  Box,
  GitBranch,
  Layout,
  Globe,
  MessageCircle,
} from "lucide-react";

export default function Skills() {
  const isMobile = useIsMobile();
  return (
    <MotionSection
      id="skills"
      variants={isMobile ? mobileVariants : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="scroll-mt-32 w-full py-32 px-6 bg-background mobile-static"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* HEADER */}
        <div className="text-center space-y-6">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
            Stack tecnológico
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Habilidades & Tecnologías
          </h2>

          <p className="max-w-2xl mx-auto text-muted text-lg">
            Tecnologías y herramientas que utilizo para construir aplicaciones
            modernas, escalables y bien estructuradas.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard
            title="Frontend"
            icon={Smartphone}
            accent="blue"
            skills={[
              { name: "React / Next.js", icon: Code2, level: 95 },
              { name: "TypeScript", icon: Terminal, level: 90 },
              { name: "Tailwind CSS", icon: Palette, level: 92 },
              { name: "Vue.js", icon: Blocks, level: 85 },
            ]}
          />

          <SkillCard
            title="Backend"
            icon={Server}
            accent="violet"
            skills={[
              { name: "Node.js / Express", icon: Server, level: 88 },
              { name: "Python / Django", icon: Cpu, level: 82 },
              { name: "Firebase", icon: Database, level: 86 },
              { name: "MongoDB", icon: Box, level: 84 },
            ]}
          />

          <SkillCard
            title="DevOps & Tools"
            icon={Cloud}
            accent="purple"
            skills={[
              { name: "Git / GitHub", icon: GitBranch, level: 93 },
              { name: "Docker", icon: Box, level: 80 },
              { name: "AWS / Azure", icon: Cloud, level: 78 },
              { name: "REST / GraphQL", icon: Layout, level: 87 },
            ]}
          />

          <SkillCard
            title="Idiomas"
            icon={Globe}
            accent="orange"
            skills={[
              { name: "Español", icon: MessageCircle, level: 100 },
              { name: "Inglés", icon: MessageCircle, level: 75 },
              { name: "Portugués", icon: MessageCircle, level: 60 },
            ]}
          />
        </div>
      </div>
    </MotionSection>
  );
}
