import Image from "next/image"
import { MoonIcon, StarIcon, CodeIcon } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">Sobre a Luna.dev</h1>
          <p className="text-lg text-gray-300 animate-fade-up animate-delay-100">
            Conheça nossa história e nossa missão de transformar ideias em experiências digitais incríveis.
          </p>
        </div>

        <div className="space-y-16">
          <section className="flex flex-col md:flex-row items-center gap-8 animate-fade-up animate-delay-200">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <MoonIcon className="mr-2 text-secondary" /> Nossa História
              </h2>
              <p className="text-gray-300 mb-4">
                A Luna.dev nasceu da paixão por criar websites que não apenas impressionam visualmente, mas também
                entregam resultados. Fundada por desenvolvedores apaixonados por inovação, nossa agência cresceu com o
                compromisso de transformar a presença digital de nossos clientes.
              </p>
              <p className="text-gray-300">
                Assim como a lua ilumina a noite, buscamos iluminar o caminho digital de nossos clientes, guiando-os
                através do vasto universo online com soluções criativas e eficientes.
              </p>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-80 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-secondary/20 rounded-lg animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src="/luna-clean.png" alt="Luna.dev Logo" width={200} height={200} className="animate-float" />
              </div>
            </div>
          </section>

          <section className="flex flex-col md:flex-row-reverse items-center gap-8 animate-fade-up animate-delay-300">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <StarIcon className="mr-2 text-secondary" /> Nossa Missão
              </h2>
              <p className="text-gray-300 mb-4">
                Nossa missão é criar experiências digitais que conectam marcas com seus públicos de forma significativa.
                Acreditamos que um bom website vai além da estética – ele deve ser funcional, acessível e estratégico.
              </p>
              <p className="text-gray-300">
                Trabalhamos incansavelmente para garantir que cada projeto reflita a identidade única de nossos
                clientes, enquanto oferece uma experiência excepcional aos usuários.
              </p>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-primary to-secondary/30 p-8 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-secondary/20 p-2 rounded-full mr-4">
                    <CodeIcon className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Inovação Constante</h3>
                    <p className="text-gray-300">Buscamos sempre as mais recentes tecnologias e tendências.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary/20 p-2 rounded-full mr-4">
                    <CodeIcon className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Qualidade Excepcional</h3>
                    <p className="text-gray-300">Cada linha de código é escrita com precisão e cuidado.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary/20 p-2 rounded-full mr-4">
                    <CodeIcon className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Resultados Mensuráveis</h3>
                    <p className="text-gray-300">Focamos em criar websites que geram resultados reais.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
