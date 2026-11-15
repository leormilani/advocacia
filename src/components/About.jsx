import { ATTORNEYS } from '../data/lawData';
import { Award, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-widest">
            Quem Somos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary mt-2">
            Sócios Fundadores
          </h2>
          <p className="text-slate-600 mt-3">
            Comprometidos com a ética, a transparência e a defesa intransigente dos interesses dos nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {ATTORNEYS.map((attorney, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
              <img
                src={attorney.image}
                alt={attorney.name}
                className="w-full h-72 object-cover object-top"
              />
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-secondary">{attorney.name}</h3>
                  <p className="text-xs text-amber-700 font-semibold uppercase tracking-wider mt-1">{attorney.role}</p>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">{attorney.bio}</p>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center gap-4 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1"><Award className="w-4 h-4 text-primary" /> Especialista</span>
                  <span className="flex items-center gap-1"><BookOpen className="w-4 h-4 text-primary" /> OAB Ativa</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}