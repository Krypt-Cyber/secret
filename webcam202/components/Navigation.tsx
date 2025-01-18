'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className={pathname === '/' ? 'font-bold' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className={pathname === '/dashboard' ? 'font-bold' : ''}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/browse" className={pathname === '/browse' ? 'font-bold' : ''}>
            Browse
          </Link>
        </li>
        <li>
          <Link href="/profile" className={pathname === '/profile' ? 'font-bold' : ''}>
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  )
}

