import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="relative">
              <img 
                src="/images/about-team.jpg" 
                alt="Nossa Equipa" 
                className="rounded-[50px] shadow-2xl relative z-10 bg-gray-200"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-green/10 rounded-full -z-0" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl mb-8">Excelência em Cada Detalhe</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A Lavandaria Psa Multiservice é uma empresa moçambicana de referência em Tete, 
              focada em proporcionar serviços de lavandaria profissional com múltiplos serviços 
              e um foco inabalável na qualidade.
            </p>
            
            <div className="space-y-6">
              {[
                "Tecnologia de ponta em lavagem industrial",
                "Cuidado artesanal em bordados e ajustes",
                "Compromisso com prazos e satisfação",
                "Equipa altamente qualificada e dedicada"
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2 className="text-primary-green w-6 h-6 shrink-0" />
                  <span className="text-lg font-medium text-dark">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <p className="text-dark font-bold text-lg italic">
                "O nosso objetivo não é apenas lavar roupa, é cuidar do seu bem-estar e imagem."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
