import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const legalPages: Record<
  string,
  {
    title: string;
    slug: string;
    lastUpdate: string;
    content: React.ReactNode;
  }
> = {
  "mentions-legales": {
    title: "Mentions Légales",
    slug: "mentions-legales",
    lastUpdate: "17 juin 2026",
    content: (
      <>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          1. Éditeur du site
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          <strong className="text-white">CCDigital</strong>
          <br />
          [Forme juridique : SARL / SAS — à compléter]
          <br />
          Capital social : [à compléter]
          <br />
          Siège social : [adresse à compléter]
          <br />
          RCS : [à compléter]
          <br />
          SIRET : [à compléter]
          <br />
          N° TVA intracommunautaire : [à compléter]
          <br />
          Directeur de la publication : [nom à compléter]
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          2. Hébergement
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          Ce site est hébergé par Coolify — Infrastructure cloud sécurisée.
          <br />
          [Coordonnées complètes de l'hébergeur à compléter]
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          3. Propriété intellectuelle
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes,
          sons, logiciels, etc.) est la propriété exclusive de CCDigital ou de ses
          partenaires et est protégé par les lois françaises et internationales
          relatives à la propriété intellectuelle. Toute reproduction,
          représentation, modification, publication, adaptation, totale ou
          partielle, de l'un quelconque de ces éléments, quel que soit le moyen ou
          le procédé utilisé, est interdite sauf autorisation écrite préalable de
          CCDigital.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          4. Données personnelles
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          CCDigital collecte des données personnelles dans le cadre du formulaire
          de contact et de la navigation sur le site. Pour plus d'informations,
          consultez notre{" "}
          <Link
            href="/legal/confidentialite"
            className="text-[#00D4FF] hover:underline"
          >
            Politique de confidentialité
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          5. Cookies
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          Ce site utilise des cookies pour améliorer l'expérience utilisateur et
          réaliser des statistiques de visite. Vous pouvez paramétrer vos
          préférences de cookies lors de votre première visite ou à tout moment
          via les paramètres de votre navigateur.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          6. Limitation de responsabilité
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          Les informations contenues sur ce site sont aussi précises que possible.
          Toutefois, CCDigital ne pourra être tenue responsable des omissions, des
          inexactitudes ou des carences dans la mise à jour de ces informations.
          CCDigital décline toute responsabilité pour les dommages directs ou
          indirects résultant de l'accès au site ou de l'utilisation des
          informations qui y sont publiées.
        </p>
      </>
    ),
  },
  cgv: {
    title: "Conditions Générales de Vente",
    slug: "cgv",
    lastUpdate: "17 juin 2026",
    content: (
      <>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          1. Objet
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          Les présentes Conditions Générales de Vente (CGV) régissent les relations
          contractuelles entre CCDigital et ses clients pour l'ensemble des
          prestations de conseil en cybersécurité IT & OT.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          2. Prestations
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          CCDigital propose des prestations de conseil, d'audit, de diagnostic et
          de formation en cybersécurité, incluant notamment :
        </p>
        <ul className="list-disc list-inside text-[#B0B8C8] space-y-2 mb-4">
          <li>RSSI Stratégique externalisé</li>
          <li>Protection IT Exposés (EASM/WAF)</li>
          <li>Formation Dirigeant NIS2</li>
          <li>Sensibilisation Employés</li>
          <li>Audit et diagnostic cybersécurité</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          3. Devis et commande
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          Toute prestation fait l'objet d'un devis préalable détaillé. Le devis
          établi par CCDigital constitue une offre de prestation valable pendant
          30 jours. La commande est confirmée par la signature du devis par le
          client.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          4. Tarifs et paiement
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          Les tarifs sont exprimés en euros hors taxes. Les conditions de paiement
          sont spécifiées dans chaque devis. En cas de retard de paiement,
          CCDigital se réserve le droit de suspendre les prestations en cours.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          5. Confidentialité
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          Les parties s'engagent à maintenir confidentielles toutes les
          informations échangées dans le cadre de la prestation. Cette obligation
          de confidentialité perdure au-delà de la fin de la relation
          contractuelle.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          6. Responsabilité
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          CCDigital s'engage à fournir ses prestations avec diligence et selon les
          règles de l'art. La responsabilité de CCDigital est limitée au montant
          des honoraires facturés pour la prestation concernée.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          7. Droit applicable
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          Les présentes CGV sont soumises au droit français. Tout litige relatif à
          leur interprétation et/ou leur exécution relève des tribunaux français
          compétents.
        </p>
      </>
    ),
  },
  responsabilite: {
    title: "Clause de Responsabilité",
    slug: "responsabilite",
    lastUpdate: "17 juin 2026",
    content: (
      <>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          1. Nature des prestations
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          Les prestations de CCDigital sont des prestations de conseil et
          d'accompagnement. Elles ne constituent en aucun cas une garantie de
          résultats en matière de sécurité informatique, la sécurité absolue
          n'existant pas dans le domaine de la cybersécurité.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          2. Limitation de responsabilité
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          CCDigital met en œuvre tous les moyens nécessaires pour fournir des
          prestations de qualité. Toutefois, CCDigital ne saurait être tenue
          responsable des dommages directs ou indirects résultant de :
        </p>
        <ul className="list-disc list-inside text-[#B0B8C8] space-y-2 mb-4">
          <li>
            L'utilisation non conforme des recommandations fournies
          </li>
          <li>
            L'absence de mise en œuvre des mesures recommandées par le client
          </li>
          <li>
            Des événements de force majeure ou des attaques cyber non prévisibles
          </li>
          <li>
            Des défaillances de tiers non contrôlés par CCDigital
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          3. Plafond de responsabilité
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          La responsabilité totale de CCDigital au titre d'une prestation est
          limitée au montant des honoraires effectivement payés par le client pour
          ladite prestation.
        </p>
      </>
    ),
  },
  confidentialite: {
    title: "Politique de Confidentialité",
    slug: "confidentialite",
    lastUpdate: "17 juin 2026",
    content: (
      <>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          1. Responsable du traitement
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          CCDigital, [adresse à compléter], est le responsable du traitement des
          données personnelles collectées sur ce site.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          2. Données collectées
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          Nous collectons les données suivantes :
        </p>
        <ul className="list-disc list-inside text-[#B0B8C8] space-y-2 mb-4">
          <li>Nom complet (formulaire de contact)</li>
          <li>Adresse email professionnelle (formulaire de contact)</li>
          <li>Nom de l'entreprise (formulaire de contact)</li>
          <li>Sujet de la demande (formulaire de contact)</li>
          <li>Contenu du message (formulaire de contact)</li>
          <li>Données de navigation (cookies analytiques)</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          3. Finalités du traitement
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          Les données collectées sont utilisées pour :
        </p>
        <ul className="list-disc list-inside text-[#B0B8C8] space-y-2 mb-4">
          <li>Répondre aux demandes de contact et de consultation</li>
          <li>Envoyer des informations commerciales (avec consentement)</li>
          <li>Améliorer l'expérience de navigation sur le site</li>
          <li>Réaliser des statistiques de visite anonymisées</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          4. Durée de conservation
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          Les données personnelles sont conservées pour une durée maximale de 3 ans
          à compter du dernier contact avec la personne concernée. Les données de
          navigation (cookies) sont conservées pendant 13 mois maximum.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          5. Vos droits
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          Conformément au RGPD, vous disposez des droits suivants : droit d'accès,
          de rectification, d'effacement, de limitation, d'opposition et de
          portabilité de vos données. Pour exercer ces droits, contactez-nous à :{" "}
          <a
            href="mailto:contact@ccdigital.fr"
            className="text-[#00D4FF] hover:underline"
          >
            contact@ccdigital.fr
          </a>
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          6. Sécurité des données
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          CCDigital met en œuvre des mesures techniques et organisationnelles
          appropriées pour protéger vos données personnelles contre tout accès
          non autorisé, modification, divulgation ou destruction.
        </p>
      </>
    ),
  },
  securite: {
    title: "Politique de Sécurité",
    slug: "securite",
    lastUpdate: "17 juin 2026",
    content: (
      <>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          1. Engagement de sécurité
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          CCDigital est engagée dans une démarche de sécurité de l'information
          conforme aux meilleures pratiques du secteur. En tant que cabinet de
          conseil en cybersécurité, la sécurité de nos propres systèmes et de ceux
          de nos clients est notre priorité absolue.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          2. Mesures techniques
        </h2>
        <ul className="list-disc list-inside text-[#B0B8C8] space-y-2 mb-4">
          <li>Chiffrement TLS 1.3 pour toutes les communications</li>
          <li>Authentification multi-facteurs (MFA) sur tous les accès</li>
          <li>Surveillance continue de la surface d'attaque</li>
          <li>Mises à jour de sécurité régulières et automatisées</li>
          <li>Sauvegardes chiffrées et géo-redondantes</li>
          <li>WAF et protection anti-DDoS sur toutes les applications</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          3. Mesures organisationnelles
        </h2>
        <ul className="list-disc list-inside text-[#B0B8C8] space-y-2 mb-4">
          <li>Politique de contrôle d'accès stricte (principe du moindre privilège)</li>
          <li>Formation et sensibilisation régulières de nos collaborateurs</li>
          <li>Audits de sécurité périodiques par des tiers indépendants</li>
          <li>Plan de réponse à incident documenté et testé</li>
          <li>Accords de confidentialité avec tous les partenaires</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          4. Signalement de vulnérabilité
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          Si vous découvrez une vulnérabilité sur nos systèmes, merci de la
          signaler de manière responsable via notre page{" "}
          <Link
            href="/legal/divulgation"
            className="text-[#00D4FF] hover:underline"
          >
            Divulgation de vulnérabilité
          </Link>
          .
        </p>
      </>
    ),
  },
  divulgation: {
    title: "Divulgation de Vulnérabilité",
    slug: "divulgation",
    lastUpdate: "17 juin 2026",
    content: (
      <>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          1. Programme de divulgation responsable
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          CCDigital encourage la divulgation responsable des vulnérabilités. Si
          vous pensez avoir découvert une faille de sécurité sur nos systèmes, nous
          vous invitons à nous la signaler de manière responsable et coordonnée.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          2. Comment signaler une vulnérabilité
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          Envoyez votre signalement à :{" "}
          <a
            href="mailto:security@ccdigital.fr"
            className="text-[#00D4FF] hover:underline"
          >
            security@ccdigital.fr
          </a>
        </p>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          Merci d'inclure les informations suivantes dans votre signalement :
        </p>
        <ul className="list-disc list-inside text-[#B0B8C8] space-y-2 mb-4">
          <li>Description technique de la vulnérabilité</li>
          <li>Étapes de reproduction</li>
          <li>Impact potentiel estimé</li>
          <li>Preuve de concept (si applicable)</li>
          <li>Vos coordonnées pour le suivi</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          3. Notre engagement
        </h2>
        <ul className="list-disc list-inside text-[#B0B8C8] space-y-2 mb-4">
          <li>
            Accusé de réception sous 24h ouvrées
          </li>
          <li>
            Évaluation et classification de la vulnérabilité sous 5 jours ouvrés
          </li>
          <li>
            Communication transparente sur la correction et le calendrier
          </li>
          <li>
            Crédit public du chercheur (si souhaité) après correction
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          4. Règles de divulgation responsable
        </h2>
        <ul className="list-disc list-inside text-[#B0B8C8] space-y-2 mb-4">
          <li>Ne pas exploiter la vulnérabilité au-delà de la démonstration</li>
          <li>Ne pas accéder à des données d'autres utilisateurs</li>
          <li>
            Ne pas divulguer publiquement la vulnérabilité avant sa correction
          </li>
          <li>Respecter la vie privée des utilisateurs</li>
        </ul>
      </>
    ),
  },
  synthese: {
    title: "Synthèse Fonctionnelle",
    slug: "synthese",
    lastUpdate: "17 juin 2026",
    content: (
      <>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          1. Présentation du site
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          Le site ccdigital.fr est un site vitrine présentant les services de
          conseil en cybersécurité IT & OT proposés par CCDigital. Il permet aux
          visiteurs de découvrir les offres, consulter les ressources du blog, et
          prendre contact pour une consultation.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          2. Fonctionnalités principales
        </h2>
        <ul className="list-disc list-inside text-[#B0B8C8] space-y-2 mb-4">
          <li>
            <strong className="text-white">Présentation des services</strong> :
            Pages détaillées pour chaque offre (RSSI Stratégique, Protection IT,
            Formation Dirigeant, Sensibilisation Employés)
          </li>
          <li>
            <strong className="text-white">Blog / Ressources</strong> :
            Articles de cybersécurité alimentés par Ghost CMS
          </li>
          <li>
            <strong className="text-white">Formulaire de contact</strong> :
            Prise de contact pour demande de consultation
          </li>
          <li>
            <strong className="text-white">Informations légales</strong> :
            Mentions légales, CGV, politique de confidentialité, etc.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          3. Technologies
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          Ce site est construit avec Next.js (React), hébergé sur une
          infrastructure cloud sécurisée, et utilise Ghost CMS comme système de
          gestion de contenu headless pour les articles du blog.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          4. Données traitées
        </h2>
        <p className="text-[#B0B8C8] leading-relaxed mb-4">
          Le site traite uniquement les données strictement nécessaires au
          fonctionnement du service et à la réponse aux demandes de contact.
          Aucune donnée n'est revendue ou partagée à des tiers à des fins
          commerciales. Consultez notre{" "}
          <Link
            href="/legal/confidentialite"
            className="text-[#00D4FF] hover:underline"
          >
            Politique de confidentialité
          </Link>{" "}
          pour plus de détails.
        </p>
      </>
    ),
  },
};

export async function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = legalPages[slug];
  if (!page) return { title: "Page non trouvée" };
  return {
    title: page.title,
    description: `${page.title} — CCDigital`,
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = legalPages[slug];
  if (!page) notFound();

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            href="/"
            className="text-[#00D4FF] hover:underline text-sm mb-8 inline-block"
          >
            ← Retour à l'accueil
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">{page.title}</span>
          </h1>
          <p className="text-sm text-[#6B7A90] mb-8">
            Dernière mise à jour : {page.lastUpdate}
          </p>
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-[#00D4FF] prose-strong:text-white">
            {page.content}
          </div>

          <div className="mt-16 p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
            <p className="text-[#B0B8C8] mb-4">
              Des questions sur nos conditions ? N'hésitez pas à nous contacter.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 font-semibold rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-[#0A1628] hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}