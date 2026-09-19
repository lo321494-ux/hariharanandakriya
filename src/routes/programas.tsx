import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Sunrise, Users2, Mountain } from "lucide-react";

import { PageHero, SectionHeading } from "@/components/section";
import comunidadImg from "@/assets/comunidad.jpg";

export const Route = createFileRoute("/programas")({
  head: () => ({
    meta: [
      { title: "Programas e iniciación | Fundación Hariharananda Kriya Yoga" },
      {
        name: "description",
        content:
          "Meditaciones grupales, charlas introductorias, retiros e iniciación al Kriya Yoga con instructores autorizados del linaje de Paramahamsa Hariharananda.",
      },
      { property: "og:title", content: "Programas e iniciación al Kriya Yoga" },
      {
        property: "og:description",
        content:
          "Meditaciones grupales, charlas introductorias, retiros e iniciación con instructores autorizados.",
      },
    ],
  }),
  component: Programas,
});

const programas = [
  {
    icon: Sunrise,
    titulo: "Charla introductoria",
    para: "Para quien se acerca por primera vez",
    texto:
      "Una sesión abierta y gratuita donde se explica qué es el Kriya Yoga, cómo se practica y qué implica la iniciación. Incluye una meditación guiada sencilla.",
  },
  {
    icon: Users2,
    titulo: "Meditación grupal",
    para: "Para practicantes iniciados y visitantes",
    texto:
      "Encuentros regulares, presenciales y en línea, para sostener la práctica en compañía y resolver dudas con un instructor del linaje.",
  },
  {
    icon: BookOpen,
    titulo: "Seminario de iniciación",
    para: "Para quien decide comenzar el camino",
    texto:
      "Programa de varios días donde se reciben personalmente las técnicas del primer Kriya, junto con el estudio de las escrituras y la guía para la práctica diaria.",
  },
  {
    icon: Mountain,
    titulo: "Retiro de profundización",
    para: "Para quienes ya practican",
    texto:
      "Jornadas de silencio, meditación prolongada y estudio, en las que se reciben niveles superiores de la práctica según la preparación de cada discípulo.",
  },
];

function Programas() {
  return (
    <>
      <PageHero
        eyebrow="Programas"
        title="Encuentros, retiros e iniciación"
        intro="Todos nuestros programas están abiertos a cualquier persona sincera, sin distinción de origen, edad o creencia. No se requiere experiencia previa."
      />

      <section className="section-x py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          {programas.map(({ icon: Icon, titulo, para, texto }) => (
            <article
              key={titulo}
              className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h2 className="mt-5 font-display text-2xl text-foreground">{titulo}</h2>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-primary">{para}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{texto}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 rounded-xl border border-dashed border-border bg-secondary/50 p-6 text-sm leading-relaxed text-muted-foreground">
          Las fechas y lugares se confirman a lo largo del año. Escríbenos y te
          informaremos del próximo encuentro en tu ciudad o en línea.
        </p>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="section-x grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={comunidadImg}
              alt="Personas meditando juntas"
              loading="lazy"
              width={1280}
              height={960}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">La iniciación</p>
            <h2 className="mt-5 text-balance-title text-3xl leading-tight md:text-4xl">
              Cómo se recibe el Kriya
            </h2>
            <ol className="mt-8 space-y-6">
              {[
                ["Acércate", "Asiste a una charla introductoria o escríbenos para conversar."],
                ["Prepárate", "Recibirás orientación sobre la actitud, el estudio y la disciplina previos."],
                ["Recibe la iniciación", "Un instructor autorizado transmite personalmente las técnicas."],
                ["Practica y acompáñate", "Continúas con práctica diaria y encuentros regulares de apoyo."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-5">
                  <span className="font-display text-3xl text-primary/60">{i + 1}</span>
                  <span>
                    <span className="block font-display text-xl">{t}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-foreground/70">
                      {d}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
            <Link
              to="/contacto"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Solicitar información <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-x py-20 md:py-24">
        <SectionHeading
          eyebrow="Estudio"
          title="Publicaciones del linaje en español"
          intro="La Fundación traduce y difunde libros y materiales de estudio de Paramahamsa Hariharananda y Paramahamsa Prajnanananda, disponibles en nuestra biblioteca digital."
        />
        <a
          href="https://fundacionhariharanandakriyayoga.publica.la/library"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
        >
          Visitar la biblioteca digital <ArrowRight className="h-4 w-4" />
        </a>
      </section>
    </>
  );
}
