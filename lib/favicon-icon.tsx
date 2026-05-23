import { join } from "node:path"
import sharp from "sharp"

/** Source artwork: white squircle + black “A” mark (user reference). */
const FAVICON_SOURCE_PATH = join(process.cwd(), "public/images/asbae-favicon-source.png")

/** iOS-style squircle corner radius (~22.37% of side). */
function squircleRadius(size: number): number {
  return Math.round(size * 0.2237)
}

function squircleMaskSvg(size: number): Buffer {
  const rx = squircleRadius(size)
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect x="0" y="0" width="${size}" height="${size}" rx="${rx}" ry="${rx}" fill="#ffffff"/>
</svg>`
  )
}

/** Crop to artwork via trim (source screenshot is not center-aligned). */
async function loadSourceSquare(): Promise<Buffer> {
  const trimmed = await sharp(FAVICON_SOURCE_PATH).trim({ threshold: 20 }).png().toBuffer()
  const meta = await sharp(trimmed).metadata()
  const side = Math.max(meta.width ?? 0, meta.height ?? 0)
  const width = meta.width ?? side
  const height = meta.height ?? side
  const padX = Math.floor((side - width) / 2)
  const padY = Math.floor((side - height) / 2)

  return sharp({
    create: {
      width: side,
      height: side,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: trimmed, top: padY, left: padX }])
    .png()
    .toBuffer()
}

/**
 * RGBA PNG: transparent outside squircle, artwork inside.
 * Source already contains white squircle + logo — resize then mask only.
 */
export async function generateFaviconPng(outputSize: number): Promise<Buffer> {
  const source = await loadSourceSquare()

  const resized = await sharp(source)
    .resize(outputSize, outputSize, { kernel: sharp.kernel.lanczos3 })
    .ensureAlpha()
    .png()
    .toBuffer()

  const mask = await sharp(squircleMaskSvg(outputSize))
    .resize(outputSize, outputSize)
    .ensureAlpha()
    .png()
    .toBuffer()

  return sharp(resized).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer()
}
