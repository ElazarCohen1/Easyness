"use client";


export default function Contact() {
  return (
    <div className="py-20 px-4 bg-slate-50 min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-3xl p-10 rounded-3xl border border-slate-200 shadow-xl">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Contactez-nous</h1>
        <p className="text-slate-500 mb-8">
          Notre équipe vous répond sous 24 heures pour étudier vos besoins.
        </p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Prénom</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition" placeholder="Jean" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Nom</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition" placeholder="Dupont" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition" placeholder="jean.dupont@example.com" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Votre message</label>
            <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition" placeholder="Décrivez brièvement votre résidence et vos besoins..."></textarea>
          </div>

          <button type="submit" className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition shadow-sm">
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  );
}
