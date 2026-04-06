import { motion } from "motion/react";
import { Phone, MessageSquare, MapPin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-dark rounded-[50px] overflow-hidden shadow-2xl text-white">
          <div className="p-12 md:p-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl mb-8">Vamos conversar?</h2>
              <p className="text-gray-400 text-xl mb-16 max-w-2xl mx-auto">
                A nossa equipa está pronta para o ajudar com a melhor solução. 
                Entre em contacto connosco através dos canais abaixo.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <motion.a
                  href="tel:+258843697543"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-4 p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-primary-green/20 hover:border-primary-green/30 transition-all"
                >
                  <div className="w-16 h-16 bg-primary-green/20 rounded-2xl flex items-center justify-center text-primary-green">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Ligue-nos</p>
                    <p className="text-2xl font-medium">+258 84 369 7543</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://wa.me/258843697543"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-4 p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-primary-green/20 hover:border-primary-green/30 transition-all"
                >
                  <div className="w-16 h-16 bg-primary-green/20 rounded-2xl flex items-center justify-center text-primary-green">
                    <MessageSquare className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">WhatsApp</p>
                    <p className="text-2xl font-medium">+258 84 369 7543</p>
                  </div>
                </motion.a>
              </div>

              <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <MapPin className="w-6 h-6 text-primary-red" />
                  <span className="text-lg">Av. 25 de Junho, Tete</span>
                </div>
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <Mail className="w-6 h-6 text-primary-green" />
                  <span className="text-lg">contacto@psamultiservice.co.mz</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
