import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/stream" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded text-center">
          Start Streaming
        </Link>
        <Link href="/browse" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded text-center">
          Browse Streams
        </Link>
        <Link href="/profile" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded text-center">
          My Profile
        </Link>
        <Link href="/wallet" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded text-center">
          Wallet
        </Link>
      </div>
    </div>
  )
}

