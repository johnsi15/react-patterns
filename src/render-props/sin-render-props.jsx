import { useState, useEffect } from 'react'

function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = e => setPosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div>
      <p>
        Posición: {position.x}, {position.y}
      </p>
    </div>
  )
}

function Cat() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = e => setPosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div>
      <img src='cat.jpg' style={{ position: 'absolute', left: position.x, top: position.y }} alt='Gato' />
    </div>
  )
}

export { MouseTracker, Cat }
