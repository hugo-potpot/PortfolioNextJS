import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from "@/app/NavBar/navbar";
import Footer from "@/app/footer/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Portfolio d'Hugo Potier",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
        <NavBar/>
      <main className="bg-gray-900">
        {children}
      </main>
        <Footer/>
      </body>
      </html>
  )
}
