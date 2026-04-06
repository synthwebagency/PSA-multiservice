import { motion } from "motion/react";
import { 
  Scissors, 
  Wind, 
  Truck, 
  Factory, 
  Layers, 
  Sparkles, 
  Car, 
  Bug, 
  Leaf,
  Heart
} from "lucide-react";

const services = [
  {
    title: "Bordados",
    description: "Personalização de alta qualidade para as suas peças.",
    icon: Scissors,
  },
  {
    title: "Ajustes e Reparação",
    description: "Serviços de costura profissional para um ajuste perfeito.",
    icon: Heart,
  },
  {
    title: "Vestidos de Noiva",
    description: "Preservação e limpeza especializada para o seu dia especial.",
    icon: Sparkles,
  },
  {
    title: "Serviço de Entrega",
    description: "Recolhemos e entregamos a sua roupa no conforto de casa.",
    icon: Truck,
  },
  {
    title: "Lavandaria Industrial",
    description: "Soluções de grande escala para empresas e hotéis.",
    icon: Factory,
  },
  {
    title: "Lavagem e Dobragem",
    description: "Cuidado diário para a sua roupa do dia-a-dia.",
    icon: Layers,
  },
  {
    title: "Tecidos Delicados",
    description: "Limpeza profunda com o máximo cuidado para sedas e lãs.",
    icon: Wind,
  },
];

const otherServices = [
  {
    title: "Lavagem de Carros",
    description: "Limpeza completa por apenas 250MT.",
    icon: Car,
  },
  {
    title: "Fumigação",
    description: "Controlo de pragas profissional para o seu espaço.",
    icon: Bug,
  },
  {
    title: "Jardinagem",
    description: "Manutenção e design de jardins impecáveis.",
    icon: Leaf,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços premium para cuidar do seu património, 
            desde vestuário delicado até à manutenção do seu jardim.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover"
            >
              <div className="w-12 h-12 bg-primary-green/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="text-primary-green w-6 h-6" />
              </div>
              <h3 className="text-xl mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl mb-8">Outros Serviços Especializados</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover"
            >
              <div className="w-12 h-12 bg-primary-red/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="text-primary-red w-6 h-6" />
              </div>
              <h3 className="text-xl mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
