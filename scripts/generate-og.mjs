/**
 * Generates public/og-image.png (1200×630) for WhatsApp and other crawlers.
 * Run: npx tsx scripts/generate-og.mjs
 */
import { writeFile } from "node:fs/promises"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import sharp from "sharp"

const WIDTH = 1200
const HEIGHT = 630

async function main() {
  const logoPath = join(process.cwd(), "public/images/asbae-logo.png")
  const logoBuf = await readFile(logoPath)
  const logoB64 = logoBuf.toString("base64")

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="45%" style="stop-color:#132a4a"/>
      <stop offset="100%" style="stop-color:#1e3a5f"/>
    </linearGradient>
    <linearGradient id="bar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#3b82f6"/>
      <stop offset="50%" style="stop-color:#6366f1"/>
      <stop offset="100%" style="stop-color:#60a5fa"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect x="0" y="${HEIGHT - 6}" width="${WIDTH}" height="6" fill="url(#bar)"/>
  <rect x="80" y="168" width="120" height="120" rx="28" fill="#ffffff"/>
  <image href="data:image/png;base64,${logoB64}" x="100" y="188" width="80" height="80" preserveAspectRatio="xMidYMid meet"/>
  <text x="228" y="218" font-family="system-ui, sans-serif" font-size="52" font-weight="700" fill="#ffffff">ASBAE</text>
  <text x="228" y="258" font-family="system-ui, sans-serif" font-size="24" font-weight="500" fill="#93c5fd">www.asbaetech.in</text>
  <text x="80" y="360" font-family="system-ui, sans-serif" font-size="56" font-weight="700" fill="#ffffff">Intelligent IT Solutions</text>
  <text x="80" y="420" font-family="system-ui, sans-serif" font-size="28" font-weight="400" fill="rgba(255,255,255,0.82)">Documentation as a Service &amp; Unified Governance for enterprise IT</text>
</svg>`

  const png = await sharp(Buffer.from(svg)).png().toBuffer()
  const outPath = join(process.cwd(), "public/og-image.png")
  await writeFile(outPath, png)
  console.log(`Wrote ${outPath} (${WIDTH}×${HEIGHT})`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
