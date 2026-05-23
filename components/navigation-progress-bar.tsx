'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// Configure NProgress
NProgress.configure({ 
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.08
})

export function NavigationProgressBar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Start progress on every pathname/searchParams change
    // Since Next.js doesn't provide a direct "routeChangeStart" in App Router yet,
    // we use a combination of click listeners and effect cleanup.
    
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const anchor = target.closest('a')

      if (anchor && 
          anchor.href && 
          anchor.href.startsWith(window.location.origin) && 
          !anchor.target && 
          !event.ctrlKey && 
          !event.metaKey && 
          !event.shiftKey && 
          !event.altKey) {
        
        const url = new URL(anchor.href)
        if (url.pathname !== window.location.pathname || url.search !== window.location.search) {
          NProgress.start()
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  useEffect(() => {
    // Finish progress when the route change is complete
    NProgress.done()
  }, [pathname, searchParams])

  return null
}
