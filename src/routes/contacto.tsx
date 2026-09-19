import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

import { PageHero } from "@/components/section";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Fundación Hariharananda Kriya Yoga" },
      {
        name: "description",
        content:
          "Escríbenos para conocer las próximas meditaciones, retiros y fechas de iniciación al Kriya Yoga. Envigado, Antioquia, Colombia.",
      },
      { property: "og:title", content: "Contacta a la Fundación Hariharananda Kriya Yoga" },
      {
        property: "og:description",
        content:
          "Consulta por meditaciones grupales, retiros e iniciación al Kriya Yoga.",
      },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Gracias por escribirnos", {
        description: "Hemos recibido tu mensaje y te responderemos muy pronto.",
      });
      form.reset();
    }, 600);
  }


  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Estamos para acompañarte"
        intro="Cuéntanos qué te trae al Kriya Yoga. Te informaremos sobre las próximas meditaciones grupales, charlas, retiros y fechas de iniciación."
      />

      <section className="section-x grid gap-14 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 md:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre completo</Label>
              <Input id="nombre" name="nombre" required placeholder="Tu nombre" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ciudad">Ciudad</Label>
              <Input id="ciudad" name="ciudad" placeholder="Medellín, Bogotá…" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" name="email" type="email" required placeholder="tucorreo@ejemplo.com" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="mensaje">Tu mensaje</Label>
              <Textarea
                id="mensaje"
                name="mensaje"
                required
                rows={6}
                placeholder="Cuéntanos tu interés o tu pregunta…"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={sending}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {sending ? "Enviando…" : "Enviar mensaje"} <Send className="h-4 w-4" />
          </button>
          <p className="mt-4 text-xs text-muted-foreground">
            Tus datos se usan únicamente para responderte. No compartimos información con
            terceros.
          </p>
        </form>

        <aside className="space-y-8">
          <div className="rounded-3xl bg-sand p-8">
            <h2 className="font-display text-2xl text-foreground">Datos de contacto</h2>
            <ul className="mt-6 space-y-5 text-sm text-foreground/85">
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
            </ul>
          </div>
          <div className="rounded-3xl border border-border p-8">
            <h2 className="font-display text-2xl text-foreground">¿Es tu primera vez?</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              No necesitas preparación ni conocimientos previos. Escríbenos y te
              invitaremos a la próxima charla introductoria, que es abierta y gratuita.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
