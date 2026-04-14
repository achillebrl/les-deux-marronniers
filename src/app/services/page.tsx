import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services | Les Deux Marronniers",
  description:
    "Pension canine et élevage professionnel à Saint-Maximin dans l'Oise, à 30 minutes de l'aéroport Roissy Charles de Gaulle. Cairn Terrier & Berger Belge Malinois.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen" style={{ background: "#f7f3ec" }}>
      <Navigation activePage="/services" />

      {/* ── PAGE HERO ── */}
      <section
        className="pt-40 pb-24 px-6 text-center relative overflow-hidden"
        style={{ background: "#ede7d9" }}
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%235a8a3c' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <p
            className="mb-4 tracking-[0.35em] uppercase text-xs"
            style={{ color: "#5a8a3c", fontFamily: "var(--font-cormorant)" }}
          >
            Ce que nous proposons
          </p>
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
              color: "#2c1f0e",
              lineHeight: 1.1,
              fontWeight: 700,
            }}
          >
            Nos Services
          </h1>
          <div
            className="mx-auto mt-6 mb-8"
            style={{ width: "4rem", height: "2px", background: "#5a8a3c" }}
          />
          <p
            style={{
              fontFamily: "var(--font-lora)",
              fontSize: "1rem",
              color: "#4a3520",
              lineHeight: 1.9,
              maxWidth: "36rem",
              margin: "0 auto",
            }}
          >
            Situés en lisière de la forêt de Chantilly, nous accueillons votre compagnon avec soin, chaleur et attention, dans un cadre naturel exceptionnel à 30 minutes de Roissy CDG.
          </p>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="py-24 px-6" style={{ background: "#f7f3ec" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Pension Canine */}
          <div
            className="flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(90,138,60,0.15)",
            }}
          >
            <div
              className="px-10 pt-10 pb-4"
              style={{ borderTop: "4px solid #5a8a3c" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                style={{
                  background: "rgba(90,138,60,0.1)",
                  border: "1px solid rgba(90,138,60,0.25)",
                }}
              >
                <span className="text-2xl">🐾</span>
              </div>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.8rem",
                  color: "#2c1f0e",
                  fontWeight: 700,
                }}
              >
                Pension Canine
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-lora)",
                  fontSize: "0.95rem",
                  color: "#4a3520",
                  lineHeight: 1.85,
                }}
              >
                Hébergement individuel avec nid douillet personnel, accès à un parc
                d'activités, suivi personnalisé, alimentation de qualité et accueil
                des objets personnels de votre animal. Chaque séjour est adapté au
                tempérament de votre chien.
              </p>
            </div>

            <ul className="px-10 py-6 flex-grow space-y-3">
              {[
                "Logement individuel sécurisé",
                "Promenades en lisière de forêt",
                "Doudous & objets personnels acceptés",
                "Alimentation soignée et adaptée",
                "Ouvert 7j/7 toute l'année",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm"
                  style={{
                    fontFamily: "var(--font-lora)",
                    color: "#6b5840",
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: "#5a8a3c", marginTop: "2px", flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="px-10 pb-10">
              <a
                href="https://les-deux-marronniers.fr/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block w-full text-center"
              >
                <span>Réserver une place</span>
              </a>
            </div>
          </div>

          {/* Élevage Canin */}
          <div
            className="flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(139,105,20,0.15)",
            }}
          >
            <div
              className="px-10 pt-10 pb-4"
              style={{ borderTop: "4px solid #8B6914" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                style={{
                  background: "rgba(139,105,20,0.1)",
                  border: "1px solid rgba(139,105,20,0.25)",
                }}
              >
                <span className="text-2xl">🐕</span>
              </div>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.8rem",
                  color: "#2c1f0e",
                  fontWeight: 700,
                }}
              >
                Élevage Canin
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-lora)",
                  fontSize: "0.95rem",
                  color: "#4a3520",
                  lineHeight: 1.85,
                }}
              >
                Élevage professionnel et familial de Cairn Terrier et de Berger Belge
                Malinois. Chaque chiot grandit dans un environnement bienveillant,
                stimulant et ancré dans la nature, socialisé dès le plus jeune âge.
              </p>
            </div>

            <ul className="px-10 py-6 flex-grow space-y-3">
              {[
                "Cairn Terrier",
                "Berger Belge Malinois",
                "Élevage familial et attentionné",
                "Socialisation dès le plus jeune âge",
                "Suivi vétérinaire rigoureux",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm"
                  style={{
                    fontFamily: "var(--font-lora)",
                    color: "#6b5840",
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: "#8B6914", marginTop: "2px", flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="px-10 pb-10">
              <a
                href="https://les-deux-marronniers.fr/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-block w-full text-center"
                style={{ borderColor: "rgba(139,105,20,0.5)", color: "#8B6914" }}
              >
                <span>Nous contacter</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TARIFS INFO ── */}
      <section className="py-20 px-6" style={{ background: "#ede7d9" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="mb-3 tracking-[0.35em] uppercase text-xs"
            style={{ color: "#5a8a3c", fontFamily: "var(--font-cormorant)" }}
          >
            Informations pratiques
          </p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              color: "#2c1f0e",
              lineHeight: 1.15,
              fontWeight: 700,
            }}
          >
            Tarifs & Règlement
          </h2>
          <p
            className="mb-10 max-w-xl mx-auto"
            style={{
              fontFamily: "var(--font-lora)",
              fontSize: "0.97rem",
              color: "#4a3520",
              lineHeight: 1.85,
            }}
          >
            Consultez notre règlement intérieur et nos tarifs pour préparer au mieux le séjour de votre compagnon. Pour toute question ou disponibilité, n'hésitez pas à nous appeler directement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://les-deux-marronniers.fr/pension/reglement-interieur/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              <span>Voir les tarifs</span>
            </a>
            <a
              href="tel:0647281828"
              className="btn-outline inline-block"
              style={{ borderColor: "rgba(44,31,14,0.3)", color: "#2c1f0e" }}
            >
              <span>06 47 28 18 28</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section
        className="py-24 px-6 text-center relative overflow-hidden"
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
            className="mb-4 tracking-[0.35em] uppercase text-xs"
            style={{
              color: "rgba(247,243,236,0.65)",
              fontFamily: "var(--font-cormorant)",
            }}
          >
            Partir en toute sérénité
          </p>
          <h2
            className="mb-6 text-white"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
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
            className="mb-10"
            style={{
              fontFamily: "var(--font-lora)",
              fontSize: "1rem",
              color: "rgba(247,243,236,0.8)",
              lineHeight: 1.8,
            }}
          >
            Contactez-nous pour vérifier les disponibilités et organiser le séjour idéal pour votre compagnon à Saint-Maximin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              href="mailto:contact@les-deux-marronniers.fr"
              className="btn-outline inline-block"
              style={{
                borderColor: "rgba(247,243,236,0.4)",
                color: "rgba(247,243,236,0.85)",
              }}
            >
              <span>contact@les-deux-marronniers.fr</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
