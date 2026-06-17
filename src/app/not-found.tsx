import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
      <div className="text-center px-6">
        <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-4">
          Page non trouvée
        </h2>
        <p className="text-[#B0B8C8] mb-8 max-w-md mx-auto">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 font-semibold rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-[#0A1628] hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all"
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/blog"
            className="px-8 py-3 font-semibold rounded-lg border border-[#00D4FF]/40 text-[#00D4FF] hover:bg-[#00D4FF]/10 transition-all"
          >
            Voir le blog
          </Link>
        </div>
      </div>
    </div>
  );
}