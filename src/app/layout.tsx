import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SidebarProvider } from '@/context/sidebarContext'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Açaí do Dellon',
  description: 'Site do Melhor Açaí de Campina!',
  icons: [
    {
      url: "/favicon.ico"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <SidebarProvider>
        <body className={inter.className}>{children}</body>
      </SidebarProvider>
    </html>
  )
}
