import { createFileRoute, Link } from "@tanstack/react-router";
import parampara from "@/assets/parampara.jpg.asset.json";
import liaGuru from "@/assets/lia-guru.jpg.asset.json";
import foto2 from "@/assets/foto2.jpg.asset.json";
import { ArrowRight, BookOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kriya Yoga, un camino para todos | Fundación Hariharananda Kriya Yoga" },
      {
        name: "description",
        content:
          "Kriya Yoga es un sistema que conduce progresivamente a estados de relajación profunda del cuerpo y la mente, donde la concentración aparece espontáneamente. Fundación Hariharananda Kriya Yoga (FHKY), Envigado, Colombia.",
      },
      { property: "og:title", content: "Kriya Yoga, un camino para todos | FHKY" },
      {
        property: "og:description",
        content:
          "El Kriya Yoga es el método más apropiado para el hombre del siglo XXI. Cualquier persona mayor de 12 años puede recibir iniciación.",
      },
      { property: "og:image", content: parampara.url },
      { name: "twitter:image", content: parampara.url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Inicio,
});

function Inicio() {
  return (
    <div className="home-page">
      <section className="relative min-h-[calc(100svh-4.5rem)] overflow-hidden bg-ink text-ink-foreground md:min-h-[calc(100svh-6rem)]">
        <img
          src={parampara.url}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-aqua/10 via-ink/55 to-ink" />
        <div className="absolute -right-24 top-20 h-[38rem] w-[38rem] rounded-full border border-gold/30 shadow-[0_0_120px_oklch(0.72_0.15_181/0.22),inset_0_0_100px_oklch(0.8_0.15_79/0.12)]" aria-hidden="true" />
        <div className="section-x relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-end pb-16 pt-32 md:min-h-[calc(100svh-6rem)] md:pb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Fundación Hariharananda Kriya Yoga</p>
          <h1 className="mt-5 max-w-4xl text-balance-title font-display text-5xl leading-[0.95] sm:text-6xl md:text-8xl">
            Kriya Yoga
          </h1>
          <p className="mt-3 font-display text-2xl italic text-gold md:text-4xl">Un camino para todos</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/75 md:text-lg">
            El Kriya Yoga es el método más apropiado para el hombre del siglo XXI.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7 shadow-lg shadow-primary/30">
              <Link to="/kriya-yoga">Conocer Kriya Yoga <ArrowRight /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-ink-foreground/25 bg-ink/25 text-ink-foreground backdrop-blur-md hover:bg-ink-foreground/10 hover:text-ink-foreground">
              <Link to="/contacto">Contacto</Link>
            </Button>
          </div>
          <div className="mt-12 flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-ink-foreground/50">
            <span className="h-px w-12 bg-gold/60" /> Meditación espontánea
          </div>
        </div>
      </section>

      <section className="border-b border-aqua/20 bg-gradient-to-r from-sand/90 via-aqua-soft/40 to-sand/90 backdrop-blur-sm">
        <div className="section-x py-10 text-center md:py-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">El linaje</p>
          <img
            src={parampara.url}
            alt="Parampara: linaje de maestros de Kriya Yoga"
            className="image-depth mt-6 w-full"
          />
        </div>
      </section>

      <article className="section-x py-16 md:py-24">
        <header className="text-center">
          <h1 className="font-display text-4xl text-foreground md:text-5xl">KRIYA YOGA</h1>
          <p className="mt-3 text-balance-title font-display text-2xl italic text-primary">
            UN CAMINO PARA TODOS
          </p>
        </header>

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            En general, hay muchos caminos que buscan ir más allá de las limitaciones de la
            mente y experimentar la naturaleza del propio ser. En casi todos estos sistemas,
            el objetivo principal está en la concentración. Tratan de retirar la consciencia
            de los objetos exteriores y llevarla a los reinos interiores de la mente, a
            través de la concentración.
          </p>
          <p>
            Los grandes maestros han proclamado que los seres humanos tienen en sí mismos un
            enorme potencial, que los hace capaces de experimentar diferentes planos de la
            consciencia. Sin embargo, una gran parte de la humanidad vive en un plano
            inferior de existencia, sin ni siquiera darse cuenta de otros planos superiores.
            El resultado es una vida infeliz e insatisfecha; ignorando que solo un destello
            de una esfera superior de consciencia aleja toda infelicidad y descontento.
          </p>

          <figure className="float-none my-8 md:float-left md:mr-8 md:w-2/5">
            <img
              src={liaGuru.url}
              alt="Yogacharya Lía Cristina Upegui con su Gurú"
               className="image-depth w-full"
            />
          </figure>

          <p>
            Pero este no es un proceso fácil. La mente, por naturaleza se mueve todo el
            tiempo. Cualquier intento de controlarla directa y forzadamente resulta en una
            reacción chocante. El resultado es tensión y frustración.
          </p>
          <p>
            Cuando la mente es incapaz de relajarse, proyecta corrientes de pensamientos a la
            mente consciente y estos dificultan la concentración en muchas personas. Cuanto
            más lo intentan, más se tensionan. Por eso es necesario un sistema que
            progresivamente conduzca a la persona a estados de relajación profunda del cuerpo
            y la mente, <b className="text-foreground">donde la concentración aparece
            espontáneamente</b>. Este sistema es llamado KRIYA YOGA.
          </p>
          <p>
            En el KRIYA YOGA se le da más atención a la consciencia. Esto es, atención
            consciente de los pensamientos u objetos. No se hace ningún intento directo de
            dirigir la concentración. Se induce la consciencia a hacer ciertos movimientos
            internos. Nunca hay un intento de suprimir los pensamientos; simplemente se
            acepta que surjan y desaparezcan; la persona es solo testigo.
          </p>
          <p>
            Dado que el KRIYA YOGA no presupone concentración, ni siquiera el retiro de la
            conciencia del entorno exterior, es el sistema más conveniente para el hombre
            moderno. Se adapta completamente al estilo de vida de un hombre extrovertido.
            Practique KRIYA YOGA —sin temor o inseguridad— y encontrará todo lo que estaba
            buscando.
          </p>

          <figure className="float-none my-8 md:float-right md:ml-8 md:w-2/5">
            <img
              src={foto2.url}
              alt="Práctica de Kriya Yoga"
               className="image-depth w-full"
            />
          </figure>

          <p>
            Uno de los muchos significados para Kriya es actividad o movimiento. Es el
            movimiento de la consciencia. Otro significado de Kriya es práctica o preliminar;
            en ese sentido es la práctica preliminar que lleva a la autorealización. El KRIYA
            YOGA no se opone directamente a las fluctuaciones mentales, aunque logra ese
            objetivo. De esta manera, sus facultades mentales se armonizan y florecen en todo
            su potencial.
          </p>
          <p>
            El KRIYA YOGA es el método más apropiado para el hombre del siglo XXI. Sin forzar
            nada, el Kriya yoga domestica la mente y se convierte en una herramienta perfecta
            para la <b className="text-foreground">meditación espontánea</b>. Para un Kriya
            yogui no se necesita esfuerzo mental para eliminar la tensión y los problemas. La
            práctica regular del KRIYA YOGA es lo único necesario y, en el curso del tiempo,
            se alcanza una mente cristalina, sin preocupaciones.
          </p>
          <p>
            <b className="text-foreground">Cualquier persona</b> mayor de 12 años,
            independientemente de su condición, podrá recibir iniciación en esta maravillosa
            técnica. Todos pueden practicar KRIYA YOGA, sin importar los hábitos
            alimentarios, la posición social, el nivel de educación, la religión o cualquier
            otra situación. Todo lo que se requiere es una mente lista para aceptar la
            práctica sincera y querer <b className="text-foreground">ser feliz</b>.
          </p>
        </div>
        <nav className="mx-auto mt-16 grid max-w-3xl gap-3 sm:grid-cols-2" aria-label="Continuar explorando">
          <Button asChild variant="outline" size="lg" className="h-auto justify-start rounded-md px-5 py-4">
            <Link to="/documentos"><FileText /> Documentos de la Fundación</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-auto justify-start rounded-md px-5 py-4">
            <Link to="/libros"><BookOpen /> Libros de Kriya Yoga</Link>
          </Button>
        </nav>
      </article>
    </div>
  );
}
