export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <h1 className="font-display text-3xl font-semibold text-ink md:text-4xl">
        Mentions légales
      </h1>

      <div className="mt-8 space-y-8 font-body text-base leading-relaxed text-ink">
        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            Éditeur du site
          </h2>
          <p className="mt-2 text-muted">
            Le site Panier Perdu est édité par [RAISON SOCIALE / NOM ET PRÉNOM],
            [STATUT JURIDIQUE, ex : auto-entrepreneur], immatriculé sous le
            numéro SIRET [NUMÉRO SIRET], dont le siège est situé au [ADRESSE
            COMPLÈTE].
          </p>
          <p className="mt-2 text-muted">
            Numéro de TVA intracommunautaire : [SI APPLICABLE]
            <br />
            Contact : [ADRESSE EMAIL DE CONTACT]
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            Directeur de la publication
          </h2>
          <p className="mt-2 text-muted">[NOM ET PRÉNOM]</p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            Hébergement
          </h2>
          <p className="mt-2 text-muted">
            Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
            Covina, CA 91723, États-Unis.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            Propriété intellectuelle
          </h2>
          <p className="mt-2 text-muted">
            L&apos;ensemble des contenus présents sur ce site (textes, visuels,
            logo) est la propriété de Panier Perdu, sauf mention contraire, et
            ne peut être reproduit sans autorisation préalable.
          </p>
        </section>
      </div>
    </main>
  );
}
