import type { Metadata } from "next"
import { Onest } from "next/font/google"

import { site } from "@/lib/content"

import "./globals.css"

const brandFont = Onest({
  subsets: ["latin"],
  variable: "--font-brand-family",
  weight: ["400", "500", "600", "700", "800"]
})

const bodyFont = Onest({
  subsets: ["latin"],
  variable: "--font-body-family",
  weight: ["400", "500", "600", "700", "800"]
})

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  applicationName: site.name,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png"
  },
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website"
  },
  other: {
    google: "notranslate"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="notranslate" lang="en" translate="no">
      <body className={`${brandFont.variable} ${bodyFont.variable} bg-paper font-body text-ink antialiased`}>
        {children}
      </body>
    </html>
  )
}
