export default function Home() {
  return (
    <main className="min-h-screen bg-paper pb-24 md:pb-0">
      {/* HERO */}
      <section className="mx-auto max-w-5xl px-5 pt-10 md:pt-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="font-body text-sm font-medium text-burnt">
              Pour les boutiques Shopify et WooCommerce
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-ink md:text-5xl">
              Vos clients partent sans payer. On les fait revenir.
            </h1>
            <p className="mt-5 max-w-md font-body text-lg leading-relaxed text-muted">
              Chaque panier rempli puis abandonné est une vente perdue.
              Panier Perdu relance vos clients à votre place, avec deux
              messages écrits pour donner envie de finaliser — sans
              rien faire de plus après l&apos;installation.
            </p>

            <div className="mt-8 hidden md:block">
              <a
                href="#tarif"
                className="inline-flex items-center justify-center rounded-sm bg-burnt px-7 py-4 font-body text-base font-semibold text-paper transition-colors hover:bg-ink"
              >
                Récupérer mes premières ventes
              </a>
              <p className="mt-3 font-body text-sm text-muted">
                29€/mois. Sans engagement. Installation en 10 minutes.
              </p>
            </div>
          </div>

          {/* Visuel : ticket déchiré */}
          <div className="mx-auto w-full max-w-xs md:max-w-sm">
            <ReceiptCard />
          </div>
        </div>
      </section>

      {/* CHIFFRE */}
      <section className="mx-auto mt-16 max-w-5xl px-5 md:mt-24">
        <div className="border-t border-ink/10 pt-8">
          <p className="font-display text-3xl font-semibold text-ink md:text-4xl">
            7 paniers sur 10 sont abandonnés
          </p>
          <p className="mt-2 max-w-lg font-body text-base text-muted">
            C&apos;est la moyenne du e-commerce. Sur une petite boutique qui
            fait 40 commandes par mois, ça veut dire une centaine de ventes
            qui s&apos;évaporent chaque année — sans qu&apos;un seul email de
            relance ne parte.
          </p>
        </div>
      </section>

      {/* BÉNÉFICES */}
      <section className="mx-auto mt-16 max-w-5xl px-5 md:mt-24">
        <div className="grid gap-10 md:grid-cols-3">
          <Benefit
            title="Deux relances, écrites pour vous"
            text="Un premier message quelques heures après l'abandon, un second avec un code de réduction si besoin. Le texte est prêt, personnalisé au nom du client et à son panier."
          />
          <Benefit
            title="Installation sans développeur"
            text="Vous branchez votre boutique Shopify ou WooCommerce en quelques clics. Aucune ligne de code, aucun technicien à payer."
          />
          <Benefit
            title="Le chiffre d'affaires récupéré, sous vos yeux"
            text="Un seul écran affiche combien vos relances ont rapporté, en euros. Vous savez exactement ce que l'outil vous rapporte."
          />
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="tarif" className="mx-auto mt-20 max-w-5xl px-5 md:mt-28">
        <div className="rounded-sm bg-ink px-6 py-12 md:px-14 md:py-16">
          <p className="font-display text-3xl font-semibold text-paper md:text-4xl">
            29€ par mois. Relances illimitées.
          </p>
          <p className="mt-3 max-w-md font-body text-base text-paper/70">
            Pas de frais d&apos;installation, pas d&apos;engagement. Vous
            arrêtez quand vous voulez.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center rounded-sm bg-amber px-7 py-4 font-body text-base font-semibold text-ink transition-colors hover:bg-paper"
          >
            Récupérer mes premières ventes
          </a>
        </div>
      </section>

      {/* CTA mobile fixe, atteignable au pouce */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-ink/10 bg-paper/95 px-5 py-3 backdrop-blur md:hidden">
        <a
          href="#tarif"
          className="flex w-full items-center justify-center rounded-sm bg-burnt px-6 py-4 font-body text-base font-semibold text-paper"
        >
          Récupérer mes ventes — 29€/mois
        </a>
      </div>
    </main>
  );
}

function Benefit({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="font-display text-xl font-semibold text-ink">
        {title}
      </h3>
      <p className="mt-2 font-body text-base leading-relaxed text-muted">
        {text}
      </p>
    </div>
  );
}

function ReceiptCard() {
  return (
    <svg
      viewBox="0 0 320 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full drop-shadow-sm"
      role="img"
      aria-label="Ticket de caisse d'un panier abandonné, avec les articles restés impayés"
    >
      <path
        d="M20 0 H300 V360 L285 372 L270 358 L255 372 L240 358 L225 372 L210 358 L195 372 L180 358 L165 372 L150 358 L135 372 L120 358 L105 372 L90 358 L75 372 L60 358 L45 372 L30 358 L20 372 Z"
        fill="#14203A"
      />
      <text
        x="160"
        y="45"
        textAnchor="middle"
        fill="#FAFAF8"
        fontFamily="var(--font-plex), sans-serif"
        fontSize="13"
        letterSpacing="1.5"
      >
        PANIER ABANDONNÉ
      </text>
      <line x1="40" y1="65" x2="280" y2="65" stroke="#FAFAF8" strokeOpacity="0.25" />

      {[
        ["Veste en laine", "89,00 €"],
        ["Ceinture cuir", "34,00 €"],
        ["Écharpe", "22,00 €"],
      ].map(([label, price], i) => (
        <g key={label} transform={`translate(0 ${95 + i * 34})`}>
          <text
            x="40"
            y="0"
            fill="#FAFAF8"
            fontFamily="var(--font-plex), sans-serif"
            fontSize="14"
          >
            {label}
          </text>
          <text
            x="280"
            y="0"
            textAnchor="end"
            fill="#FAFAF8"
            fontFamily="var(--font-plex), sans-serif"
            fontSize="14"
          >
            {price}
          </text>
          <line
            x1="38"
            y1="-5"
            x2="150"
            y2="-5"
            stroke="#C1521A"
            strokeWidth="1.5"
          />
        </g>
      ))}

      <line x1="40" y1="215" x2="280" y2="215" stroke="#FAFAF8" strokeOpacity="0.25" />
      <text
        x="40"
        y="245"
        fill="#E8A33D"
        fontFamily="var(--font-plex), sans-serif"
        fontSize="15"
        fontWeight="600"
      >
        Total non encaissé
      </text>
      <text
        x="280"
        y="245"
        textAnchor="end"
        fill="#E8A33D"
        fontFamily="var(--font-plex), sans-serif"
        fontSize="18"
        fontWeight="600"
      >
        145,00 €
      </text>

      <text
        x="40"
        y="290"
        fill="#FAFAF8"
        fillOpacity="0.55"
        fontFamily="var(--font-plex), sans-serif"
        fontSize="12"
      >
        Client parti il y a 3 heures.
      </text>
      <text
        x="40"
        y="310"
        fill="#FAFAF8"
        fillOpacity="0.55"
        fontFamily="var(--font-plex), sans-serif"
        fontSize="12"
      >
        Sans relance, il ne reviendra pas.
      </text>
    </svg>
  );
}
