export default function CGV() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <h1 className="font-display text-3xl font-semibold text-ink md:text-4xl">
        Conditions générales de vente
      </h1>
      <p className="mt-2 font-body text-sm text-muted">
        Dernière mise à jour : [DATE]
      </p>

      <div className="mt-8 space-y-8 font-body text-base leading-relaxed text-ink">
        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            1. Objet
          </h2>
          <p className="mt-2 text-muted">
            Les présentes conditions générales de vente régissent l&apos;accès
            et l&apos;utilisation du service Panier Perdu, édité par
            [RAISON SOCIALE / NOM ET PRÉNOM], SIRET [NUMÉRO SIRET].
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            2. Description du service
          </h2>
          <p className="mt-2 text-muted">
            Panier Perdu est un service en ligne permettant aux boutiques
            Shopify et WooCommerce de relancer automatiquement leurs clients
            ayant abandonné un panier, au moyen de messages personnalisés.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            3. Tarif et facturation
          </h2>
          <p className="mt-2 text-muted">
            Le service est proposé au tarif de 29€ TTC par mois, sans
            engagement de durée. Le prélèvement est mensuel et automatique,
            via notre prestataire de paiement Stripe.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            4. Résiliation
          </h2>
          <p className="mt-2 text-muted">
            Le client peut résilier son abonnement à tout moment. La
            résiliation prend effet à la fin de la période mensuelle en
            cours ; aucun remboursement au prorata n&apos;est effectué pour
            la période déjà engagée.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            5. Droit de rétractation
          </h2>
          <p className="mt-2 text-muted">
            Conformément à l&apos;article L221-28 du Code de la consommation,
            le client professionnel ne bénéficie pas du droit de rétractation
            applicable aux consommateurs. Pour un client particulier, le
            droit de rétractation de 14 jours s&apos;applique, sauf
            renonciation expresse lors de la souscription pour un accès
            immédiat au service.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            6. Responsabilité
          </h2>
          <p className="mt-2 text-muted">
            Panier Perdu met tout en œuvre pour assurer la disponibilité du
            service, sans garantie de résultat sur le chiffre d&apos;affaires
            récupéré par le client.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            7. Droit applicable
          </h2>
          <p className="mt-2 text-muted">
            Les présentes CGV sont soumises au droit français. Tout litige
            relève, à défaut de résolution amiable, des tribunaux compétents.
          </p>
        </section>
      </div>
    </main>
  );
}
