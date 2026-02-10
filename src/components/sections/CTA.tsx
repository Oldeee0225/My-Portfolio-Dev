"use client";

import { motion } from "framer-motion";
import { fadeUp, mobileVariants, viewportConfig } from "../../lib/animations";
import { useIsMobile } from "../../hooks/use-is-mobile";
import MotionSection from "../ui/MotionSection";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";

export default function CTA() {
  const isMobile = useIsMobile();

  return (
    <MotionSection
      id="contact"
      variants={isMobile ? mobileVariants : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="
        relative scroll-mt-32 w-full
        py-24 sm:py-32
        px-5 sm:px-6
        bg-card overflow-hidden
        mobile-static
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[280px] h-[280px]
            sm:w-[420px] sm:h-[420px]
            bg-primary/10 rounded-full blur-3xl
          "
        />
        <div
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[200px] h-[200px]
            sm:w-[280px] sm:h-[280px]
            bg-secondary/10 rounded-full blur-3xl
          "
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 sm:space-y-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <MessageSquare className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary">Contacto</span>
        </div>

        {/* TITLE */}
        <h2
          className="
            text-3xl sm:text-4xl md:text-5xl
            font-extrabold tracking-tight text-foreground
          "
        >
          Construyamos algo{" "}
          <span className="bg-gradient-to-r from-primary via-indigo-400 to-secondary bg-clip-text text-transparent">
            increíble juntos
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            text-base sm:text-lg
            text-muted max-w-2xl mx-auto leading-relaxed
          "
        >
          Estoy disponible para colaborar en proyectos de software, productos
          digitales y soluciones a medida. Si tienes una idea o un reto técnico,
          hablemos.
        </p>

        {/* ACTIONS */}
        <div
          className="
            flex flex-col sm:flex-row
            items-stretch sm:items-center
            justify-center gap-3 sm:gap-4
            pt-2 sm:pt-4
          "
        >
          <a
            href="mailto:technestc4@gmail.com"
            className="
              inline-flex items-center justify-center gap-2
              px-6 sm:px-8 py-4
              rounded-xl bg-primary text-white font-medium
              transition hover:opacity-90 hover:scale-[1.02]
            "
          >
            <Mail className="w-5 h-5" />
            Envíame un email
          </a>

          <a
            href="#projects"
            className="
              inline-flex items-center justify-center gap-2
              px-6 sm:px-8 py-4
              rounded-xl border border-border
              text-foreground transition
              hover:bg-white/5 hover:scale-[1.02]
            "
          >
            Ver proyectos
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* INFO CARDS */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
            gap-4 sm:gap-6
            pt-10 sm:pt-16
          "
        >
          {/* Email */}
          <div className="rounded-2xl border border-border bg-card p-6 text-center transition hover:border-primary/40">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <p className="text-sm text-muted">oldemarcast025@gmail.com</p>
          </div>

          {/* RESPONSE TIME */}
          <div className="rounded-2xl border border-border bg-card p-6 text-center transition hover:border-secondary/40">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">
              Tiempo de respuesta
            </h3>
            <p className="text-sm text-muted">Menos de 24 horas</p>
          </div>

          {/* AVAILABILITY */}
          <div className="rounded-2xl border border-border bg-card p-6 text-center transition hover:border-green-500/40">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">
              Disponibilidad
            </h3>
            <p className="text-sm text-muted">Abierto a oportunidades</p>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
