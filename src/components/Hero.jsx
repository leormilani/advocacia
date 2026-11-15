import { ShieldCheck, Scale, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  return (
    <section
      id="inicio"
      className="pt-32 pb-20 lg:pt-44 lg:pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 bg-accent/25 text-amber-300 font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/30">
              <Scale className="w-3.5 h-3.5" /> Excelência e Rigor Jurídico
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Defesa sólida e estratégica para seus <span className="text-amber-400">direitos.</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              Atuação preventiva e contenciosa com foco em resultados seguros para empresas e pessoas físicas. Soluções jurídicas sob medida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onOpenModal}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                Consulta Inicial com Especialista
              </button>
              <a
                href="#areas"
                className="bg-transparent hover:bg-white/10 text-white border border-slate-600 px-7 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
              >
                Nossas Áreas
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-700/80 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Sigilo Absoluto</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Atendimento Ágil</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <span>+15 Anos de Tradição</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80"
                alt="Escritório de advocacia profissional"
                className="w-full h-[460px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-700 text-white">
              <p className="text-3xl font-extrabold text-amber-400">98%</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Índice de satisfação em acordos e sentenças
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}