import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, HeartHandshake, Sparkles, Wind } from "lucide-react";

import heroImg from "@/assets/hero-meditacion.jpg";
import practicaImg from "@/assets/practica.jpg";
import comunidadImg from "@/assets/comunidad.jpg";
import { SectionHeading } from "@/components/section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fundación Hariharananda Kriya Yoga | Meditación y Kriya Yoga" },
      {
        name: "description",
        content:
          "Fundación sin ánimo de lucro dedicada a la enseñanza del Kriya Yoga en el linaje de Paramahamsa Hariharananda: meditación, retiros, iniciación y servicio.",
      },
      { property: "og:title", content: "Fundación Hariharananda Kriya Yoga" },
      {
        property: "og:description",
        content:
          "Meditación, enseñanza y servicio en el linaje de Paramahamsa Hariharananda.",
      },
    ],
  }),
  component: Index,
});

const pilares = [
  {
    icon: Wind,
    title: "La respiración gobierna la mente",
    text: "El Kriya Yoga se funda en la respiración consciente: cuando el aliento se calma, la mente se aquieta y el alma se revela.",
  },
  {
    icon: Flame,
    title: "Transmisión viva",
    text: "Las técnicas no se aprenden de un libro. Se reciben en la iniciación, de manera personal, de un maestro autorizado por el linaje.",
  },
  {
    icon: Sparkles,
    title: "Una ciencia universal",
    text: "Anterior a toda religión y abierta a toda persona: una disciplina que trasciende fronteras, culturas y creencias.",
  },
  {
    icon: HeartHandshake,
    title: "Servicio desinteresado",
    text: "La meditación florece en acción: educación, obras de caridad y acompañamiento humano como parte del camino.",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[88vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Amanecer sobre un lago con una figura en meditación"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-br from-black/75 via-black/45 to-black/70"
        />
        <div className="section-x flex min-h-[88vh] flex-col justify-center py-24 text-white">
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">
            Fundación Hariharananda Kriya Yoga
          </p>
          <h1 className="mt-6 max-w-4xl text-balance-title text-4xl leading-[1.08] sm:text-5xl md:text-7xl">
            La ciencia del cultivo del alma
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Una escuela y una comunidad para buscadores sinceros. Aprende a meditar bajo
            la guía viva del linaje de Mahavatar Babaji, transmitido de maestro a
            discípulo hasta Paramahamsa Hariharananda y Paramahamsa Prajnanananda.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/programas"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Ver programas e iniciación <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/kriya-yoga"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              ¿Qué es el Kriya Yoga?
            </Link>
          </div>
          <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/20 pt-8 md:grid-cols-4">
            {[
              ["300+", "centros en el mundo"],
              ["35", "países"],
              ["1917", "linaje vivo desde"],
              ["600", "niños en el Balashram"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl text-white md:text-4xl">{n}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-white/60">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* MANTRA */}
      <section className="bg-sand">
        <div className="section-x py-16 text-center md:py-20">
          <p className="font-display text-2xl leading-relaxed text-foreground md:text-4xl">
            तपःस्वाध्यायेश्वरप्रणिधानानि क्रियायोगः
          </p>
          <p className="mt-4 text-sm italic text-muted-foreground md:text-base">
            Tapaḥ svādhyāya īśvarapraṇidhānāni kriyā yogaḥ
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            «La disciplina serena de cada respiración, el estudio del propio ser y la
            entrega amorosa a lo Divino: eso es Kriya Yoga.» — Yoga Sutra de Patáñjali II.1
          </p>
        </div>
      </section>

      {/* PILARES */}
      <section className="section-x py-20 md:py-28">
        <SectionHeading
          eyebrow="Nuestro fundamento"
          title="Un camino práctico, científico y no sectario"
          intro="El Kriya Yoga es un método ancestral de meditación que cultiva el cuerpo, la mente, el intelecto y la conciencia del alma mediante el control de la respiración, la concentración y la postura."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl leading-snug text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PRACTICA */}
      <section className="bg-secondary/60">
        <div className="section-x grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={practicaImg}
              alt="Manos en mudra junto a una lámpara encendida"
              loading="lazy"
              width={1280}
              height={960}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="La práctica"
              title="Meditación que se integra a la vida diaria"
              intro="El Kriya Yoga no aparta de la vida: la ordena. Es practicado por madres y padres de familia, estudiantes y profesionales que buscan claridad, salud y sentido."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Técnicas de respiración y concentración recibidas personalmente en la iniciación.",
                "Práctica diaria breve y sostenible, adaptable a cualquier horario.",
                "Acompañamiento continuo de instructores autorizados del linaje.",
                "Estudio de las escrituras: Bhagavad Gita, Yoga Sutra y enseñanzas del Guru.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/kriya-yoga"
              className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              Conocer la enseñanza <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* COMUNIDAD */}
      <section className="section-x py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <SectionHeading
              eyebrow="Comunidad"
              title="Nadie camina solo"
              intro="La Fundación reúne a practicantes de toda Colombia y América Latina en meditaciones grupales, retiros y encuentros abiertos a quien desee acercarse por primera vez."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Meditaciones grupales", "Encuentros regulares presenciales y en línea."],
                ["Retiros", "Jornadas de silencio, estudio y práctica intensiva."],
                ["Charlas abiertas", "Introducción gratuita para nuevos buscadores."],
                ["Publicaciones", "Libros y material de estudio del linaje en español."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-xl border border-border bg-card p-5">
                  <p className="font-display text-lg text-foreground">{t}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 overflow-hidden rounded-3xl md:order-2">
            <img
              src={comunidadImg}
              alt="Grupo de personas meditando en un salón luminoso"
              loading="lazy"
              width={1280}
              height={960}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-ink-foreground">
        <div className="section-x py-20 text-center md:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Da el primer paso</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-balance-title text-3xl leading-tight md:text-5xl">
            Cada respiración es una ofrenda. Comienza hoy.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/70">
            Escríbenos para conocer las próximas fechas de iniciación, meditaciones
            grupales y retiros. No se requiere experiencia previa.
          </p>
          <Link
            to="/contacto"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Quiero recibir información <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
