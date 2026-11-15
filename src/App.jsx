import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Areas from './components/Areas';
import About from './components/About';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      
      <main className="flex-grow">
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <Areas onOpenModal={() => setIsModalOpen(true)} />
        <About />
      </main>

      <Footer />
      <WhatsAppButton />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}