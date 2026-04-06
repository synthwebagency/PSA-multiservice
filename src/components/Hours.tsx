import { motion } from "motion/react";
import { Clock, Calendar } from "lucide-react";

export default function Hours() {
  const schedule = [
    { day: "Segunda a Sexta", hours: "07:30 – 17:30", status: "Aberto" },
    { day: "Sábado", hours: "Fechado", status: "Fechado" },
    { day: "Domingo", hours: "07:30 – 17:30", status: "Aberto" },
  ];

  return (
    <section id="horario" className="py-24 bg-dark text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl mb-8">Horário de Funcionamento</h2>
            <p className="text-gray-400 text-lg mb-10">
              Estamos disponíveis para o servir com flexibilidade. 
              Note que encerramos aos Sábados para manutenção interna, 
              mas estamos prontos para o receber aos Domingos.
            </p>
            <div className="inline-flex items-center gap-3 py-3 px-6 bg-primary-green/20 rounded-2xl text-primary-green border border-primary-green/30">
              <Clock className="w-5 h-5" />
              <span className="font-bold">Sempre pontuais na entrega</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="bg-white/5 rounded-[40px] p-8 md:p-12 border border-white/10">
              {schedule.map((item, index) => (
                <div 
                  key={item.day}
                  className={`flex items-center justify-between py-6 ${
                    index !== schedule.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Calendar className={`w-6 h-6 ${item.status === "Aberto" ? "text-primary-green" : "text-primary-red"}`} />
                    <span className="text-xl font-medium">{item.day}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xl block">{item.hours}</span>
                    <span className={`text-sm font-bold uppercase tracking-wider ${
                      item.status === "Aberto" ? "text-primary-green" : "text-primary-red"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
