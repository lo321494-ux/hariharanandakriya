import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="section-x grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Fundación Hariharananda Kriya Yoga</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
            Entidad sin ánimo de lucro, apolítica y sin sectarismos, dedicada a diseminar
            las enseñanzas de Kriya Yoga de Paramahamsa Hariharananda, Brahmarshi
            Raghabananda y los maestros del linaje de Babaji Maharaj.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-ink-foreground/50">
            Secciones
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/antecedentes" className="hover:text-primary">Antecedentes</Link></li>
            <li><Link to="/documentos" className="hover:text-primary">Documentos</Link></li>
            <li><Link to="/libros" className="hover:text-primary">Libros</Link></li>
            <li><Link to="/kriya-yoga" className="hover:text-primary">Kriya Yoga</Link></li>
            <li><Link to="/noticias" className="hover:text-primary">Noticias</Link></li>
            <li><Link to="/contacto" className="hover:text-primary">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-ink-foreground/50">
            Contacto
          </p>
          <p className="mt-5 font-display text-xl">Yogacharya Lía Cristina Upegui G.</p>
          <ul className="mt-4 space-y-4 text-sm text-ink-foreground/80">
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:fundacionhariharananda@gmail.com" className="hover:text-primary">
                fundacionhariharananda@gmail.com
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+573174293044" className="hover:text-primary">Cel: 317 429 3044</a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Envigado, Antioquia — Colombia</span>
            </li>
          </ul>
          <div className="mt-5 flex gap-4 text-sm">
            <a
              href="https://www.facebook.com/pg/HariharanandaKriyaYoga/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              Facebook
            </a>
            <a
              href="http://raghabananda.blogspot.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              Blog Raghabananda
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-x flex flex-col gap-2 py-6 text-xs text-ink-foreground/50 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Fundación Hariharananda Kriya Yoga</span>
          <span>Entidad sin ánimo de lucro · Sigla FHKY · Envigado, Antioquia</span>
        </div>
      </div>
    </footer>
  );
}
