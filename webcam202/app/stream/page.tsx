import StreamingComponent from '../components/StreamingComponent'

export default function Stream() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-8">Start Streaming</h1>
      <StreamingComponent />
    </div>
  )
}

