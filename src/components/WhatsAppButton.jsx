// src/components/WhatsAppButton.jsx
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20esclarecer%20uma%20dúvida%20jurídica."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all z-40 flex items-center justify-center"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}