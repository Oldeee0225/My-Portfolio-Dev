"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Code2, Menu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`
            mt-4 flex h-14 items-center justify-between px-5
            rounded-full backdrop-blur-xl transition-all duration-300
            ${
              scrolled
                ? "bg-black/80 border border-white/10 shadow-lg"
                : "bg-black/50 border border-white/10"
            }
          `}
        >
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-white"
          >
            <Code2 className="w-5 h-5 text-primary" />
            DevPortfolio
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-4 text-sm">
              {[
                { id: "about", label: "Sobre mí" },
                { id: "skills", label: "Habilidades" },
                { id: "projects", label: "Proyectos" },
                { id: "experience", label: "Experiencia" },
                { id: "technest", label: "TechNest" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-white/70 hover:text-white transition"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
            >
              Contacto
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10"
            aria-label="Abrir menú"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden mt-3 rounded-2xl bg-black/90 border border-white/10 backdrop-blur p-6 space-y-4">
            {[
              { id: "about", label: "Sobre mí" },
              { id: "skills", label: "Habilidades" },
              { id: "projects", label: "Proyectos" },
              { id: "experience", label: "Experiencia" },
              { id: "technest", label: "TechNest" },
              { id: "contact", label: "Contacto" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="block text-white/80 hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
