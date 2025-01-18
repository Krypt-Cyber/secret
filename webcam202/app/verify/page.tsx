'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

export default function VerifyPage() {
  const router = useRouter()
  const [isVerifying, setIsVerifying] = useState(true)

  useEffect(() => {
    const verify = async () => {
      try {
        const response = await fetch('/api/verify', {
          method: 'POST'
        })
        
        if (response.ok) {
          router.push('/dashboard')
        }
      } catch (error) {
        console.error('Verification failed:', error)
        setIsVerifying(false)
      }
    }

    verify()
  }, [router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-6">
          <img 
            src="/logo.png" 
            alt="Platform Logo" 
            className="h-8 mr-2"
          />
          <h1 className="text-2xl font-bold">platform.com</h1>
        </div>
        
        <div className="text-center">
          <h2 className="text-xl mb-4">
            Verifying you are human. This may take a few seconds.
          </h2>
          
          {isVerifying ? (
            <div className="flex justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
            </div>
          ) : (
            <div className="text-red-500">
              Verification failed. Please try again later.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

