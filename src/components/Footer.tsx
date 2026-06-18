import Link from "next/link";

export default function Footer({ lng }: { lng: string }) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">SecurHome</h4>
          <p className="text-sm leading-relaxed">
            Votre partenaire de confiance pour la garde, l'entretien et le nettoyage de résidences secondaires en France.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:contact@securhome.fr" className="text-emerald-400 hover:underline">contact@securhome.fr</a></li>
            <li>Téléphone: <a href="tel:+33123456789" className="text-emerald-400 hover:underline">+33 (0)1 23 45 67 89</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end justify-center">
          <p className="text-sm mb-4">&copy; 2026 SecurHome. Tous droits réservés.</p>
          <Link href={`/${lng}/legal`} className="text-sm text-slate-500 hover:text-emerald-400 transition underline">
            Mentions légales et Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}