"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Code, Sparkles, Zap } from "lucide-react"

export default function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-typing")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current)
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 overflow-hidden ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center bg-secondary/20 rounded-full px-4 py-2 text-secondary"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              <span>Transformando ideias em realidade digital</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Criamos websites <span className="text-secondary">inovadores</span> que impressionam
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-300 max-w-lg"
            >
              A Luna.dev é uma agência especializada em desenvolvimento de websites modernos, responsivos e otimizados
              para resultados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="bg-secondary hover:bg-secondary/80 text-primary" size="lg">
                <Link href="/contato" className="flex items-center">
                  Iniciar Projeto <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/portfolio" className="flex items-center">
                  Ver Portfólio <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-10"
            >
              <div className="flex items-center">
                <div className="bg-secondary/20 p-2 rounded-full mr-3">
                  <Code className="text-secondary h-5 w-5" />
                </div>
                <span className="text-sm">100+ Projetos</span>
              </div>
              <div className="flex items-center">
                <div className="bg-secondary/20 p-2 rounded-full mr-3">
                  <Zap className="text-secondary h-5 w-5" />
                </div>
                <span className="text-sm">Tecnologia de ponta</span>
              </div>
            </motion.div>
          </div>

          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-full"
          >
             <div className="relative z-10 bg-gradient-to-br from-primary-dark to-secondary/30 rounded-lg p-1">
              <div className="bg-primary-dark rounded-lg overflow-hidden">
                <div className="flex items-center bg-primary-dark/80 px-4 py-2 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-xs text-gray-400">luna.dev</div>
                </div>
                <div className="p-4 md:p-6">
                  <div className="space-y-4">
                    <div className="h-8 bg-secondary/10 rounded w-3/4"></div>
                    <div className="h-4 bg-secondary/10 rounded w-full"></div>
                    <div className="h-4 bg-secondary/10 rounded w-5/6"></div>
                    <div className="h-4 bg-secondary/10 rounded w-4/6"></div>
                    <div className="h-10 bg-secondary/20 rounded w-1/3 mt-6"></div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="h-24 bg-secondary/10 rounded"></div>
                    <div className="h-24 bg-secondary/10 rounded"></div>
                    <div className="h-24 bg-secondary/10 rounded"></div>
                    <div className="h-24 bg-secondary/10 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/30 rounded-full filter blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full filter blur-xl"></div> 
          </motion.div> */}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 flex justify-center items-center">
          <svg 
            className="w-6 h-6 text-white/60" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
