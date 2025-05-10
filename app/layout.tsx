import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import StarBackground from "@/components/star-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luna.dev | Desenvolvimento de Websites Inovadores",
  description:
    "Agência especializada em desenvolvimento de websites modernos e inovadores. Transforme sua presença digital com Luna.dev.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/luna-clean.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${inter.className} bg-[#0f0f10] text-white relative overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <StarBackground />
          <Navbar />
          <main className="min-h-screen overflow-x-hidden">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
