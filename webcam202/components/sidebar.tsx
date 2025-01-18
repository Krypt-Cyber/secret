'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Users, Video, MessageSquare, Shield, DollarSign, BarChart, AlertTriangle, Settings } from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: BarChart },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'Streams', href: '/admin/streams', icon: Video },
  { name: 'Chat Logs', href: '/admin/chats', icon: MessageSquare },
  { name: 'Moderation', href: '/admin/moderation', icon: Shield },
  { name: 'Payments', href: '/admin/payments', icon: DollarSign },
  { name: 'Reports', href: '/admin/reports', icon: AlertTriangle },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white shadow-sm">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  group flex items-center px-2 py-2 text-sm font-medium rounded-md
                  ${isActive
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                <item.icon
                  className={`
                    mr-3 h-6 w-6
                    ${isActive
                      ? 'text-gray-500'
                      : 'text-gray-400 group-hover:text-gray-500'
                    }
                  `}
                />
                {item.name}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

