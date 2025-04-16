import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  company: string
  image: string
  quote: string
  rating: number
}

export default function TestimonialCard({ name, company, image, quote, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-gray-600 text-sm">{company}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>

      <blockquote className="text-gray-700 italic">"{quote}"</blockquote>
    </div>
  )
}
