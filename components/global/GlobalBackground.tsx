"use client"

import { useBackground } from "../../app/lib/backgroundContext"
import { createBackground } from "../../app/lib/createBackground"

export default function GlobalBackground() {
  const { circles } = useBackground()

  return (
    <div
      className="fixed inset-0 -z-10 bg-no-repeat bg-fixed pointer-events-none"
      style={{ backgroundImage: createBackground(circles) }}
    />
  )
}