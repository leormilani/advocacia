import { Scale, Users, Briefcase, ShieldAlert, ArrowRight } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/lawData';

const ICON_MAP = {
  Scale: Scale,
  Users: Users,
  Briefcase: Briefcase,
  ShieldAlert: ShieldAlert,
};

export default function Areas({ onOpenModal }) {
  return (
    <section id="areas" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-widest">
            Expertise Jurídica
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary mt-2">
            Áreas de Atuação Especializada
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Oferecemos suporte completo e assertivo em ramos essenciais do Direito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRACTICE_AREAS.map((area) => {
            const IconComponent = ICON_MAP[area.icon];
            return (
              <div
                key={area.id}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-blue-50 group-hover:bg-primary text-primary group-hover:text-white rounded-xl flex items-center justify-center transition-colors mb-6">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <button
                  onClick={onOpenModal}
                  className="mt-6 text-primary font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Consultar caso <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}