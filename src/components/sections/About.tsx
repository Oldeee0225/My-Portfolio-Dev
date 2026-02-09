"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";
import Image from "next/image";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <motion.section
      id="about"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative scroll-mt-32 w-full bg-background"
    >
      <div className="w-full py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT */}
          <motion.div variants={container} className="space-y-10">
            {/* Intro */}
            <motion.div variants={card} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Sobre mí
              </h2>

              <p className="text-muted text-base md:text-lg leading-relaxed">
                Soy un desarrollador de software junior enfocado en construir
                bases sólidas, aprender constantemente y aplicar buenas prácticas
                en cada proyecto.
              </p>

              <p className="text-muted leading-relaxed">
                Me interesa el desarrollo web moderno, entender cómo funcionan
                las tecnologías por dentro y crear soluciones claras,
                mantenibles y escalables.
              </p>

              <p className="text-muted leading-relaxed">
                Busco formar parte de un equipo donde pueda aportar valor desde
                el primer día, seguir aprendiendo y crecer como desarrollador.
              </p>
            </motion.div>

            {/* MAIN CARDS */}
            <motion.div
              variants={container}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                {
                  title: "Cómo trabajo",
                  text:
                    "Me enfoco en escribir código claro, mantenible y bien estructurado. Priorizo entender el problema antes de escribir soluciones.",
                },
                {
                  title: "Motivación",
                  text:
                    "Me motiva aprender constantemente, enfrentar retos técnicos y mejorar cada proyecto respecto al anterior.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={card}
                  whileHover={{ y: -4 }}
                  className="
                    rounded-2xl p-6 space-y-3
                    bg-card border border-primary/30
                    transition
                  "
                >
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* HIGHLITHGS */}
            <motion.div
              variants={container}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {[
                ["Enfoque", "Arquitectura clara"],
                ["Interés", "Frontend, Backend & Full Stack"],
                ["Mentalidad", "Aprendizaje continuo"],
                ["Trabajo", "Proyectos reales"],
              ].map(([label, value]) => (
                <motion.div
                  key={label}
                  variants={card}
                  className="rounded-lg p-4 bg-card border border-primary/20"
                >
                  <p className="text-sm text-muted">{label}</p>
                  <p className="font-medium text-foreground">{value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: IMAGE */}
          <motion.div
            variants={card}
            className="relative flex justify-center md:justify-end"
          >
            <Image
              src="/olde02.png"
              alt="Foto de Oldemar"
              width={520}
              height={520}
              priority
              className="
                select-none
                object-contain
                w-full
                max-w-[360px] sm:max-w-[420px] md:max-w-[520px]
                drop-shadow-[0_20px_60px_rgba(99,102,241,0.25)]
                md:mr-[-55px]
              "
            />

            {/* BARRA DE LUZ */}
            <div
              className="
                absolute
                left-1/2
                -translate-x-1/2
                bottom-[-0.25rem]
                w-[80%]
                h-1.5
                rounded-full
                bg-gradient-to-r
                from-transparent
                via-primary
                to-transparent
                blur-[1px]
              "
            />

            {/* Glow */}
            <div
              className="
                absolute
                left-1/2
                -translate-x-1/2
                bottom-3
                w-[70%]
                h-24
                bg-primary/30
                blur-[180px]
                rounded-full
              "
            />
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
