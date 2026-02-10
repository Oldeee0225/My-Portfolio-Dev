"use client";

import { motion } from "framer-motion";
import { fadeUp, mobileVariants, viewportConfig } from "../../lib/animations";
import { useIsMobile } from "../../hooks/use-is-mobile";
import MotionSection from "../ui/MotionSection";
import Image from "next/image";

import { Variants } from "framer-motion";

const containerDesktop: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardDesktop: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function About() {
  const isMobile = useIsMobile();

  return (
    <MotionSection
      id="about"
      variants={isMobile ? mobileVariants : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="relative scroll-mt-32 w-full bg-background mobile-static"
    >
      <div className="w-full py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT */}
          <motion.div
            variants={containerDesktop}
            className="space-y-10"
          >
            {/* Intro */}
            <motion.div
              variants={cardDesktop}
              className="space-y-6"
            >
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

            {/* Cards */}
            <motion.div
              variants={containerDesktop}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                {
                  title: "Cómo trabajo",
                  text:
                    "Me enfoco en escribir código claro, mantenible y bien estructurado.",
                },
                {
                  title: "Motivación",
                  text:
                    "Aprender constantemente y enfrentar retos técnicos reales.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={cardDesktop}
                  className="rounded-2xl p-6 bg-card border border-primary/30"
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
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={cardDesktop}
            className="relative flex justify-center md:justify-end"
          >
            <Image
              src="/olde02.png"
              alt="Foto de Oldemar"
              width={520}
              height={520}
              sizes="(max-width: 768px) 90vw, 520px"
              loading="lazy"
              className="
                object-contain w-full
                max-w-[360px] sm:max-w-[420px] md:max-w-[520px]
                drop-shadow-[0_20px_60px_rgba(99,102,241,0.25)]
              "
            />
            {/* Barra luminosa */}
            <div
              className="
                absolute
                left-1/2
                -translate-x-[59%]
                bottom-[-0.25rem]
                w-[80%]
                h-1.5
                rounded-full
                bg-gradient-to-r
                from-transparent
                via-primary
                to-transparent
                to-transparent
                blur-[1px]
                hidden md:block
              "
            />

            {/* Glow inferior */}
            <div
              className="
                absolute
                left-1/2
                -translate-x-[59%]
                bottom-3
                w-[70%]
                h-24
                bg-primary/30
                blur-[180px]
                rounded-full
                hidden md:block
              "
            />
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
}
