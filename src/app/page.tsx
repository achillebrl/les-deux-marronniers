import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import GalleryCarousel from "@/components/GalleryCarousel";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <ScrollAnimator />
      <Navigation activePage="/" />

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <Image
          src="/assets/hero.jpg"
          alt="Les Deux Marronniers — Pension Canine en lisière de forêt de Chantilly"
          fill
          priority
          className="object-cover object-center"
          style={{ filter: "brightness(0.60) saturate(1.1)" }}
        />

        {/* Gradient vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(44,31,14,0.30) 0%, rgba(44,31,14,0.05) 45%, rgba(44,31,14,0.75) 100%)",
          }}
        />

        {/* Decorative corner brackets */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t border-l opacity-40" style={{ borderColor: "#f7f3ec" }} />
        <div className="absolute top-8 right-8 w-16 h-16 border-t border-r opacity-40" style={{ borderColor: "#f7f3ec" }} />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l opacity-40" style={{ borderColor: "#f7f3ec" }} />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r opacity-40" style={{ borderColor: "#f7f3ec" }} />

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p
            className="hero-sub mb-4 tracking-[0.35em] uppercase text-xs font-light"
            style={{ color: "#7ab354", fontFamily: "var(--font-cormorant)" }}
          >
            Saint-Maximin, Oise · Forêt de Chantilly
          </p>

          <h1
            className="hero-title text-white mb-6"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              lineHeight: 1.05,
              fontWeight: 700,
              textShadow: "0 2px 40px rgba(0,0,0,0.35)",
            }}
          >
            Les Deux<br />
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>Marronniers</em>
          </h1>

          <div className="hero-sub flex items-center gap-4 mb-8">
            <div className="h-px w-12 opacity-50" style={{ background: "#7ab354" }} />
            <p
              className="text-white/90 tracking-wide"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              Pension Canine & Élevage Professionnel
            </p>
            <div className="h-px w-12 opacity-50" style={{ background: "#7ab354" }} />
          </div>

          <p
            className="hero-sub text-white/75 mb-12 max-w-lg"
            style={{
              fontFamily: "var(--font-lora)",
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              lineHeight: 1.8,
            }}
          >
            À 30 minutes de Roissy Charles de Gaulle, un cadre d'exception en lisière de forêt pour le bien-être de votre compagnon.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4">
            <a
              href="https://les-deux-marronniers.fr/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Réserver une place</span>
            </a>
            <a
              href="tel:0647281828"
              className="btn-outline"
              style={{ borderColor: "rgba(247,243,236,0.5)", color: "#f7f3ec" }}
            >
              <span>06 47 28 18 28</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <div
            className="w-px h-12"
            style={{
              background: "linear-gradient(to bottom, transparent, #f7f3ec)",
            }}
          />
          <p
            className="text-white/60 text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Découvrir
          </p>
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className="overflow-hidden py-4" style={{ background: "#5a8a3c" }}>
        <style>{`
          @keyframes marqueeScroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marqueeScroll 30s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="marquee-track">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="flex items-center"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#f7f3ec",
                fontSize: "0.85rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              <span className="mx-8">Pension Canine</span>
              <span className="mx-2 opacity-40">✦</span>
              <span className="mx-8">Élevage Cairn Terrier</span>
              <span className="mx-2 opacity-40">✦</span>
              <span className="mx-8">Berger Belge Malinois</span>
              <span className="mx-2 opacity-40">✦</span>
              <span className="mx-8">Forêt de Chantilly</span>
              <span className="mx-2 opacity-40">✦</span>
              <span className="mx-8">30 min de Roissy CDG</span>
              <span className="mx-2 opacity-40">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── USP PILLARS ── */}
      <section className="py-24 px-6" style={{ background: "#f7f3ec" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "✈️",
                title: "30 min de Roissy",
                desc: "À deux pas de l'aéroport Charles de Gaulle pour votre tranquillité d'esprit.",
                delay: "delay-100",
              },
              {
                icon: "🌲",
                title: "Lisière de forêt",
                desc: "Un cadre naturel exceptionnel en bordure de la forêt de Chantilly.",
                delay: "delay-200",
              },
              {
                icon: "🏡",
                title: "Nid douillet individuel",
                desc: "Chaque chien dispose de son espace personnel avec accès direct au parc.",
                delay: "delay-300",
              },
              {
                icon: "🐾",
                title: "Suivi personnalisé",
                desc: "Une attention adaptée à chaque tempérament, timide ou très actif.",
                delay: "delay-400",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-animate
                className={`${item.delay} text-center p-8 rounded-xl`}
                style={{
                  background: "rgba(255,255,255,0.6)",
                  border: "1px solid rgba(90,138,60,0.15)",
                  boxShadow: "0 2px 16px rgba(44,31,14,0.05)",
                }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.1rem",
                    color: "#2c1f0e",
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm"
                  style={{
                    color: "#6b5840",
                    fontFamily: "var(--font-lora)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        className="py-28 px-6 relative overflow-hidden"
        style={{ background: "#ede7d9" }}
      >
        <div
          className="absolute right-0 top-0 w-72 h-72 opacity-5 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #5a8a3c, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div data-animate="left" className="relative">
              <div
                className="relative overflow-hidden rounded-3xl"
                style={{ aspectRatio: "4/5" }}
              >
                <Image
                  src="/assets/about.jpg"
                  alt="Les Deux Marronniers — Cadre naturel en lisière de forêt"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full flex flex-col items-center justify-center text-center shadow-xl"
                style={{ background: "#5a8a3c", color: "#f7f3ec" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    opacity: 0.8,
                  }}
                >
                  depuis
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.6rem",
                    fontWeight: 700,
                  }}
                >
                  2007
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    opacity: 0.8,
                  }}
                >
                  à vos côtés
                </span>
              </div>
            </div>

            {/* Text */}
            <div>
              <p
                data-animate="right"
                className="delay-100 mb-3 tracking-[0.3em] uppercase text-xs"
                style={{ color: "#5a8a3c", fontFamily: "var(--font-cormorant)" }}
              >
                Notre histoire
              </p>
              <h2
                data-animate="right"
                className="delay-200 mb-8"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                  color: "#2c1f0e",
                  lineHeight: 1.15,
                  fontWeight: 700,
                }}
              >
                Un refuge naturel<br />
                <em style={{ fontWeight: 400, fontStyle: "italic", color: "#5a8a3c" }}>
                  pour votre compagnon
                </em>
              </h2>

              <p
                data-animate="right"
                className="delay-300 mb-6"
                style={{
                  color: "#4a3520",
                  fontFamily: "var(--font-lora)",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                }}
              >
                Bienvenue à l'Élevage & Pension Canine Les Deux Marronniers. Situés à
                Saint-Maximin dans l'Oise, à seulement 30 minutes de Roissy Charles de
                Gaulle, nous offrons un cadre exceptionnel en lisière de la forêt de
                Chantilly.
              </p>
              <p
                data-animate="right"
                className="delay-400 mb-10"
                style={{
                  color: "#4a3520",
                  fontFamily: "var(--font-lora)",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                }}
              >
                Chaque chien dispose d'un nid douillet personnel avec accès direct à un
                parc plein d'activités. Les doudous et objets personnels sont autorisés.
                Nous proposons également un élevage professionnel et familial de Cairn
                Terrier et de Berger Belge Malinois.
              </p>

              <div data-animate="right" className="delay-500 flex items-center gap-6 flex-wrap">
                <Link href="/services" className="btn-primary">
                  <span>Nos services</span>
                </Link>
                <a
                  href="https://www.facebook.com/Les-Deux-Marronniers-234193270246130/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors duration-200 hover:opacity-70"
                  style={{
                    color: "#5a8a3c",
                    fontFamily: "var(--font-cormorant)",
                    letterSpacing: "0.05em",
                    fontSize: "1rem",
                  }}
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Suivre sur Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section
        className="py-28 px-6 relative overflow-hidden"
        style={{ background: "#2c1f0e" }}
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%235a8a3c' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-20">
            <p
              data-animate="fade"
              className="mb-3 tracking-[0.35em] uppercase text-xs"
              style={{ color: "#7ab354", fontFamily: "var(--font-cormorant)" }}
            >
              Ce que nous offrons
            </p>
            <h2
              data-animate="fade"
              className="delay-200"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2.2rem, 4vw, 3rem)",
                color: "#f7f3ec",
                lineHeight: 1.15,
                fontWeight: 700,
              }}
            >
              Nos Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pension Canine */}
            <div
              data-animate="left"
              className="relative overflow-hidden rounded-2xl p-10"
              style={{
                background: "rgba(247,243,236,0.04)",
                border: "1px solid rgba(247,243,236,0.1)",
              }}
            >
              <div
                className="absolute top-0 left-0 w-1 h-full"
                style={{ background: "#5a8a3c" }}
              />
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-8"
                style={{
                  background: "rgba(90,138,60,0.15)",
                  border: "1px solid rgba(90,138,60,0.3)",
                }}
              >
                <span className="text-xl">🏡</span>
              </div>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.8rem",
                  color: "#f7f3ec",
                  fontWeight: 600,
                }}
              >
                Pension Canine
              </h3>
              <p
                className="mb-8"
                style={{
                  color: "rgba(247,243,236,0.65)",
                  fontFamily: "var(--font-lora)",
                  fontSize: "0.95rem",
                  lineHeight: 1.85,
                }}
              >
                Hébergement individuel avec nid douillet personnel, accès à un parc
                d'activités, suivi personnalisé, alimentation de qualité, accueil des
                objets personnels de l'animal.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Nid douillet individuel",
                  "Parc d'activités privatif",
                  "Doudous & objets acceptés",
                  "Alimentation soignée",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm"
                    style={{
                      color: "rgba(247,243,236,0.7)",
                      fontFamily: "var(--font-lora)",
                    }}
                  >
                    <span style={{ color: "#7ab354" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://les-deux-marronniers.fr/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-block"
                style={{ borderColor: "rgba(90,138,60,0.5)", color: "#7ab354" }}
              >
                <span>Réserver</span>
              </a>
            </div>

            {/* Élevage */}
            <div
              data-animate="right"
              className="relative overflow-hidden rounded-2xl p-10"
              style={{
                background: "rgba(247,243,236,0.04)",
                border: "1px solid rgba(247,243,236,0.1)",
              }}
            >
              <div
                className="absolute top-0 left-0 w-1 h-full"
                style={{ background: "#8B6914" }}
              />
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-8"
                style={{
                  background: "rgba(139,105,20,0.15)",
                  border: "1px solid rgba(139,105,20,0.3)",
                }}
              >
                <span className="text-xl">🐕</span>
              </div>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.8rem",
                  color: "#f7f3ec",
                  fontWeight: 600,
                }}
              >
                Élevage Canin
              </h3>
              <p
                className="mb-8"
                style={{
                  color: "rgba(247,243,236,0.65)",
                  fontFamily: "var(--font-lora)",
                  fontSize: "0.95rem",
                  lineHeight: 1.85,
                }}
              >
                Élevage professionnel et familial dans un cadre naturel exceptionnel.
                Nos chiots sont élevés avec soin et amour, socialisés dès le plus jeune
                âge pour s'épanouir dans leur future famille.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Cairn Terrier",
                  "Berger Belge Malinois",
                  "Élevage familial & professionnel",
                  "Suivi vétérinaire complet",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm"
                    style={{
                      color: "rgba(247,243,236,0.7)",
                      fontFamily: "var(--font-lora)",
                    }}
                  >
                    <span style={{ color: "#c9983a" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://les-deux-marronniers.fr/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-block"
                style={{ borderColor: "rgba(139,105,20,0.5)", color: "#c9983a" }}
              >
                <span>Nous contacter</span>
              </a>
            </div>
          </div>

          <div className="text-center mt-14">
            <Link href="/services" className="btn-primary inline-block">
              <span>Voir tous nos services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section
        className="py-28 px-6 overflow-hidden"
        style={{ background: "#f7f3ec" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p
                data-animate="fade"
                className="mb-3 tracking-[0.35em] uppercase text-xs"
                style={{ color: "#5a8a3c", fontFamily: "var(--font-cormorant)" }}
              >
                La vie ici
              </p>
              <h2
                data-animate
                className="delay-200"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(2.2rem, 4vw, 3rem)",
                  color: "#2c1f0e",
                  lineHeight: 1.15,
                  fontWeight: 700,
                }}
              >
                Un cadre<br />
                <em style={{ fontWeight: 400, fontStyle: "italic", color: "#5a8a3c" }}>
                  inoubliable
                </em>
              </h2>
            </div>
            <p
              data-animate="right"
              className="max-w-sm text-sm"
              style={{
                color: "#6b5840",
                fontFamily: "var(--font-lora)",
                lineHeight: 1.8,
              }}
            >
              En lisière de la forêt de Chantilly, nos pensionnaires profitent
              d'espaces de vie généreux et d'un environnement naturel apaisant.
            </p>
          </div>
        </div>

        <div data-animate="scale" className="delay-200 max-w-7xl mx-auto">
          <GalleryCarousel />
        </div>
      </section>

      {/* ── LOCATION STRIP ── */}
      <section
        className="py-20 px-6"
        style={{ background: "#e8f0e2" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                label: "Adresse",
                value: "4 Route de Gouvieux\n60740 Saint-Maximin",
                icon: "📍",
                delay: "delay-100",
              },
              {
                label: "Téléphone",
                value: "06 47 28 18 28",
                href: "tel:0647281828",
                icon: "📞",
                delay: "delay-200",
              },
              {
                label: "Email",
                value: "contact@les-deux-marronniers.fr",
                href: "mailto:contact@les-deux-marronniers.fr",
                icon: "✉️",
                delay: "delay-300",
              },
            ].map((item, i) => (
              <div key={i} data-animate className={item.delay}>
                <div className="text-2xl mb-3">{item.icon}</div>
                <p
                  className="mb-2 tracking-[0.2em] uppercase text-xs"
                  style={{ color: "#5a8a3c", fontFamily: "var(--font-cormorant)" }}
                >
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="transition-colors duration-200 hover:underline break-all"
                    style={{
                      color: "#2c1f0e",
                      fontFamily: "var(--font-lora)",
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p
                    style={{
                      color: "#2c1f0e",
                      fontFamily: "var(--font-lora)",
                      fontSize: "0.95rem",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-28 px-6 text-center relative overflow-hidden"
        style={{ background: "#5a8a3c" }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%23f7f3ec' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='25' fill='none' stroke='%23f7f3ec' stroke-width='0.5'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-2xl mx-auto">
          <p
            data-animate="fade"
            className="mb-4 tracking-[0.35em] uppercase text-xs"
            style={{
              color: "rgba(247,243,236,0.65)",
              fontFamily: "var(--font-cormorant)",
            }}
          >
            Partir en toute sérénité
          </p>
          <h2
            data-animate
            className="delay-200 mb-6 text-white"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              lineHeight: 1.15,
              fontWeight: 700,
            }}
          >
            Votre chien mérite<br />
            <em style={{ fontWeight: 400, fontStyle: "italic" }}>
              le meilleur des séjours
            </em>
          </h2>
          <p
            data-animate
            className="delay-300 mb-10"
            style={{
              fontFamily: "var(--font-lora)",
              lineHeight: 1.8,
              fontSize: "1rem",
              color: "rgba(247,243,236,0.8)",
            }}
          >
            Contactez-nous pour vérifier les disponibilités et organiser le séjour
            idéal pour votre compagnon.
          </p>
          <div
            data-animate
            className="delay-400 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://les-deux-marronniers.fr/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-block"
              style={{ borderColor: "#f7f3ec", color: "#f7f3ec" }}
            >
              <span>Prendre contact</span>
            </a>
            <a
              href="tel:0647281828"
              className="btn-outline inline-block"
              style={{
                borderColor: "rgba(247,243,236,0.4)",
                color: "rgba(247,243,236,0.8)",
              }}
            >
              <span>06 47 28 18 28</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
