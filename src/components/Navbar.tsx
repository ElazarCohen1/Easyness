// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar({ lng }: { lng: string }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <nav className="hidden md:flex space-x-8 font-semibold text-sm text-slate-600">
          <Link href={`/${lng}`} className="hover:text-emerald-600 transition-colors">Accueil</Link>
          <Link href={`/${lng}/presentation`} className="hover:text-emerald-600 transition-colors">La Société</Link>
          <Link href={`/${lng}/temoignages`} className="hover:text-emerald-600 transition-colors">Témoignages</Link>
        </nav>

        <div className="flex justify-center flex-1 md:flex-none">
          <Link href={`/${lng}`} className="flex items-center space-x-2 group">
            <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-emerald-600 transition duration-300">
              Secur<span className="text-emerald-600">Home</span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center">
          <Link href={`/${lng}/contact`} className="bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-700 transition shadow-sm">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}