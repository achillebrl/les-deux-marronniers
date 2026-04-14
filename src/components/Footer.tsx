import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="pt-20 pb-10 px-6"
      style={{ background: "#1a110a", borderTop: "1px solid rgba(90,138,60,0.15)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3
              className="mb-2"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1.4rem",
                color: "#f7f3ec",
                fontWeight: 700,
              }}
            >
              Les Deux Marronniers
            </h3>
            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "0.75rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#7ab354",
              }}
            >
              Pension Canine & Élevage
            </p>
            <p
              style={{
                fontFamily: "var(--font-lora)",
                fontSize: "0.88rem",
                color: "rgba(247,243,236,0.45)",
                lineHeight: 1.8,
              }}
            >
              Un cadre naturel exceptionnel en lisière de la forêt de Chantilly pour le bien-être de votre compagnon.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "0.75rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#7ab354",
              }}
            >
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/services", label: "Services" },
                { href: "https://les-deux-marronniers.fr/contact/", label: "Contact", external: true },
                { href: "https://les-deux-marronniers.fr/pension/reglement-interieur/", label: "Nos tarifs", external: true },
                { href: "https://les-deux-marronniers.fr/pension/activites/", label: "Les activités", external: true },
              ].map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-green-400"
                    style={{
                      fontFamily: "var(--font-lora)",
                      fontSize: "0.88rem",
                      color: "rgba(247,243,236,0.45)",
                    }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors duration-200 hover:text-green-400"
                    style={{
                      fontFamily: "var(--font-lora)",
                      fontSize: "0.88rem",
                      color: "rgba(247,243,236,0.45)",
                    }}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "0.75rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#7ab354",
              }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p
                  className="mb-1"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(90,138,60,0.7)" }}
                >
                  Adresse
                </p>
                <p style={{ fontFamily: "var(--font-lora)", fontSize: "0.88rem", color: "rgba(247,243,236,0.45)", lineHeight: 1.6 }}>
                  4 Route de Gouvieux<br />60740 Saint-Maximin
                </p>
              </div>
              <div>
                <p
                  className="mb-1"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(90,138,60,0.7)" }}
                >
                  Téléphone
                </p>
                <a
                  href="tel:0647281828"
                  className="hover:text-green-400 transition-colors duration-200"
                  style={{ fontFamily: "var(--font-lora)", fontSize: "0.88rem", color: "rgba(247,243,236,0.45)" }}
                >
                  06 47 28 18 28
                </a>
              </div>
              <div>
                <p
                  className="mb-1"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(90,138,60,0.7)" }}
                >
                  Email
                </p>
                <a
                  href="mailto:contact@les-deux-marronniers.fr"
                  className="hover:text-green-400 transition-colors duration-200 break-all"
                  style={{ fontFamily: "var(--font-lora)", fontSize: "0.82rem", color: "rgba(247,243,236,0.45)" }}
                >
                  contact@les-deux-marronniers.fr
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/Les-Deux-Marronniers-234193270246130/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-green-400"
                  style={{ fontFamily: "var(--font-lora)", fontSize: "0.82rem", color: "rgba(247,243,236,0.45)" }}
                >
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(247,243,236,0.06)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "0.75rem",
              color: "rgba(247,243,236,0.2)",
              letterSpacing: "0.05em",
            }}
          >
            © {new Date().getFullYear()} Les Deux Marronniers — Tous droits réservés
          </p>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "0.75rem",
              color: "rgba(247,243,236,0.15)",
              letterSpacing: "0.05em",
            }}
          >
            Saint-Maximin, Oise · Forêt de Chantilly
          </p>
        </div>
      </div>
    </footer>
  );
}