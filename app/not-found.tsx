import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-paper px-5 text-center">
      <p className="font-display text-6xl font-semibold text-ink">404</p>
      <p className="mt-4 font-body text-lg text-muted">
        Cette page n&apos;existe pas, ou plus.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-sm bg-burnt px-6 py-3 font-body text-base font-semibold text-paper transition-colors hover:bg-ink"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
