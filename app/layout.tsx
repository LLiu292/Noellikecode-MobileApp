import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "FluentMinds - Helping Kids Speak with Confidence",
  description:
    "A free AI-powered mobile app designed to support children who stutter or clutter with gamified speech practice, real-time feedback, and mindfulness activities.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${poppins.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
