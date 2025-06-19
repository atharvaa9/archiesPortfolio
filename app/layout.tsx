import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
})

export const metadata: Metadata = {
  title: "Archies Patil | Project Manager Portfolio",
  description:
    "Seasoned Project Manager with 8+ years of experience driving projects from idea to impact. Specializing in project operations, strategic planning, and team leadership.",
  keywords: "Project Manager, Operations, Strategy, Agile, PMP, Portfolio Management",
  authors: [{ name: "Archies Patil" }],
  openGraph: {
    title: "Archies Patil | Project Manager Portfolio",
    description: "Seasoned Project Manager with 8+ years of experience driving projects from idea to impact.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archies Patil | Project Manager Portfolio",
    description: "Seasoned Project Manager with 8+ years of experience driving projects from idea to impact.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
