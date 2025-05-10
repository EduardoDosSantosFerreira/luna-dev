import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary-dark border-t border-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10">
                <Image src="/luna-clean.png" alt="Luna.dev Logo" fill className="object-contain" />
              </div>
              <span className="font-bold text-xl">Luna.dev</span>
            </Link>
            <p className="text-gray-400 mb-4">Transformando ideias em experiências digitais incríveis.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-secondary transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-secondary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-secondary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  Desenvolvimento Web
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  Aplicações Web
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  SEO
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contato@luna.dev</li>
              <li>(11) 99999-9999</li>
              <li>
                Av. Paulista, 1000
                <br />
                São Paulo, SP
                <br />
                Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Luna.dev. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-secondary transition-colors text-sm">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-gray-400 hover:text-secondary transition-colors text-sm">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
