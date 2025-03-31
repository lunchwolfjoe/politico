'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import CampaignLogo from '@/components/ui/CampaignLogo'

export default function ComingSoonPage() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  
  // This would normally be server-side validated, but for demo purposes we'll use a simple client-side check
  const correctPassword = 'Launch2024'
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === correctPassword) {
      setIsAuthenticated(true)
      setError('')
      
      // Set cookie for 24 hours
      document.cookie = "preview-access=true; max-age=86400; path=/;"
      
      // Redirect to home page after a brief delay
      setTimeout(() => {
        router.push('/')
      }, 1500)
    } else {
      setError('Incorrect password. Please try again.')
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center bg-gradient-to-br from-blue-900 to-red-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-12 bg-white p-10 rounded-lg shadow-xl">
          <div className="flex flex-col items-center justify-center">
            <CampaignLogo size={80} />
            <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              N. Lee Plumb for Congress
            </h1>
            <p className="mt-2 text-center text-sm text-gray-600">
              Leadership Forged in Service
            </p>
            <p className="text-center text-sm text-gray-500">
              Innovation Built on Experience
            </p>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Campaign Launch Coming Soon
            </h2>
            <p className="mt-2 text-gray-600">
              Our official campaign website is under construction and will be launching shortly. 
              Enter the password to preview the site.
            </p>
          </div>
          
          {!isAuthenticated ? (
            <div>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                    placeholder="Enter password to access preview"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                
                {error && (
                  <div className="text-red-600 text-sm text-center">
                    {error}
                  </div>
                )}
                
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Access Preview
                  </button>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  For more information, please contact us at{' '}
                  <a href="mailto:info@nleeplumb.com" className="font-medium text-red-700 hover:text-red-800">
                    info@nleeplumb.com
                  </a>
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-green-600 font-medium">
                Authentication successful! Redirecting you to the preview...
              </p>
              <div className="mt-4 flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-700"></div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <footer className="bg-gray-900 text-white py-4 text-center text-xs">
        &copy; {new Date().getFullYear()} N. Lee Plumb for Congress. Paid for by the N. Lee Plumb for Congress Committee.
        <br />Not printed at government expense. Authorized by the candidate.
      </footer>
    </div>
  )
} 