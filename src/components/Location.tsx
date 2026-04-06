import { motion } from "motion/react";
import { MapPin, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 text-primary-red font-bold mb-4">
              <MapPin className="w-5 h-5" />
              <span>ONDE ESTAMOS</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-8">Visite-nos em Tete</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Estamos localizados estrategicamente para melhor o servir. Venha conhecer as nossas instalações modernas.
            </p>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-8">
              <h4 className="text-xl font-bold mb-4">Endereço</h4>
              <p className="text-gray-600 text-lg">Av. 25 de Junho, Tete, Moçambique</p>
            </div>

            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=Av.+25+de+Junho,+Tete,+Moçambique"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-2xl font-bold hover:bg-dark/90 transition-all"
            >
              <Navigation className="w-5 h-5" />
              Abrir no Google Maps
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.56743283238!2d33.5833!3d-16.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x192d6e3f3f3f3f3f%3A0x3f3f3f3f3f3f3f3f!2sAv.%2025%20de%20Junho%2C%20Tete%2C%20Mo%C3%A7ambique!5e0!3m2!1spt-PT!2smz!4v1712430000000!5m2!1spt-PT!2smz" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Lavandaria Psa Multiservice"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
