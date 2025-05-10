"use client"

import { motion } from "framer-motion"
import { Globe, ShoppingCart, Smartphone, Search, Layers, Rocket } from "lucide-react"

const services = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Websites Institucionais",
    description:
      "Criamos websites profissionais que representam a identidade da sua marca e conectam você com seu público.",
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "E-commerce",
    description: "Desenvolvemos lojas virtuais completas, seguras e otimizadas para converter visitantes em clientes.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Aplicações Web",
    description: "Construímos aplicações web personalizadas que atendem às necessidades específicas do seu negócio.",
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "SEO",
    description:
      "Otimizamos seu site para os motores de busca, aumentando sua visibilidade e atraindo mais visitantes.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Landing Pages",
    description: "Criamos páginas de conversão eficientes que geram leads e impulsionam suas campanhas de marketing.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Manutenção",
    description:
      "Oferecemos suporte contínuo para garantir que seu site esteja sempre atualizado, seguro e funcionando perfeitamente.",
  },
]

export default function Services() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Oferecemos soluções digitais completas para transformar sua presença online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-dark/50 backdrop-blur-sm border border-secondary/10 rounded-lg p-6 hover:border-secondary/30 transition-all duration-300 group h-full flex flex-col"
            >
              <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-300 flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl"></div>
    </section>
  )
}
