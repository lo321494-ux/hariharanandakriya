import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="section-x grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Fundación Hariharananda Kriya Yoga</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
            Entidad sin ánimo de lucro dedicada a difundir la práctica y el estudio del
            Kriya Yoga en el linaje de Paramahamsa Hariharananda, al servicio del
            crecimiento espiritual, físico y humano de toda persona.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-ink-foreground/50">
            Explorar
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/kriya-yoga" className="hover:text-primary">¿Qué es el Kriya Yoga?</Link></li>
            <li><Link to="/linaje" className="hover:text-primary">Nuestro linaje</Link></li>
            <li><Link to="/programas" className="hover:text-primary">Programas e iniciación</Link></li>
            <li><Link to="/fundacion" className="hover:text-primary">La Fundación</Link></li>
            <li><Link to="/contacto" className="hover:text-primary">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-ink-foreground/50">
            Contacto
          </p>
          <ul className="mt-5 space-y-4 text-sm text-ink-foreground/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Envigado, Antioquia — Colombia</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:info@hariharanandakriya.org" className="hover:text-primary">
                info@hariharanandakriya.org
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Escríbenos y te contactamos</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-x flex flex-col gap-2 py-6 text-xs text-ink-foreground/50 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Fundación Hariharananda Kriya Yoga · NIT 901042480-0</span>
          <span>Entidad sin ánimo de lucro · Sigla FHKY</span>
        </div>
      </div>
    </footer>
  );
}
