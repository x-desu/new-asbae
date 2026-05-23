import { writeFile } from "node:fs/promises"
import sharp from "sharp"

const { generateFaviconPng } = await import("../lib/favicon-icon.tsx")

async function verifyCorners(buf, label) {
  const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true })
  const size = info.width
  const corners = [
    [0, 0],
    [size - 1, 0],
    [0, size - 1],
    [size - 1, size - 1],
  ]
  for (const [x, y] of corners) {
    const i = (y * size + x) * 4
    const alpha = data[i + 3]
    if (alpha > 0) {
      throw new Error(`${label} corner (${x},${y}) alpha=${alpha}, expected 0`)
    }
  }
  const center = Math.floor(size / 2)
  const ci = (center * size + center) * 4
  if (data[ci + 3] === 0) {
    throw new Error(`${label} center is fully transparent`)
  }
  console.log(`${label}: corners transparent, center opaque ✓`)
}

const png32 = await generateFaviconPng(32)
const png180 = await generateFaviconPng(180)

await verifyCorners(png32, "32x32")
await verifyCorners(png180, "180x180")

await writeFile("app/icon.png", png32)
await writeFile("app/apple-icon.png", png180)
await writeFile("public/favicon-32.png", png32)
await writeFile("public/favicon-180.png", png180)

console.log("Wrote app/icon.png, app/apple-icon.png, public/favicon-32.png, public/favicon-180.png")
