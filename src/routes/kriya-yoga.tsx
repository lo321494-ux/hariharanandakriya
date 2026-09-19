import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero, SectionHeading } from "@/components/section";
import practicaImg from "@/assets/practica.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/kriya-yoga")({
  head: () => ({
    meta: [
      { title: "¿Qué es el Kriya Yoga? | Fundación Hariharananda Kriya Yoga" },
      {
        name: "description",
        content:
          "El Kriya Yoga es una ciencia ancestral de meditación basada en la respiración consciente, transmitida de maestro a discípulo en el linaje de Paramahamsa Hariharananda.",
      },
      { property: "og:title", content: "¿Qué es el Kriya Yoga?" },
      {
        property: "og:description",
        content:
          "Una ciencia ancestral de meditación basada en la respiración consciente y la transmisión viva del linaje.",
      },
    ],
  }),
  component: KriyaYoga,
});

const etapas = [
  {
    n: "01",
    t: "Purificación",
    d: "La respiración consciente calma el sistema nervioso y purifica cuerpo y mente de la agitación acumulada.",
  },
  {
    n: "02",
    t: "Concentración",
    d: "La atención se recoge en los centros sutiles de la columna, conquistando gradualmente la dispersión.",
  },
  {
    n: "03",
    t: "Percepción",
    d: "Se perciben las tres cualidades divinas: luz, vibración y sonido, en la meditación y en la vida diaria.",
  },
  {
    n: "04",
    t: "Realización",
    d: "El ego, las emociones y los apegos se disuelven en la certeza de que la esencia de la vida es pura y pacífica.",
  },
];

const faqs = [
  {
    q: "¿Necesito tener experiencia previa en yoga o meditación?",
    a: "No. El Kriya Yoga se enseña desde el comienzo, paso a paso. Muchas personas llegan sin ninguna práctica previa y reciben el acompañamiento necesario.",
  },
  {
    q: "¿Debo pertenecer a alguna religión?",
    a: "No. El Kriya Yoga es anterior a toda religión y no es sectario. Personas de toda tradición o de ninguna lo practican sin conflicto con sus creencias.",
  },
  {
    q: "¿Cuánto tiempo requiere la práctica diaria?",
    a: "La práctica inicial puede realizarse en aproximadamente media hora al día, mañana y noche, y se profundiza con el tiempo según la constancia de cada quien.",
  },
  {
    q: "¿Por qué las técnicas no se enseñan por escrito?",
    a: "Porque forman parte de una tradición oral. La iniciación es una transmisión personal entre el instructor autorizado y el discípulo, y así se ha preservado por generaciones.",
  },
  {
    q: "¿Tiene algún costo?",
    a: "La Fundación es una entidad sin ánimo de lucro. Los programas se sostienen con aportes voluntarios; nadie queda fuera por razones económicas.",
  },
];

function KriyaYoga() {
  return (
    <>
      <PageHero
        eyebrow="La enseñanza"
        title="El Kriya Yoga: la ciencia del cultivo del alma"
        intro="Un proceso científico y no sectario de práctica espiritual, enraizado en el Ashtanga Yoga del Yoga Sutra de Patáñjali, mediante el cual el alma individual se une con el Alma Suprema."
      />

      <section className="section-x py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div className="space-y-6 text-base leading-relaxed text-foreground/85">
            <p className="font-display text-2xl leading-snug text-foreground md:text-3xl">
              «Cada acción <em>kri</em> es realizada por <em>ya</em>, el alma que habita en
              el interior.»
            </p>
            <p>
              El Kriya Yoga es un camino de vida y de meditación ancestral que cultiva el
              cuerpo, la mente, el intelecto y la conciencia del alma a través del control
              de la respiración, la concentración y la postura. Introducido en Occidente
              por Paramahamsa Yogananda y más tarde por Paramahamsa Hariharananda, nos
              ayuda a percibir las tres cualidades divinas —luz, vibración y sonido— tanto
              en la meditación como en el día a día.
            </p>
            <p>
              El señor de los sentidos es la mente, y el señor de la mente es la
              respiración. Por eso el Kriya Yoga se funda en el principio de la respiración
              corta: cuando el aliento se vuelve calmo y silencioso, la mente se aquieta y
              la percepción del alma se hace evidente.
            </p>
            <p>
              Su práctica permite conquistar de forma gradual el ego, las emociones y los
              apegos, hasta llegar a la realización de que la esencia de la vida es pura,
              divina y pacífica. Es una disciplina espiritual universal que trasciende
              todas las fronteras y divisiones culturales.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img
              src={practicaImg}
              alt="Manos en mudra durante la meditación"
              loading="lazy"
              width={1280}
              height={960}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="section-x py-20 md:py-28">
          <SectionHeading
            eyebrow="El proceso"
            title="Cuatro movimientos de una misma práctica"
            intro="No son niveles que se superan y se dejan atrás, sino profundidades que se revelan con la constancia."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {etapas.map((e) => (
              <div key={e.n} className="rounded-2xl border border-border bg-card p-7">
                <span className="font-display text-4xl text-primary/40">{e.n}</span>
                <h3 className="mt-4 text-xl text-foreground">{e.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-x py-20 md:py-28">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Antes de comenzar" />
        <Accordion type="single" collapsible className="mt-10 max-w-3xl">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left font-display text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Link
          to="/programas"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Ver programas e iniciación <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
