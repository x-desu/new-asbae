import type { ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"

/** Gluestack-inspired spacing scale (HStack / VStack / Box) for web-only layout. */
const spaceMap = {
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4",
  xl: "gap-5",
  "2xl": "gap-6",
  "3xl": "gap-7",
  "4xl": "gap-8",
} as const

type Space = keyof typeof spaceMap

type StackProps = ComponentPropsWithoutRef<"div"> & {
  space?: Space
  reversed?: boolean
}

export function Box({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("relative box-border", className)} {...props} />
}

export function HStack({ className, space, reversed, ...props }: StackProps) {
  return (
    <div
      className={cn(
        "flex flex-row items-center",
        space && spaceMap[space],
        reversed && "flex-row-reverse",
        className
      )}
      {...props}
    />
  )
}

export function VStack({ className, space, reversed, ...props }: StackProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        space && spaceMap[space],
        reversed && "flex-col-reverse",
        className
      )}
      {...props}
    />
  )
}
