"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";
import {
  Zap,
  Users,
  Target,
  CheckCircle2,
  Building2,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Zap,
    title: "Desarrollo Web",
    description:
      "Aplicaciones web modernas, escalables y bien estructuradas usando tecnologías actuales.",
  },
  {
    icon: Users,
    title: "Consultoría Técnica",
    description:
      "Asesoría para tomar mejores decisiones técnicas y estructurar productos digitales sólidos.",
  },
  {
    icon: Target,
    title: "Soluciones a Medida",
    description:
      "Software personalizado alineado a objetivos reales de negocio y crecimiento.",
  },
];

const values = [
  "Código limpio y mantenible",
  "Enfoque en escalabilidad",
  "Comunicación clara",
  "Mejora continua",
];

export default function TechNestCompanySection() {
  return (
    <motion.section
      id="company"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative scroll-mt-32 w-full py-24 sm:py-32 px-6 bg-background overflow-hidden"
    >
      {/* BACKGROUND LOGO */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.035] sm:-translate-y-56">
        <Image
          src="/technest-logo.png"
          alt="Tech Nest Logo"
          width={630}
          height={630}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-20 sm:space-y-24">

        {/* HEADER */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Marca Personal</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-indigo-400 to-secondary bg-clip-text text-transparent">
                Tech Nest
              </span>
            </h2>

            <span className="block text-sm sm:text-base uppercase tracking-widest text-muted">
              Software Development
            </span>
          </div>

          <p className="text-base sm:text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            Tech Nest es mi marca personal y proyecto profesional fundado en 2024,
            enfocado en el desarrollo de software moderno, bien diseñado y
            escalable, aplicando buenas prácticas de ingeniería y una mentalidad
            orientada a calidad.
          </p>
        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-2xl bg-card border border-border p-6 sm:p-8 space-y-4 transition hover:border-primary/40"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                  {service.title}
                </h3>

                <p className="text-muted leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* VALUES + STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">

          {/* Values */}
          <div className="rounded-2xl bg-card border border-border p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6">
              Principios de trabajo
            </h3>

            <ul className="space-y-4">
              {values.map((value) => (
                <li key={value} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-muted text-sm sm:text-base">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* STATS */}
          <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 grid grid-cols-2 gap-6">
            {[
              { label: "Fundado", value: "2024" },
              { label: "Enfoque", value: "Software moderno" },
              { label: "Rol", value: "Founder / Developer" },
              { label: "Mentalidad", value: "Calidad & escala" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-sm text-muted">{item.label}</p>
                <p className="text-base sm:text-lg font-semibold text-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* CONTACT  */}
          <div className="md:col-span-2 rounded-2xl border border-border bg-card/70 backdrop-blur p-6 sm:p-8 space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
              Contacto Empresarial
            </h3>

            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted">Email Corporativo</p>
                <a
                  href="mailto:technestc4@gmail.com"
                  className="text-base sm:text-lg font-medium text-foreground hover:text-primary transition"
                >
                  technestc4@gmail.com
                </a>
              </div>
            </div>

            {/* WATHSAPP */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted">WhatsApp</p>
                <a
                  href="https://wa.me/50763224629"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-medium text-foreground hover:text-secondary transition"
                >
                  +507 6322-4629
                </a>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted">Ubicación</p>
                <p className="text-base sm:text-lg font-medium text-foreground">
                  Chiriquí, Panamá
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/50763224629"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-white font-medium transition hover:opacity-90"
            >
              <Send className="w-5 h-5" />
              Solicitar Cotización
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
