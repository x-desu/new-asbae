"use client"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#060d18] px-4 text-white">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <p className="max-w-md text-center text-sm text-white/60">
        We could not load this page. Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium transition-colors hover:bg-blue-500"
      >
        Try again
      </button>
    </div>
  )
}
