import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

const fhky = [
  { to: "/empoderamiento", label: "Empoderamiento" },
  { to: "/antecedentes", label: "Antecedentes" },
  { to: "/documentos", label: "Documentos" },
  { to: "/libros", label: "Libros" },
] as const;

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/raghabananda", label: "Raghabananda" },
  { to: "/hariharananda", label: "Hariharananda" },
  { to: "/kriya-yoga", label: "KriyaYoga" },
  { to: "/noticias", label: "Noticias" },
] as const;

const FACEBOOK = "https://www.facebook.com/pg/HariharanandaKriyaYoga/";
const BLOGSPOT = "http://raghabananda.blogspot.com/";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="section-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex items-center gap-3" onClick={close}>
          <img
            src={logo.url}
            alt="Fundación Hariharananda Kriya Yoga"
            className="h-11 w-auto md:h-14"
          />
          <span className="hidden font-display text-base leading-tight text-foreground sm:block md:text-lg">
            Fundación Hariharananda
            <span className="block text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
              Kriya Yoga · FHKY
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary">
              FHKY <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <ul className="invisible absolute left-0 top-full z-50 w-52 rounded-md border border-border bg-background py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {fhky.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary [&.active]:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary [&.active]:text-primary"
            >
              {item.label}
            </Link>
          ))}

          <a
            href={FACEBOOK}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Facebook
          </a>
          <a
            href={BLOGSPOT}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Blog
          </a>

          <Link
            to="/contacto"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contacto
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border p-2 text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="section-x flex flex-col gap-1 py-4">
            {[...nav, ...fhky].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={close}
                className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary [&.active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={close}
              className="mt-2 rounded-full bg-primary px-5 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Contacto
            </Link>
            <div className="mt-3 flex gap-4 px-2 text-sm text-muted-foreground">
              <a href={FACEBOOK} target="_blank" rel="noreferrer">Facebook</a>
              <a href={BLOGSPOT} target="_blank" rel="noreferrer">Blog Raghabananda</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
