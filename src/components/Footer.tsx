import { motion } from "motion/react";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl mb-6">Lavandaria Psa Multiservice</h2>
            <p className="text-gray-400 max-w-md mb-8">
              A sua parceira de confiança em Tete para serviços de lavandaria, 
              limpeza industrial, manutenção de jardins e muito mais. 
              Qualidade premium ao seu alcance.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://www.facebook.com/100066774772903/videos/psa-multi-service-cuidamos-das-suas-roupas-com-qualidade-e-confian%C3%A7a-localizados/1572826770844273/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#1877F2" }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-xl mb-6">Contactos</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary-green" />
                <span>+258 84 369 7543</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary-green" />
                <span>contacto@psamultiservice.co.mz</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary-green shrink-0" />
                <span>Av. 25 de Junho, Tete, Moçambique</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#horario" className="text-gray-400 hover:text-white transition-colors">Horário</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contactar</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Lavandaria Psa Multiservice. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
