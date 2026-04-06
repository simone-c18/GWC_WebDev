import {Circle} from "./Circle"

export function createBackground(circles: Circle[]) {
  return circles
    .map(
      ({ x, y, size = 25 }) =>
        `radial-gradient(circle ${size}vw at ${x}vw ${y}vh, var(--color-a10), transparent 60%)`
    )
    .join(",")
}