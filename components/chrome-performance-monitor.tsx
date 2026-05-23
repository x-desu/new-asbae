'use client'

import { useEffect } from 'react'
import { onCLS, onLCP, onFCP, onTTFB, onINP } from 'web-vitals'

/**
 * ChromePerformanceMonitor
 * Uses Chrome-native Performance Observer API and Web Vitals library
 * to monitor core web vitals and long tasks.
 */
export function ChromePerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // 1. Web Vitals Monitoring
    const logMetric = (metric: any) => {
      // In production, you would send this to an analytics endpoint
      console.log(`[Chrome-Performance] ${metric.name}:`, metric.value)
    }

    onCLS(logMetric)
    onLCP(logMetric)
    onFCP(logMetric)
    onTTFB(logMetric)
    onINP(logMetric)

    // 2. PerformanceObserver for Long Tasks (Main Thread Blocking)
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.warn('[Chrome-Performance] Long Task Detected (Main Thread Blocked):', {
            duration: entry.duration,
            startTime: entry.startTime,
            name: entry.name,
          })
        })
      })

      longTaskObserver.observe({ entryTypes: ['longtask'] })

      // 3. PerformanceObserver for Layout Shifts
      const clsObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            console.warn('[Chrome-Performance] Layout Shift Detected:', {
              value: entry.value,
              sources: entry.sources,
            })
          }
        })
      })

      clsObserver.observe({ type: 'layout-shift', buffered: true })

      return () => {
        longTaskObserver.disconnect()
        clsObserver.disconnect()
      }
    } catch (e) {
      console.error('[Chrome-Performance] PerformanceObserver not fully supported:', e)
    }
  }, [])

  return null
}
