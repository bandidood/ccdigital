import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connexion",
  description: "Accédez à votre espace client CCDigital.",
};

export default function LoginPage() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
      <div className="w-full max-w-md px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-white">CC</span>
            <span className="gradient-text">DIGITAL</span>
          </h1>
          <p className="text-[#B0B8C8]">
            Espace client — Bientôt disponible
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
          <div className="text-center py-8">
            <div className="text-6xl mb-6">🔒</div>
            <h2 className="text-xl font-bold text-white mb-4">
              Espace client en cours de développement
            </h2>
            <p className="text-[#B0B8C8] mb-8">
              L'espace client sécurisé sera bientôt disponible. En attendant,
              contactez-nous pour toute demande.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 font-semibold rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-[#0A1628] hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all"
            >
              Nous contacter
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-[#6B7A90] mt-6">
          Pas encore client ?{" "}
          <a href="/contact" className="text-[#00D4FF] hover:underline">
            Demander une consultation
          </a>
        </p>
      </div>
    </div>
  );
}