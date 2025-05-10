"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SendIcon, PhoneIcon, MailIcon, MapPinIcon } from "lucide-react"

export default function ContatoPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulando envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      phone: "",
      message: "",
    })

    // Reset após 5 segundos
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">Entre em Contato</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fade-up animate-delay-100">
            Estamos prontos para transformar sua ideia em realidade. Fale conosco e vamos começar a criar algo incrível
            juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fade-right">
            <div className="bg-primary-dark/50 backdrop-blur-sm p-8 rounded-lg border border-secondary/20">
              <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>

              {isSubmitted ? (
                <div className="bg-secondary/20 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SendIcon className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mensagem Enviada!</h3>
                  <p className="text-gray-300">Obrigado por entrar em contato. Retornaremos em breve!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Nome
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-primary-dark/50 border-secondary/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-primary-dark/50 border-secondary/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="bg-primary-dark/50 border-secondary/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-primary-dark/50 border-secondary/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/80 text-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <span className="animate-spin mr-2">◌</span> Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <SendIcon className="mr-2 h-4 w-4" /> Enviar Mensagem
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          <div className="animate-fade-left">
            <div className="bg-primary-dark/50 backdrop-blur-sm p-8 rounded-lg border border-secondary/20 h-full">
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary/20 p-3 rounded-full mr-4">
                    <PhoneIcon className="text-secondary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Telefone</h3>
                    <p className="text-gray-300">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary/20 p-3 rounded-full mr-4">
                    <MailIcon className="text-secondary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-300">contato@luna.dev</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary/20 p-3 rounded-full mr-4">
                    <MapPinIcon className="text-secondary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Endereço</h3>
                    <p className="text-gray-300">
                      Av. Paulista, 1000
                      <br />
                      São Paulo, SP
                      <br />
                      Brasil
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-bold mb-4">Horário de Atendimento</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
