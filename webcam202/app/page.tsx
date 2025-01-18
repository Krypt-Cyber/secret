"use client";

import { useEffect, useState } from 'react';
import { StreamCard } from '../components/stream-card'; 

export default function Home() { 
  const [streams, setStreams] = useState([]); 

  useEffect(() => { 
    const fetchStreams = async () => { 
      const response = await fetch('/api/streams'); 
      const data = await response.json(); 
      setStreams(data); 
    }; 

    fetchStreams(); 
  }, []); 

  return ( 
    <main className='container py-6'> 
      <h1 className='text-3xl font-bold mb-6'>Live Streams</h1> 
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'> 
        {streams.map((stream) => ( 
          <StreamCard key={stream.id} {...stream} /> 
        ))} 
      </div> 
    </main> 
  ); 
}
