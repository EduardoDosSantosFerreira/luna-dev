"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { projects } from "@/lib/projects"

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0)
  const featuredProjects = projects.slice(0, 3)

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso Portfólio</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com dedicação e excelência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="relative overflow-hidden rounded-lg bg-primary-dark/50 border border-secondary/10 group-hover:border-secondary/30 transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <Link
                    href={project.url}
                    target="_blank"
                    className="inline-flex items-center text-secondary hover:underline"
                  >
                    Visitar site <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                <div
                  className={`absolute top-3 right-3 bg-secondary text-primary text-xs font-bold px-2 py-1 rounded ${
                    activeIndex === index ? "animate-pulse" : ""
                  }`}
                >
                  {project.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            <Link href="/portfolio" className="flex items-center">
              Ver todos os projetos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <div className="absolute top-1/3 left-0 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl"></div>
    </section>
  )
}
