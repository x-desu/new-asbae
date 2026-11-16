import { writeFile } from "node:fs/promises"
import { generateFaviconPng } from "../lib/favicon-icon.mjs"

for (const [size, paths] of [
  [32,["public/favicon-32.png"]],
  [96,["app/icon.png","public/favicon-96.png"]],
  [180,["app/apple-icon.png","public/favicon-180.png"]],
  [192,["public/android-chrome-192x192.png"]],
  [512,["public/android-chrome-512x512.png"]],
]) {
  const png=await generateFaviconPng(size)
  for (const path of paths) await writeFile(path,png)
}
// ICO directory embeds PNG images so legacy favicon requests get the same safe padding.
const sizes=[16,32,48]
const images=await Promise.all(sizes.map(generateFaviconPng))
const directory=Buffer.alloc(6+16*sizes.length)
directory.writeUInt16LE(1,2);directory.writeUInt16LE(sizes.length,4)
let offset=directory.length
images.forEach((image,index)=>{const entry=6+16*index;directory[entry]=sizes[index];directory[entry+1]=sizes[index];directory.writeUInt16LE(1,entry+4);directory.writeUInt16LE(32,entry+6);directory.writeUInt32LE(image.length,entry+8);directory.writeUInt32LE(offset,entry+12);offset+=image.length})
await writeFile("app/favicon.ico",Buffer.concat([directory,...images]))
console.log("Generated padded favicons at 16, 32, 48, 96, 180, 192 and 512px")
