import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { useEffect } from 'react'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(()=>{});
  return (
    <html lang="en">
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>        
        <input type="text" placeholder="search"/>
        <ul>
          <li><Link href="/read/1">html</Link></li>
          <li><Link href="/read/2">css</Link></li>
        </ul>
        <article>{children}</article>
        <ul>
          <li><Link href="/create">create</Link></li>
          <li><Link href="/update/1">update</Link></li>
          <li><button>delete</button></li>
        </ul>
      </body>
    </html>
  )
}
