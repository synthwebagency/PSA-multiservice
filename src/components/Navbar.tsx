import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Horário", href: "#horario" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? "py-4 glass shadow-lg" : "py-8 bg-transparent"
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img 
            src="/images/logo.png" 
            alt="PSA Multiservice Logo" 
            className="w-12 h-12 object-contain"
            onError={(e) => {
              // Fallback if image doesn't exist yet
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden w-10 h-10 bg-primary-green rounded-xl flex items-center justify-center text-white font-bold text-xl">
            P
          </div>
          <span className={`text-2xl font-display font-bold tracking-tighter ${
            isScrolled ? "text-dark" : "text-dark"
          }`}>
            PSA <span className="text-primary-green">Multiservice</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest hover:text-primary-green transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/258843697543"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary-green transition-all"
          >
            WHATSAPP
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 p-6 flex flex-col gap-6 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/258843697543"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-green text-white py-4 rounded-xl font-bold text-center"
          >
            FALAR NO WHATSAPP
          </a>
        </motion.div>
      )}
    </nav>
  );
}
