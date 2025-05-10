"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg bg-primary-dark/50 border border-secondary/10 group-hover:border-secondary/30 transition-all duration-300 h-full flex flex-col">
        <div className="relative h-64">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>

          <div
            className={`absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          >
            <Link
              href={project.url}
              target="_blank"
              className="bg-secondary text-primary px-4 py-2 rounded-full flex items-center"
            >
              Visitar site <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">{project.title}</h3>
          <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold bg-secondary/20 text-secondary px-2 py-1 rounded">
              {project.category}
            </span>
            <Link
              href={project.url}
              target="_blank"
              className="inline-flex items-center text-secondary hover:underline"
            >
              Detalhes <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
