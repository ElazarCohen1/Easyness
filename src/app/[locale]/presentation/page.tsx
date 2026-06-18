import Link from "next/link";

export const metadata = {
  title: "Présentation | SecurHome",
  description: "Découvrez SecurHome et nos valeurs pour la protection et l'entretien de vos résidences.",
};

export default function Presentation() {
  return (
    <div className="py-20 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black tracking-tight text-slate-900 mb-8">La Société</h1>

        <div className="prose prose-lg text-slate-600 space-y-6 leading-relaxed">
          <p className="text-lg">
            Créée en France par des passionnés de l'immobilier et de la gestion de patrimoine, 
            <strong> SecurHome</strong> est née d'un constat simple : une résidence secondaire a besoin de présence, d'attention et d'entretien 
            durant les longues périodes d'absence de ses propriétaires.
          </p>
          <p>
            Nous intervenons partout en France pour garantir la sécurité et la propreté de votre bien. Nos experts réalisent des rondes régulières, 
            s'assurent de la bonne isolation et du fonctionnement des installations, et effectuent des ménages complets avant votre retour.
          </p>
          <p>
            Nos valeurs reposent sur la confiance, la discrétion et l'excellence. Chaque agent est formé et certifié pour assurer la plus grande 
            qualité de service possible.
          </p>
        </div>

        <div className="mt-12">
          <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition shadow-sm">
            Obtenir une estimation
          </Link>
        </div>
      </div>
    </div>
  );
}
