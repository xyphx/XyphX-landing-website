import React, { useEffect, useState } from 'react'

export default function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
         useEffect(() => {
            const handleMouseMove = (e: MouseEvent) => {
              setMousePosition({ x: e.clientX, y: e.clientY });
            };
            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
          }, []);
  return (
    <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-700/10"></div>
            <div 
              className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
              style={{
                left: mousePosition.x - 192,
                top: mousePosition.y - 192,
                transition: 'all 0s ease'
              }}
            ></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1)_0%,transparent_50%)]"></div>
          </div>
  )
}
