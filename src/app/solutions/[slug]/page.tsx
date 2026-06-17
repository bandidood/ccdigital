import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const solutions = [
  {
    slug: "rssi-strategique",
    title: "RSSI Stratégique",
    icon: "🛡️",
    subtitle: "Direction cybersécurité externalisée pour PME",
    description:
      "Un RSSI Stratégique externalisé permet aux PME de bénéficier d'une direction cybersécurité expérimentée sans les coûts d'un poste interne. Pilotage, gouvernance et conformité NIS2 garantis.",
    longDescription:
      "La fonction RSSI est souvent sous-estimée dans les PME industrielles. Pourtant, la réglementation NIS2 impose désormais une gouvernance cybersécurité structurée au niveau de la direction. Notre offre RSSI Stratégique externalisé vous permet de disposer d'un expert de haut niveau qui pilote votre politique de sécurité, reporte au CODIR, et assure la conformité continue.",
    features: [
      {
        title: "Pilotage de la politique de sécurité",
        desc: "Définition et suivi de la politique de sécurité de l'information adaptée à votre contexte métier et réglementaire.",
        icon: "📋",
      },
      {
        title: "Reporting au CODIR et au PDG",
        desc: "Tableaux de bord et indicateurs clés pour un pilotage stratégique de la cybersécurité au niveau de la direction.",
        icon: "📊",
      },
      {
        title: "Conformité NIS2 continue",
        desc: "Veille réglementaire et mise en œuvre des mesures techniques et organisationnelles requises par la directive NIS2.",
        icon: "✅",
      },
      {
        title: "Veille et anticipation des menaces",
        desc: "Suivi proactif des menaces et vulnérabilités affectant votre secteur d'activité.",
        icon: "🔍",
      },
      {
        title: "Coordination des audits et tests",
        desc: "Planification et pilotage des audits de sécurité, tests d'intrusion et évaluations de conformité.",
        icon: "🎯",
      },
    ],
    benefits: [
      "Réduction des coûts par rapport à un RSSI interne",
      "Accès à une expertise de haut niveau",
      "Conformité NIS2 garantie",
      "Vision stratégique pour le CODIR",
      "Réactivité face aux incidents",
    ],
  },
  {
    slug: "protection-it",
    title: "Protection IT Exposés",
    icon: "🔒",
    subtitle: "EASM, WAF & surveillance continue de votre surface d'attaque",
    description:
      "EASM (External Attack Surface Management), WAF et surveillance continue de votre surface d'attaque exposée. Identifiez et protégez vos assets IT accessibles depuis Internet.",
    longDescription:
      "Votre surface d'attaque IT exposée est la première chose que les adversaires voient. Notre approche EASM (External Attack Surface Management) combine cartographie continue, surveillance des exposures et protection active via WAF. Nous identifions chaque asset accessible depuis Internet, évaluons son niveau de risque et mettons en place les protections nécessaires.",
    features: [
      {
        title: "Cartographie de la surface d'attaque",
        desc: "Inventaire complet et continu de tous les assets IT exposés : domaines, sous-domaines, IPs, services, certificats.",
        icon: "🗺️",
      },
      {
        title: "EASM — surveillance continue",
        desc: "Monitoring 24/7 de votre surface d'attaque pour détecter toute nouvelle exposure ou configuration vulnérable.",
        icon: "📡",
      },
      {
        title: "WAF & protection applicative",
        desc: "Web Application Firewall configuré et géré pour protéger vos applications web contre les attaques courantes.",
        icon: "🛡️",
      },
      {
        title: "Détection et réponse aux incidents",
        desc: "Détection rapide des tentatives d'intrusion et réponse coordonnée pour limiter l'impact des incidents.",
        icon: "🚨",
      },
      {
        title: "Rapports de posture de sécurité",
        desc: "Rapports réguliers de votre posture de sécurité avec recommandations priorisées et suivi des remédiations.",
        icon: "📈",
      },
    ],
    benefits: [
      "Visibilité complète sur vos exposures IT",
      "Protection proactive avant l'attaque",
      "Réduction du délai de détection des menaces",
      "Conformité aux exigences de sécurité",
      "Reporting clair pour la direction",
    ],
  },
  {
    slug: "formation-dirigeant",
    title: "Formation Dirigeant",
    icon: "🎓",
    subtitle: "Gouvernance NIS2 & sensibilisation CODIR",
    description:
      "Programme de gouvernance NIS2 et sensibilisation cyber pour les dirigeants et membres du CODIR. Comprendre les enjeux, décider en connaissance et piloter la cybersécurité comme un sujet stratégique.",
    longDescription:
      "La directive NIS2 place la cybersécurité au niveau de la direction. Les dirigeants sont désormais personnellement responsables de la gestion des risques cyber. Notre programme de formation dirigeant est conçu pour transformer la cybersécurité d'un sujet technique en un enjeu stratégique maîtrisé par le CODIR.",
    features: [
      {
        title: "Formation NIS2 pour décideurs",
        desc: "Comprendre les obligations légales, les sanctions et les enjeux stratégiques de la directive NIS2 pour votre entreprise.",
        icon: "📚",
      },
      {
        title: "Ateliers de sensibilisation CODIR",
        desc: "Sessions interactives adaptées au contexte de votre entreprise pour sensibiliser l'ensemble du CODIR aux risques cyber.",
        icon: "💼",
      },
      {
        title: "Tabletop exercises & simulations",
        desc: "Simulations d'incidents cyber réalistes pour tester la préparation et la résilience de votre organisation.",
        icon: "🔬",
      },
      {
        title: "Jeux de rôle incident cyber",
        desc: "Exercices pratiques où chaque membre du CODIR joue un rôle dans la gestion d'un incident cyber majeur.",
        icon: "🎭",
      },
      {
        title: "Support à la décision stratégique",
        desc: "Accompagnement pour intégrer la cybersécurité dans la stratégie d'entreprise et les processus de gouvernance.",
        icon: "🎯",
      },
    ],
    benefits: [
      "Conformité NIS2 des dirigeants",
      "Prise de décision éclairée sur les risques cyber",
      "Culture de sécurité au niveau du CODIR",
      "Préparation testée face aux incidents",
      "Responsabilité personnelle maîtrisée",
    ],
  },
  {
    slug: "sensibilisation",
    title: "Sensibilisation Employés",
    icon: "👥",
    subtitle: "Plateforme de simulation & formation continue",
    description:
      "Plateforme de simulation et formation continue pour transformer chaque collaborateur en rempart contre le risque cyber. Phishing simulations, modules interactifs et suivi de maturité.",
    longDescription:
      "Le facteur humain est la première cause d'incidents cyber. Notre plateforme de sensibilisation combine simulations de phishing ciblées, modules de formation interactifs et suivi individuel de la maturité cyber de chaque collaborateur. L'objectif : transformer chaque employé en rempart actif contre les menaces.",
    features: [
      {
        title: "Phishing simulations ciblées",
        desc: "Campagnes de phishing simulations adaptées à votre secteur et à chaque population de collaborateurs pour mesurer la vigilance réelle.",
        icon: "🎣",
      },
      {
        title: "Modules de formation interactifs",
        desc: "Parcours de formation courts et engageants sur les bonnes pratiques cyber : mots de passe, emails, navigation web, etc.",
        icon: "📖",
      },
      {
        title: "Suivi individuel et collectif",
        desc: "Tableau de bord par collaborateur et par équipe pour suivre la progression et identifier les points d'attention.",
        icon: "📊",
      },
      {
        title: "Rapports de maturité par équipe",
        desc: "Rapports détaillés pour le management avec indicateurs de maturité cyber par département et par niveau de risque.",
        icon: "📈",
      },
      {
        title: "Certification et badges internes",
        desc: "Système de certification et de reconnaissance pour encourager l'engagement et valoriser les progrès.",
        icon: "🏆",
      },
    ],
    benefits: [
      "Réduction du risque phishing de 80%",
      "Suivi individualisé de chaque collaborateur",
      "Reporting pour le CODIR et la DPO",
      "Culture de sécurité pérenne",
      "Conformité NIS2 article 21",
    ],
  },
];

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return { title: "Solution non trouvée" };
  return {
    title: solution.title,
    description: solution.description,
    openGraph: {
      title: `${solution.title} | CCDigital`,
      description: solution.description,
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link
            href="/solutions"
            className="text-[#00D4FF] hover:underline text-sm mb-8 inline-block"
          >
            ← Toutes les solutions
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{solution.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                {solution.title}
              </h1>
              <p className="text-lg text-[#00D4FF] mt-1">{solution.subtitle}</p>
            </div>
          </div>
          <p className="text-lg text-[#B0B8C8] leading-relaxed max-w-3xl">
            {solution.longDescription}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#0D1F3C]">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-12">
            Ce qui est <span className="gradient-text">inclus</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {solution.features.map((f, i) => (
              <div
                key={i}
                className="card-hover p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{f.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {f.title}
                    </h3>
                    <p className="text-[#B0B8C8] text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#0A1628]">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10">
            Les <span className="gradient-text">bénéfices</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {solution.benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <span className="text-[#00E68A] text-xl">✓</span>
                <span className="text-[#B0B8C8]">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0A1628] to-[#1A2744] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00D4FF]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à démarrer avec{" "}
            <span className="gradient-text">{solution.title}</span> ?
          </h2>
          <p className="text-lg text-[#B0B8C8] max-w-xl mx-auto mb-10">
            Discutons de votre contexte et construisons ensemble une trajectoire
            cybersécurité adaptée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 font-semibold rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-[#0A1628] hover:shadow-xl hover:shadow-[#00D4FF]/25 transition-all text-lg"
            >
              Demander une consultation
            </Link>
            <Link
              href="/solutions"
              className="px-10 py-4 font-semibold rounded-xl border-2 border-[#00D4FF]/40 text-[#00D4FF] hover:bg-[#00D4FF]/10 transition-all text-lg"
            >
              Voir toutes les solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}