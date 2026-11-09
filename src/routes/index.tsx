import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Clapperboard,
  Megaphone,
  MessageCircle,
  ScrollText,
  Smartphone,
  Swords,
  Eye,
  Skull,
  Globe2,
  Play,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/whatsapp";

import avatarSrc from "@/assets/canal/avatar.jpg";
const avatar = { url: avatarSrc };
import bannerSrc from "@/assets/canal/banner.jpg";
const banner = { url: bannerSrc };
import haitiSrc from "@/assets/canal/57fUw5IFxuE.jpg";
const haiti = { url: haitiSrc };
import templariosSrc from "@/assets/canal/ru8HMddAOZA.jpg";
const templarios = { url: templariosSrc };
import halconazoSrc from "@/assets/canal/9ZaQF3LNKLA.jpg";
const halconazo = { url: halconazoSrc };
import chacoSrc from "@/assets/canal/xoED92S2Jus.jpg";
const chaco = { url: chacoSrc };
import simoSrc from "@/assets/canal/Qpscp32bhe8.jpg";
const simo = { url: simoSrc };
import hastingsSrc from "@/assets/canal/Yu18rhLVVec.jpg";
const hastings = { url: hastingsSrc };
import indianapolisSrc from "@/assets/canal/J2NOTAL_k0U.jpg";
const indianapolis = { url: indianapolisSrc };
import panchoVillaSrc from "@/assets/canal/9_xSQx48dtw.jpg";
const panchoVilla = { url: panchoVillaSrc };
import chernobilSrc from "@/assets/canal/cVHI5F-iOj4.jpg";
const chernobil = { url: chernobilSrc };
import ejercicioSrc from "@/assets/canal/sIQwwWMFFbo.jpg";
const ejercicio = { url: ejercicioSrc };
import paperclipSrc from "@/assets/canal/PMiUUwWn8vE.jpg";
const paperclip = { url: paperclipSrc };
import halconNegroSrc from "@/assets/canal/halcon_negro.jpg";
const halconNegro = { url: halconNegroSrc };

const CHANNEL_URL = "https://www.youtube.com/@regandolahistoria";
const yt = (id: string) => `https://www.youtube.com/watch?v=${id}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Regando la Historia | Patrocinios y colaboraciones en YouTube" },
      {
        name: "description",
        content:
          "Lleva tu marca a Regando la Historia: guerras, conspiraciones y crímenes que cambiaron el mundo. Cotiza tu colaboración por WhatsApp.",
      },
      {
        property: "og:title",
        content: "Regando la Historia | Patrocinios y colaboraciones",
      },
      {
        property: "og:description",
        content:
          "Canal de historia en YouTube con 211 videos. Menciones, videos dedicados y Shorts para tu marca.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "5", label: "años en YouTube" },
  { value: "211", label: "videos publicados" },
  { value: "1,420", label: "suscriptores" },
  { value: "99.9%", label: "visto en promedio en el último Short" },
];

const pillars = [
  {
    icon: Swords,
    title: "Guerras y batallas",
    text: "De Hastings a Stalingrado, del Chaco a Vietnam: los choques que movieron fronteras.",
    image: hastings.url,
  },
  {
    icon: Eye,
    title: "Historia oculta",
    text: "Operación Ajax, Paperclip, los Templarios: lo que pasó detrás de la versión oficial.",
    image: paperclip.url,
  },
  {
    icon: Skull,
    title: "Crímenes y masacres",
    text: "El Halconazo, las Bananeras, la Dalia Negra: casos que la memoria no debe soltar.",
    image: halconazo.url,
  },
  {
    icon: Globe2,
    title: "Actualidad con contexto",
    text: "Haití, Gaza, El Salvador: el presente explicado desde sus raíces históricas.",
    image: haiti.url,
  },
];

const videos = [
  {
    id: "xoED92S2Jus",
    title: "La Guerra del Chaco: Bolivia vs Paraguay",
    views: "7.5 K",
    image: chaco.url,
  },
  {
    id: "ru8HMddAOZA",
    title: "La caída de los Templarios y el Viernes 13",
    views: "1.3 K",
    image: templarios.url,
  },
  {
    id: "9ZaQF3LNKLA",
    title: "El Halconazo: la masacre que el gobierno intentó ocultar",
    views: "1 K",
    image: halconazo.url,
  },
  {
    id: "Qpscp32bhe8",
    title: "Simo Häyhä: el granjero que se convirtió en la Muerte Blanca",
    views: "526",
    image: simo.url,
  },
  {
    id: "Yu18rhLVVec",
    title: "La Batalla de Hastings",
    views: "510",
    image: hastings.url,
  },
  {
    id: "PMiUUwWn8vE",
    title: "Operación Paperclip: genios, traidores, héroes y villanos",
    views: "484",
    image: paperclip.url,
  },
  {
    id: "sIQwwWMFFbo",
    title: "El ejercicio que casi desata la Tercera Guerra Mundial",
    views: "465",
    image: ejercicio.url,
  },
  {
    id: "-mWHQrylLs0",
    title: "La caída del Halcón Negro, Mogadiscio",
    views: "349",
    image: halconNegro.url,
  },
];

const offers = [
  {
    icon: Megaphone,
    title: "Mención patrocinada",
    text: "Tu marca presentada con la voz del canal dentro de un video largo, frente a quien ya está enganchado con la historia.",
  },
  {
    icon: Clapperboard,
    title: "Video dedicado",
    text: "Un episodio completo alrededor de un tema ligado a tu marca, tu ciudad o tu industria, con la narrativa de documental del canal.",
  },
  {
    icon: Smartphone,
    title: "Shorts patrocinados",
    text: "Historias de menos de un minuto, verticales y directas, ideales para dar a conocer un producto o una promoción.",
  },
  {
    icon: ScrollText,
    title: "Contenido a la medida",
    text: "Investigación y guion de historia para museos, escuelas, municipios o marcas que quieren contar su propio pasado.",
  },
];

const steps = [
  {
    n: "01",
    title: "Escríbenos por WhatsApp",
    text: "Cuéntanos qué quieres dar a conocer y a quién quieres llegar.",
  },
  {
    n: "02",
    title: "Elegimos la historia",
    text: "Proponemos el tema, el formato y el momento ideal para tu marca.",
  },
  {
    n: "03",
    title: "Se publica en el canal",
    text: "Tu colaboración sale al aire y te compartimos cómo le fue.",
  },
];

function WhatsAppButton({
  label = "Cotiza por WhatsApp",
  message,
  size = "xl",
}: {
  label?: string;
  message?: string;
  size?: "xl" | "lg" | "default" | "sm";
}) {
  return (
    <Button asChild variant="whatsapp" size={size}>
      <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="size-5" />
        {label}
      </a>
    </Button>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src={avatar.url}
              alt="Logo de Regando la Historia: un búho con casco"
              className="size-10 rounded-full border border-primary/40 object-cover"
            />
            <span className="font-display text-lg text-primary">Regando la Historia</span>
          </a>
          <nav className="hidden items-center gap-7 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex">
            <a href="#contenido" className="transition-colors hover:text-primary">
              Contenido
            </a>
            <a href="#videos" className="transition-colors hover:text-primary">
              Videos
            </a>
            <a href="#colaborar" className="transition-colors hover:text-primary">
              Colaborar
            </a>
          </nav>
          <WhatsAppButton label="Contactar" size="default" />
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="inicio" className="grain relative">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 md:pt-24 lg:grid-cols-[1.1fr_1fr]">
            <div className="animate-rise">
              <p className="eyebrow mb-6">Canal de YouTube · Historia sin maquillaje</p>
              <h1 className="font-display text-5xl text-foreground sm:text-6xl lg:text-7xl">
                La historia que <span className="text-accent">no te contaron</span>,{" "}
                <span className="text-primary">regada a fondo.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Guerras, conspiraciones, crímenes y conflictos que cambiaron el mundo, contados
                con investigación y ritmo de documental. Pon tu marca frente a una audiencia
                hispanohablante que vive la historia.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <WhatsAppButton />
                <Button asChild variant="archive" size="xl">
                  <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                    <Play className="size-4" />
                    Ver el canal
                  </a>
                </Button>
              </div>
            </div>

            {/* Thumbnail stack */}
            <div className="relative mx-auto h-[340px] w-full max-w-[520px] sm:h-[420px]">
              <a
                href={yt("xoED92S2Jus")}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-0 top-0 w-[72%] -rotate-6 overflow-hidden rounded-sm shadow-print transition-transform duration-500 hover:-rotate-3 hover:scale-105"
              >
                <img src={chaco.url} alt="Miniatura: La Guerra del Chaco" className="w-full" />
              </a>
              <a
                href={yt("ru8HMddAOZA")}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-0 top-[22%] w-[72%] rotate-3 overflow-hidden rounded-sm shadow-print transition-transform duration-500 hover:rotate-1 hover:scale-105"
              >
                <img
                  src={templarios.url}
                  alt="Miniatura: La caída de los Templarios"
                  className="w-full"
                />
              </a>
              <a
                href={yt("9ZaQF3LNKLA")}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 left-[8%] w-[72%] -rotate-1 overflow-hidden rounded-sm shadow-print transition-transform duration-500 hover:scale-105"
              >
                <img src={halconazo.url} alt="Miniatura: El Halconazo" className="w-full" />
              </a>
              <div className="absolute -right-2 -top-4 rotate-12 rounded-full border-2 border-accent bg-background px-4 py-2 font-mono text-xs uppercase tracking-widest text-accent">
                +7.5 K vistas
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-border bg-card/60">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-border px-5 md:grid-cols-4 md:divide-x">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-8 text-center">
                <div className="font-display text-4xl text-primary md:text-5xl">{s.value}</div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Banner strip */}
        <section aria-hidden="true" className="relative">
          <img src={banner.url} alt="" className="h-40 w-full object-cover opacity-80 md:h-56" />
          <div className="absolute inset-x-0 bottom-0 h-20 fade-down" />
        </section>

        {/* Pillars */}
        <section id="contenido" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Lo que contamos</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Cuatro caminos para <span className="text-primary">regar la historia</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Cada video une investigación, contexto y una buena historia. Así se ve el contenido
              en el que aparecería tu marca.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {pillars.map((p) => (
              <article
                key={p.title}
                className="group relative min-h-[300px] overflow-hidden rounded-sm border border-border"
              >
                <img
                  src={p.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-35 blur-[1px] transition duration-700 group-hover:scale-105 group-hover:opacity-50"
                />
                <div className="absolute inset-0 image-veil" />
                <div className="relative flex h-full min-h-[300px] flex-col justify-end p-7">
                  <p.icon className="mb-3 size-7 text-primary" />
                  <h3 className="font-display text-3xl">{p.title}</h3>
                  <p className="mt-2 max-w-md text-foreground/85">{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Videos */}
        <section id="videos" className="scroll-mt-20 border-t border-border bg-card/40 py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Del archivo del canal</p>
                <h2 className="mt-4 font-display text-4xl md:text-5xl">Videos destacados</h2>
              </div>
              <Button asChild variant="archive" size="lg">
                <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                  Ver los 211 videos <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
            <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {videos.map((v) => (
                <a
                  key={v.id}
                  href={yt(v.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-sm shadow-print">
                    <img
                      src={v.image}
                      alt={`Miniatura: ${v.title}`}
                      loading="lazy"
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-background/0 transition-colors group-hover:bg-background/40">
                      <Play className="size-10 fill-primary text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  </div>
                  <h3 className="mt-4 font-semibold leading-snug transition-colors group-hover:text-primary">
                    {v.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {v.views} vistas
                  </p>
                </a>
              ))}
            </div>
            <div className="mt-14 grid grid-cols-3 gap-3 opacity-60 sm:grid-cols-6">
              {[indianapolis, panchoVilla, chernobil, simo, haiti, halconNegro].map((img) => (
                <img
                  key={img.url}
                  src={img.url}
                  alt=""
                  loading="lazy"
                  className="aspect-video w-full rounded-sm object-cover grayscale transition hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Offers */}
        <section id="colaborar" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="eyebrow">Para marcas y negocios</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                Tu marca, <span className="text-accent">dentro</span> de la historia
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Elige el formato que mejor le queda a tu negocio. Cada colaboración se arma a la
                medida y se cotiza directamente por WhatsApp.
              </p>
              <div className="mt-8">
                <WhatsAppButton
                  label="Quiero cotizar"
                  message="Hola, quiero cotizar una colaboración con Regando la Historia."
                />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {offers.map((o) => (
                <a
                  key={o.title}
                  href={whatsappUrl(
                    `Hola, me interesa la opción "${o.title}" en Regando la Historia. ¿Me pueden dar más información?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-sm border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/60"
                >
                  <o.icon className="size-8 text-primary" />
                  <h3 className="mt-5 font-display text-2xl">{o.title}</h3>
                  <p className="mt-3 flex-1 text-muted-foreground">{o.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-whatsapp">
                    <MessageCircle className="size-4" /> Preguntar por esta opción
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="border-y border-border bg-card/40">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n}>
                <div className="font-display text-6xl text-primary/30">{s.n}</div>
                <div className="rule-ochre my-4 w-24" />
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="grain relative overflow-hidden">
          <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-28 text-center">
            <img
              src={avatar.url}
              alt="Búho de Regando la Historia"
              className="size-28 rounded-full border-2 border-primary object-cover shadow-glow"
            />
            <h2 className="mt-8 font-display text-4xl md:text-6xl">
              ¿Hablamos de <span className="text-primary">tu historia</span>?
            </h2>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Escríbenos y te respondemos personalmente por WhatsApp para armar tu colaboración.
            </p>
            <div className="mt-9">
              <WhatsAppButton label={`Escribir al ${WHATSAPP_DISPLAY}`} />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 pb-28 pt-8 text-sm text-muted-foreground md:flex-row md:pb-8 md:pr-28">
          <p>© {new Date().getFullYear()} Regando la Historia</p>
          <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              YouTube
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-whatsapp"
            >
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex size-16 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground animate-whatsapp-pulse transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="size-8" />
      </a>
    </div>
  );
}
