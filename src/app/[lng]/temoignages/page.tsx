export const metadata = {
  title: "Témoignages | SecurHome",
  description: "Ce que nos clients disent de nous.",
};

export default function Temoignages() {
  const reviews = [
    {
      name: "Sophie L.",
      location: "Résidence à Deauville",
      text: "Nous avons choisi le forfait Premium pour notre maison en Normandie. L'équipe est très discrète et professionnelle, la maison est toujours impeccable à notre arrivée.",
    },
    {
      name: "Marc R.",
      location: "Résidence à Nice",
      text: "Un service de gardiennage indispensable quand on habite loin. Les rapports photos sont rassurants et le ménage est extrêmement bien fait.",
    },
  ];

  return (
    <div className="py-20 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-black text-slate-900 mb-4">Témoignages</h1>
        <p className="text-slate-500 mb-12 text-lg">Découvrez pourquoi des centaines de propriétaires nous font confiance.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center mb-4 text-emerald-500">
                ★★★★★
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">
                "{rev.text}"
              </p>
              <div>
                <p className="font-bold text-slate-900">{rev.name}</p>
                <p className="text-sm text-slate-400">{rev.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
