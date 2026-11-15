"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  return <button type="button" className="theme-toggle" aria-label="Toggle light and dark theme" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
    <Sun className="theme-sun" size={18} aria-hidden/><Moon className="theme-moon" size={18} aria-hidden/>
  </button>
}
