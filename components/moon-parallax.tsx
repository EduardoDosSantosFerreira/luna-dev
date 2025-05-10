"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function MoonParallax() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const moonY = scrollY * 0.2
  const starsY = scrollY * 0.1

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-10" style={{ transform: `translateY(${starsY}px)` }}>
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
        <div className="absolute top-40 left-1/2 w-2 h-2 bg-white rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-60 left-2/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-80 left-3/4 w-2 h-2 bg-white rounded-full animate-pulse delay-400"></div>
        <div className="absolute top-10 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-30 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse delay-600"></div>
        <div className="absolute top-50 right-1/2 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-70 right-2/3 w-2 h-2 bg-white rounded-full animate-pulse delay-800"></div>
        <div className="absolute top-90 right-3/4 w-1 h-1 bg-white rounded-full animate-pulse delay-900"></div>
      </div>

      <div
        className="absolute top-20 right-10 md:right-20 lg:right-40 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 z-10"
        style={{ transform: `translateY(${moonY}px)` }}
      >
        <div className="relative w-full h-full">
          <Image src="/luna-clean.png" alt="Luna Moon" fill className="object-contain animate-float" priority />
        </div>
        <div className="absolute inset-0 -z-10 bg-secondary/10 rounded-full filter blur-xl animate-pulse"></div>
      </div>
    </div>
  )
}
