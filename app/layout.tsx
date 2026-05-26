import { ReactNode } from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { Metadata } from "next"

// Ensure this file exists in the same directory!
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

// FIXED: Added the 'export' keyword
export const metadata: Metadata = {
  title: "isMaster Pro",
  description:
    "isMaster Pro is a free and open-source typescript library for building web applications. It provides a set of tools and components that make it easy to create modern, responsive, and accessible web applications.",
}

// FIXED: Changed React.ReactNode to ReactNode
export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        geist.variable,
        "font-sans"
      )}
    >
      <body className="bg-black-100 font-poppins min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
