import { createFileRoute } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import palpitar1 from "@/assets/palpitar1.jpg.asset.json";
import palpitar2 from "@/assets/palpitar2.jpg.asset.json";
import esencia1 from "@/assets/esencia1.jpg.asset.json";
import esencia2 from "@/assets/esencia2.jpg.asset.json";

export const Route = createFileRoute("/libros")({
  head: () => ({
    meta: [
      { title: "Libros | Fundación Hariharananda Kriya Yoga" },
      {
        name: "description",
        content:
          "Libros de Kriya Yoga: Un Palpitar de Eternidad y La Esencia de la Yoga. Además, lectura en línea de Discursos sobre Kriya Yoga y Equanimous Yoga Philosophy.",
      },
      { property: "og:title", content: "Libros | FHKY" },
      {
        property: "og:description",
        content:
          "Un Palpitar de Eternidad, La Esencia de la Yoga y libros en inglés disponibles para lectura.",
      },
      { property: "og:image", content: palpitar1.url },
      { name: "twitter:image", content: palpitar1.url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Libros,
});

const lecturas = [
  { file: "DiscoursesOnKriyaYoga.pdf", label: "DISCURSOS SOBRE KRIYA YOGA (Inglés)" },
  { file: "EquanimousYogaPhilosophy.pdf", label: "EQUANIMOUS YOGA PHILOSOPHY (Inglés)" },
];

const portadas = [
  { src: palpitar1.url, alt: "Un Palpitar de Eternidad, portada" },
  { src: palpitar2.url, alt: "Un Palpitar de Eternidad, contraportada" },
  { src: esencia1.url, alt: "La Esencia de la Yoga, portada" },
  { src: esencia2.url, alt: "La Esencia de la Yoga, contraportada" },
];

function Libros() {
  return (
    <div className="section-x py-16 md:py-24">
      <h1 className="text-center font-display text-4xl text-foreground md:text-5xl">LIBROS</h1>

      <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
        Para adquirir los libros <b className="text-foreground">Un Palpitar de Eternidad</b> y{" "}
        <b className="text-foreground">La Esencia de la Yoga</b>, contactar a Wilder Guzmán{" "}
        <a href="tel:+573192137474" className="text-primary hover:underline">
          +57 319 2137474
        </a>
        .
      </p>

      <div className="mx-auto mt-12 grid max-w-4xl gap-7 sm:grid-cols-2 lg:grid-cols-4 [perspective:1400px]">
        {portadas.map((p) => (
          <img
            key={p.alt}
            src={p.src}
            alt={p.alt}
            className="image-depth w-full transition-transform duration-500 odd:[transform:perspective(1100px)_rotateY(3deg)] even:[transform:perspective(1100px)_rotateY(-3deg)] hover:[transform:perspective(1100px)_rotateY(0deg)_translateY(-8px)]"
          />
        ))}
      </div>

      <section className="mx-auto mt-16 max-w-2xl">
        <h2 className="font-display text-2xl text-primary">
          Seleccione el libro para leer
        </h2>
        <ul className="mt-4 divide-y divide-border rounded-lg border border-aqua/30 bg-card/85 backdrop-blur-xl">
          {lecturas.map((l) => (
            <li key={l.file}>
              <a
                href={`https://hariharanandakriya.org/libros/${encodeURIComponent(l.file)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
              >
                <BookOpen className="h-4 w-4 shrink-0 text-primary" />
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
