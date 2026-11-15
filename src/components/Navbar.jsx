import { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Início', href: '#inicio' },
    { name: 'Áreas de Atuação', href: '#areas' },
    { name: 'O Escritório', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
              M&V
            </div>
            <div>
              <span className="font-bold text-lg text-secondary tracking-tight block leading-tight">
                Mendonça & Vasconcelos
              </span>
              <span className="text-xs text-accent font-semibold tracking-widest uppercase">
                Sociedade de Advogados
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onOpenModal}
              className="bg-primary hover:bg-blue-900 text-white px-5 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 transition-all shadow-md"
            >
              <PhoneCall className="w-4 h-4" />
              Fale com um Advogado
            </button>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-slate-600 hover:text-primary font-medium"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenModal();
            }}
            className="w-full bg-primary text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 text-sm"
          >
            <PhoneCall className="w-4 h-4" />
            Agendar Consulta
          </button>
        </div>
      )}
    </header>
  );
}