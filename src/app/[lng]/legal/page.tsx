export const metadata = {
  title: "Mentions Légales | SecurHome",
  description: "Mentions légales et politique de gestion des cookies de SecurHome.",
};

export default function Legal() {
  return (
    <div className="py-20 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 mb-6">Mentions Légales & Cookies</h1>
        <div className="text-slate-600 space-y-6 leading-relaxed">
          <p>
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site <strong>SecurHome</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Édition du site</h2>
          <p>
            Le site SecurHome est édité par la société SecurHome SAS, au capital social de 50 000 €, dont le siège social est situé à Paris, France.
            Immatriculée au Registre du Commerce et des Sociétés sous le numéro 123 456 789 RCS Paris.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Hébergement</h2>
          <p>
            Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Politique de Cookies</h2>
          <p>
            Le site utilise des cookies pour améliorer votre expérience utilisateur et réaliser des mesures statistiques de fréquentation. En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de ces cookies.
          </p>
        </div>
      </div>
    </div>
  );
}
