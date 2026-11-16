import { join } from "node:path"
import sharp from "sharp"

/** Keep all artwork inside the circle Google may use to frame the favicon. */
export async function generateFaviconPng(size) {
  const side = Math.round(size * 0.64)
  const mark = await sharp(join(process.cwd(), "public/images/asbae-logo.png"))
    .trim().resize(side, side, { fit: "contain", background: "#ffffff00" }).png().toBuffer()
  return sharp({ create: { width: size, height: size, channels: 4, background: "#ffffff" } })
    .composite([{ input: mark, gravity: "centre" }]).png().toBuffer()
}
