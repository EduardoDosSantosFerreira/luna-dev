"use client"

import { motion } from "framer-motion"
import { Lightbulb, PenTool, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Descoberta",
    description: "Entendemos suas necessidades, objetivos e público-alvo para criar uma estratégia personalizada.",
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Design",
    description: "Criamos layouts modernos e intuitivos que refletem a identidade da sua marca e encantam os usuários.",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Desenvolvimento",
    description: "Transformamos o design em código, utilizando as tecnologias mais avançadas do mercado.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Lançamento",
    description:
      "Realizamos testes rigorosos e lançamos seu site, garantindo uma experiência perfeita para os usuários.",
  },
]

export default function Process() {
  return (
    <section className="py-20 md:py-32 bg-primary-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso Processo</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Conheça como trabalhamos para transformar sua ideia em um website de sucesso.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-secondary/20 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <div className={`inline-flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <span className="text-secondary font-bold text-lg mr-2 md:mx-2">0{index + 1}</span>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-300 mt-2 max-w-md mx-auto md:mx-0">{step.description}</p>
                </div>

                <div className="hidden md:flex items-center justify-center relative z-10">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary flex items-center justify-center text-secondary">
                    {step.icon}
                  </div>
                </div>

                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl"></div>
    </section>
  )
}
