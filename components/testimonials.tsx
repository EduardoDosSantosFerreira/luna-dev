"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "CEO, TechSolutions",
    content:
      "A Luna.dev transformou completamente nossa presença online. O novo site não só é visualmente impressionante, mas também resultou em um aumento significativo nas conversões. A equipe foi extremamente profissional e atenciosa durante todo o processo.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Ana Oliveira",
    role: "Marketing Director, E-Shop",
    content:
      "Trabalhar com a Luna.dev foi uma experiência incrível. Eles entenderam perfeitamente nossas necessidades e entregaram um e-commerce que superou todas as nossas expectativas. O site é rápido, intuitivo e as vendas aumentaram 40% no primeiro mês.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Roberto Mendes",
    role: "Founder, Startup Inovadora",
    content:
      "A equipe da Luna.dev é simplesmente excepcional. Eles não apenas criaram um site incrível para nossa startup, mas também nos orientaram em todo o processo com insights valiosos. O resultado final é um site que realmente nos diferencia no mercado.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 8000)

    return () => clearInterval(interval)
  }, [current])

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A satisfação de nossos clientes é o nosso maior orgulho.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
            <Quote className="h-16 w-16 text-secondary/20" />
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-primary-dark/50 backdrop-blur-sm border border-secondary/10 rounded-lg p-8 md:p-10">
                    <p className="text-lg md:text-xl text-gray-300 mb-6">"{testimonial.content}"</p>

                    <div className="flex items-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-secondary" : "bg-secondary/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full md:-translate-x-12">
            <button
              onClick={prev}
              className="bg-primary-dark/50 backdrop-blur-sm border border-secondary/20 rounded-full p-2 text-secondary hover:bg-secondary hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full md:translate-x-12">
            <button
              onClick={next}
              className="bg-primary-dark/50 backdrop-blur-sm border border-secondary/20 rounded-full p-2 text-secondary hover:bg-secondary hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl"></div>
    </section>
  )
}
