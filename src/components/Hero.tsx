import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-green/5 -skew-x-12 transform translate-x-20" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-red/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary-green/10 text-primary-green font-medium text-sm mb-6">
              Premium Multiservice em Tete
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
              Lavandaria Profissional em Tete com <span className="text-primary-green">Qualidade</span> Garantida
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              Cuidamos das suas roupas com excelência e precisão. Tecnologia avançada e 
              atenção ao detalhe para resultados impecáveis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://wa.me/258843697543"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-primary-green text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-primary-green/20 hover:bg-primary-green/90 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                Fale connosco no WhatsApp
              </motion.a>
              <motion.a
                href="#servicos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-lg border-2 border-dark hover:bg-dark hover:text-white transition-all"
              >
                Ver Serviços
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Visual Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3"
      >
        <div className="relative w-full h-full">
          <img 
            src="/images/hero-laundry.jpg" 
            alt="Lavandaria Profissional" 
            className="w-full h-full object-cover rounded-l-[100px] shadow-2xl bg-gray-200"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center text-white font-bold">
                250
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Lavagem de Carros</p>
                <p className="text-xl font-bold">Apenas 250MT</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
