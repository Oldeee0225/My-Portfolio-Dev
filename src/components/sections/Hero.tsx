"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";
import { Rocket, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="
        relative
        min-h-screen
        pt-28 sm:pt-36 md:pt-44   
        px-6 sm:px-8
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Glow blobs (más suaves en mobile) */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-primary/15 sm:bg-primary/20 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-primary/10 blur-3xl rounded-full" />

        {/* GRID */}
        <div className="
          absolute inset-0
          opacity-30 sm:opacity-100
          bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),
          linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]
          bg-[size:72px_72px]
        " />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6 sm:space-y-8">

        {/* AVAILIVILITY BADGE */}
        <motion.div
          variants={fadeUp}
          className="
            inline-flex items-center gap-2
            px-4 py-2
            rounded-full
            border border-primary/30
            bg-primary/10
            mx-auto
          "
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary">
            Disponible para nuevas oportunidades
          </span>
        </motion.div>

        {/* HEADEING */}
        <motion.h1
          variants={fadeUp}
          className="
            font-bold tracking-tight
            text-4xl sm:text-5xl md:text-7xl   
          "
        >
          Hola, soy{" "}
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Oldemar González
          </span>
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="
            text-lg sm:text-2xl md:text-3xl
            text-muted
          "
        >
          Desarrollador de Software · Full Stack
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="
            text-base sm:text-lg
            max-w-2xl mx-auto
            text-muted
            leading-relaxed
          "
        >
          Desarrollo aplicaciones web y móviles escalables con foco en
          rendimiento, arquitectura clara y experiencias de usuario elegantes.
        </motion.p>

        {/* ACTIONS */}
        <motion.div
          variants={fadeUp}
          className="
            flex flex-col sm:flex-row   /* 🔹 botones en columna en móvil */
            items-center justify-center
            gap-4
            pt-6
          "
        >
          <a
            href="#projects"
            className="
              inline-flex items-center gap-2
              px-8 py-4
              rounded-lg
              bg-primary text-white
              font-medium
              transition-transform hover:scale-105
              w-full sm:w-auto   /* 🔹 full width en móvil */
            "
          >
            <Rocket className="w-5 h-5" />
            Ver proyectos
          </a>

          <a
            href="#contact"
            className="
              inline-flex items-center gap-2
              px-8 py-4
              rounded-lg
              border border-border
              bg-card text-foreground
              transition-transform hover:scale-105
              w-full sm:w-auto
            "
          >
            Contáctame
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* TECH STACK */}
        <motion.div
          variants={fadeUp}
          className="
            mt-12 sm:mt-20
            flex flex-wrap
            items-center justify-center
            gap-3 sm:gap-6   
            opacity-50
          "
        >
          {["React", "TypeScript", "Node.js", "Kotlin", "SwiftUI"].map((tech) => (
            <div
              key={tech}
              className="
                px-3 sm:px-4
                py-2
                rounded-lg
                backdrop-blur-sm
                bg-card
                border border-border
              "
            >
              <code className="text-xs sm:text-sm text-muted">{tech}</code>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
