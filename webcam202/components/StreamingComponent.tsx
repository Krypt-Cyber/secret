'use client'

import { useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'

interface ChatMessage {
  user: string
  message: string
}

export default function StreamingComponent() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isStreaming, setIsStreaming] = useState(false)
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [messageInput, setMessageInput] = useState('')
  const [socket, setSocket] = useState<Socket | null>(null)

  useEffect(() => {
    const newSocket = io('http://localhost:3001') // Replace with your actual WebSocket server URL
    setSocket(newSocket)

    newSocket.on('chat message', (msg: ChatMessage) => {
      setChatMessages(prevMessages => [...prevMessages, msg])
    })

    return () => {
      newSocket.disconnect()
    }
  }, [])

  const startStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
      setIsStreaming(true)
      // TODO: Implement WebRTC connection to server
    } catch (error) {
      console.error('Error accessing media devices:', error)
    }
  }

  const stopStream = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
      tracks.forEach(track => track.stop())
    }
    setIsStreaming(false)
  }

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (socket && messageInput.trim()) {
      const chatMessage: ChatMessage = { user: 'You', message: messageInput.trim() }
      socket.emit('chat message', chatMessage)
      setChatMessages(prevMessages => [...prevMessages, chatMessage])
      setMessageInput('')
    }
  }

  useEffect(() => {
    return () => {
      stopStream()
    }
  }, [])

  return (
    <div className="flex flex-col md:flex-row items-start space-x-4">
      <div className="flex flex-col items-center">
        <video ref={videoRef} autoPlay muted className="w-full max-w-2xl mb-4" />
        {!isStreaming ? (
          <button onClick={startStream} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Start Stream
          </button>
        ) : (
          <button onClick={stopStream} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Stop Stream
          </button>
        )}
      </div>
      <div className="w-full md:w-64 mt-4 md:mt-0">
        <div className="bg-gray-100 p-4 rounded-lg h-96 overflow-y-auto mb-4">
          {chatMessages.map((msg, index) => (
            <div key={index} className="mb-2">
              <span className="font-bold">{msg.user}:</span> {msg.message}
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="flex">
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="flex-grow px-3 py-2 text-base leading-tight text-gray-700 border rounded-l shadow appearance-none focus:outline-none focus:shadow-outline"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

