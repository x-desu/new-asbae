/*
  Installed from https://reactbits.dev/ts/tailwind/
*/

import React, { ReactNode, CSSProperties } from "react";

interface ShinyTextProps {
    children: ReactNode;
    className?: string;
    shimmerWidth?: number;
    speed?: number;
    baseColor?: string;
    shineColor?: string;
}

export default function ShinyText({
    children,
    className = "",
    shimmerWidth = 100,
    speed = 3,
    baseColor = "rgba(147, 197, 253, 0.85)",
    shineColor = "rgba(255, 255, 255, 0.95)",
}: ShinyTextProps) {
    const style: CSSProperties = {
        backgroundImage: `linear-gradient(
      120deg,
      ${baseColor} 0%,
      ${baseColor} 40%,
      ${shineColor} 50%,
      ${baseColor} 60%,
      ${baseColor} 100%
    )`,
        backgroundSize: `${shimmerWidth + 200}% 100%`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: `shiny-text-sweep ${speed}s ease-in-out infinite`,
    };

    return (
        <span className={className} style={style}>
            {children}
        </span>
    );
}
