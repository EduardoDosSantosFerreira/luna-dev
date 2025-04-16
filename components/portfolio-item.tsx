"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface PortfolioItemProps {
  title: string
  category: string
  image: string
  description: string
}

export default function PortfolioItem({ title, category, image, description }: PortfolioItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl"
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-[4/3] relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <p className="text-sm font-medium text-[#60a5fa] mb-1">{category}</p>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-white/80 mb-3">{description}</p>
            <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/20">
              View Project
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{category}</DialogDescription>
          </DialogHeader>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
          <div className="space-y-4">
            <p className="text-gray-700">{description}</p>
            <p className="text-gray-700">
              This project showcases our expertise in {category.toLowerCase()} development. We worked closely with the
              client to understand their needs and deliver a solution that exceeded their expectations.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Next.js</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
            </div>
            <div className="flex justify-end">
              <Button className="bg-[#60a5fa] hover:bg-[#3b82f6]">
                Visit Website <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
