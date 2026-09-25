export default function Confidentialite() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <h1 className="font-display text-3xl font-semibold text-ink md:text-4xl">
        Politique de confidentialité
      </h1>
      <p className="mt-2 font-body text-sm text-muted">
        Dernière mise à jour : [DATE]
      </p>

      <div className="mt-8 space-y-8 font-body text-base leading-relaxed text-ink">
        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            1. Qui collecte vos données
          </h2>
          <p className="mt-2 text-muted">
            Panier Perdu, édité par [RAISON SOCIALE / NOM ET PRÉNOM], SIRET
            [NUMÉRO SIRET], est responsable du traitement des données
            décrites ci-dessous.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            2. Données collectées
          </h2>
          <p className="mt-2 text-muted">
            Nous collectons : votre adresse email et vos informations de
            paiement (traitées directement par Stripe, jamais stockées par
            nos soins), ainsi que les données des paniers abandonnés de
            votre boutique nécessaires à l&apos;envoi des relances (nom,
            email, contenu du panier de vos clients).
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            3. Finalité du traitement
          </h2>
          <p className="mt-2 text-muted">
            Ces données sont utilisées uniquement pour fournir le service :
            créer votre compte, gérer votre abonnement, et envoyer les
            relances de panier abandonné en votre nom.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            4. Sous-traitants
          </h2>
          <p className="mt-2 text-muted">
            Nous faisons appel à Stripe (paiement), Supabase (hébergement de
            base de données) et Vercel (hébergement du site), qui peuvent
            traiter des données en dehors de l&apos;Union européenne dans le
            cadre de garanties contractuelles appropriées.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            5. Durée de conservation
          </h2>
          <p className="mt-2 text-muted">
            Vos données sont conservées pendant la durée de votre abonnement,
            puis supprimées dans un délai de 12 mois après résiliation, sauf
            obligation légale contraire.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            6. Vos droits
          </h2>
          <p className="mt-2 text-muted">
            Conformément au RGPD, vous disposez d&apos;un droit
            d&apos;accès, de rectification, d&apos;effacement et de
            portabilité de vos données. Pour l&apos;exercer, contactez-nous à
            [ADRESSE EMAIL DE CONTACT].
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            7. Mesure d&apos;audience
          </h2>
          <p className="mt-2 text-muted">
            Nous utilisons Vercel Analytics, un outil de mesure d&apos;audience
            qui ne dépose aucun cookie et ne collecte aucune donnée
            personnelle identifiable, dispensé de consentement préalable.
          </p>
        </section>
      </div>
    </main>
  );
}
