/** Generate the current 1200×630 social card. Run: node scripts/generate-og.mjs */
import { writeFile, readFile } from "node:fs/promises"
import { join } from "node:path"
import sharp from "sharp"

const WIDTH = 1200
const HEIGHT = 630
async function main() {
  const logo = await sharp(await readFile(join(process.cwd(), "public/images/asbae-logo.png"))).resize(54,54).png().toBuffer()
  const mountain = await sharp(join(process.cwd(), "public/images/asbae-mountain-hero.webp")).resize(WIDTH,HEIGHT,{fit:"cover",position:"centre"}).png().toBuffer()
  const overlay = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="shade" x2="0" y2="1"><stop stop-color="#0c1420" stop-opacity=".85"/><stop offset=".55" stop-color="#0c1420" stop-opacity=".5"/><stop offset="1" stop-color="#0c1420" stop-opacity=".92"/></linearGradient></defs><rect width="1200" height="630" fill="url(#shade)"/><g font-family="Arial, sans-serif"><text x="128" y="96" fill="#edf3fc" font-size="28" font-weight="700" letter-spacing="3">ASBAE</text><text x="1128" y="94" text-anchor="end" fill="#c0d0e2" font-size="18">asbaetech.in</text><text x="72" y="199" fill="#b5cbe3" font-size="14" letter-spacing="3">ENTERPRISE IT &amp; DIGITAL GOVERNANCE</text><text x="68" y="290" fill="#fff" font-size="68" font-weight="600" letter-spacing="-2">From complex ideas</text><text x="68" y="368" fill="#fff" font-size="68" font-weight="600" letter-spacing="-2">to systems that work.</text><text x="72" y="437" fill="#dde7f2" font-size="23">Enterprise platforms. Clear documentation. Better governance.</text><line x1="72" y1="521" x2="1128" y2="521" stroke="#ffffff" stroke-opacity=".22"/><text x="72" y="565" fill="#bfcee0" font-size="15" letter-spacing="1">ASBAE TECHNOLOGIES LLP</text><text x="1128" y="565" text-anchor="end" fill="#bfcee0" font-size="15">Lucknow, India</text></g></svg>`)
  const card = await sharp(mountain).composite([{input:overlay},{input:logo,left:68,top:55}]).png().toBuffer()
  for (const name of ["og-image.png", "asbae-social-2026-11.png"]) await writeFile(join(process.cwd(),"public",name),card)
  console.log(`Generated current ASBAE share card (${WIDTH}×${HEIGHT})`)
}
main().catch(error=>{console.error(error);process.exit(1)})
