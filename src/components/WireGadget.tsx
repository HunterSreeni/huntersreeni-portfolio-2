import { useEffect, useRef } from "react"
import * as THREE from "three"

type Tilt = { x: number; y: number; z: number }

export type WireGadgetProps = {
  geometry: () => THREE.BufferGeometry
  color: number
  speed?: number
  tilt?: Tilt
  className?: string
}

export default function WireGadget({
  geometry,
  color,
  speed = 0.008,
  tilt = { x: 0.5, y: 0.3, z: 0 },
  className,
}: WireGadgetProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.z = 4

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const geo = geometry()
    const edges = new THREE.EdgesGeometry(geo)
    const mesh = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color }))
    mesh.rotation.set(tilt.x, tilt.y, tilt.z)
    scene.add(mesh)

    let frame = 0
    function resize() {
      if (!canvas) return
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      if (!w || !h) return
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    window.addEventListener("resize", resize)
    resize()

    function animate() {
      if (!reduceMotion) {
        mesh.rotation.x += speed
        mesh.rotation.y += speed * 1.3
      }
      renderer.render(scene, camera)
      frame = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
      edges.dispose()
      geo.dispose()
      mesh.material.dispose()
      renderer.dispose()
    }
  }, [geometry, color, speed, tilt])

  return (
    <div className={className} aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  )
}
