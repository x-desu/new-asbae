export interface ViewTransitionOptions {
  duration?: number
  easing?: string
}

export class ViewTransitionManager {
  private static instance: ViewTransitionManager
  private isTransitioning = false

  static getInstance(): ViewTransitionManager {
    if (!ViewTransitionManager.instance) {
      ViewTransitionManager.instance = new ViewTransitionManager()
    }
    return ViewTransitionManager.instance
  }

  // Check if View Transition API is supported
  private isViewTransitionSupported(): boolean {
    return "startViewTransition" in document
  }

  // Smooth scroll to element with view transition
  async transitionToSection(targetId: string, options: ViewTransitionOptions = {}): Promise<void> {
    if (this.isTransitioning) return

    const targetElement = document.getElementById(targetId.replace("#", ""))
    if (!targetElement) {
      console.warn(`Element with id "${targetId}" not found`)
      return
    }

    this.isTransitioning = true

    try {
      if (this.isViewTransitionSupported()) {
        // Use View Transition API for supported browsers
        await this.performViewTransition(targetElement, options)
      } else {
        // Fallback to smooth scroll for unsupported browsers
        await this.performSmoothScroll(targetElement, options)
      }
    } finally {
      this.isTransitioning = false
    }
  }

  private async performViewTransition(targetElement: HTMLElement, options: ViewTransitionOptions): Promise<void> {
    return new Promise((resolve) => {
      // @ts-ignore - View Transition API is new
      const transition = document.startViewTransition(() => {
        this.scrollToElement(targetElement)
      })

      transition.finished
        .then(() => {
          resolve()
        })
        .catch(() => {
          // Fallback if transition fails
          this.performSmoothScroll(targetElement, options).then(resolve)
        })
    })
  }

  private async performSmoothScroll(targetElement: HTMLElement, options: ViewTransitionOptions): Promise<void> {
    return new Promise((resolve) => {
      const startPosition = window.pageYOffset
      const targetPosition = targetElement.offsetTop - 80 // Account for fixed header
      const distance = targetPosition - startPosition
      const duration = options.duration || 800
      let startTime: number | null = null

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)

        // Easing function for smooth animation
        const easeInOutCubic = (t: number): number => {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
        }

        const easedProgress = easeInOutCubic(progress)
        const currentPosition = startPosition + distance * easedProgress

        window.scrollTo(0, currentPosition)

        if (progress < 1) {
          requestAnimationFrame(animateScroll)
        } else {
          resolve()
        }
      }

      requestAnimationFrame(animateScroll)
    })
  }

  private scrollToElement(element: HTMLElement): void {
    const headerOffset = 80
    const elementPosition = element.offsetTop
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }

  // Add CSS for view transitions
  static addViewTransitionStyles(): void {
    if (!document.getElementById("view-transition-styles")) {
      const style = document.createElement("style")
      style.id = "view-transition-styles"
      style.textContent = `
        /* View Transition API styles */
        ::view-transition-old(root),
        ::view-transition-new(root) {
          animation-duration: 0.5s;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        ::view-transition-old(root) {
          animation-name: slide-out-up;
        }

        ::view-transition-new(root) {
          animation-name: slide-in-down;
        }

        @keyframes slide-out-up {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-20px);
            opacity: 0;
          }
        }

        @keyframes slide-in-down {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Smooth scroll behavior fallback */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced section transitions */
        section {
          scroll-margin-top: 80px;
        }
      `
      document.head.appendChild(style)
    }
  }
}

// Utility function for easy access
export const viewTransition = ViewTransitionManager.getInstance()

// Initialize styles when module loads
if (typeof document !== "undefined") {
  ViewTransitionManager.addViewTransitionStyles()
}
