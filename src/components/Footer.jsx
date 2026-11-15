// src/components/Footer.jsx
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-secondary text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-slate-800">
          <div>
            <span className="font-bold text-xl text-white block">Mendonça & Vasconcelos</span>
            <span className="text-xs text-accent font-semibold uppercase tracking-widest block mt-1">Sociedade de Advogados</span>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed">
              Solidez, ética e compromisso com a justiça. Atendimento consultivo e contencioso em todo o território nacional. OAB/SP 00.000.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <h4 className="font-bold text-white text-base">Escritório Central</h4>
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              Av. Brigadeiro Luis Antônio, 100 - São Paulo/SP
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              (11) 3232-4444 | (11) 98888-8888
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              contato@mendoncaadvogados.com.br
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <h4 className="font-bold text-white text-base">Horário de Atendimento</h4>
            <p className="text-slate-400">Segunda a Sexta-feira: 09h às 18h</p>
            <p className="text-slate-400">Atendimento de urgência via WhatsApp 24h.</p>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Mendonça & Vasconcelos Advogados. Desenvolvido por Léo Ronaldo Milani.
        </div>
      </div>
    </footer>
  );
}