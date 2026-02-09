import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT */}
        <div className="text-center md:text-left space-y-2">
          <p className="text-sm text-muted">
            © {year} Oldemar Gonzalez. Todos los derechos reservados.
          </p>

          <p className="text-sm text-muted flex items-center justify-center md:justify-start gap-2">
            Hecho con <span className="text-red-500">❤️</span> y mucho{" "}
            <span className="text-yellow-500">☕</span>
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Oldeee0225"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/oldemar-gonzalez-9270502a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:oldemarcast025@gmail.com"
            className="text-sm text-muted hover:text-foreground transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
