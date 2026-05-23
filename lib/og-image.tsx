import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const OG_IMAGE_SIZE = { width: 1200, height: 630 }
export const OG_IMAGE_ALT = "ASBAE — Intelligent IT Solutions"
export const OG_IMAGE_CONTENT_TYPE = "image/png"

export async function generateOgImage(): Promise<ImageResponse> {
  const logoPath = join(process.cwd(), "public/images/asbae-logo.png")
  const logoData = await readFile(logoPath)
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0a1628 0%, #132a4a 45%, #1e3a5f 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <img
            src={logoSrc}
            width={88}
            height={88}
            alt=""
            style={{ objectFit: "contain", marginRight: 28 }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              ASBAE
            </div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 500,
                color: "#93c5fd",
                marginTop: 6,
              }}
            >
              asbaetech.com
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: 900,
            letterSpacing: "-0.02em",
          }}
        >
          Intelligent IT Solutions
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            fontWeight: 400,
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.45,
            maxWidth: 920,
          }}
        >
          Documentation as a Service & Unified Governance for enterprise IT
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #3b82f6, #6366f1, #60a5fa)",
          }}
        />
      </div>
    ),
    { ...OG_IMAGE_SIZE }
  )
}
