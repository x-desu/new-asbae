# Technology Stack

## Framework & Runtime

- **Next.js 15.2.4** - React framework with App Router
- **React 19** - UI library with React Server Components (RSC)
- **TypeScript 5** - Type-safe development
- **Node.js** - Runtime environment

## Styling & UI

- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **shadcn/ui** - Component library (New York style)
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library
- **next-themes** - Dark/light theme support

## Animations & Interactions

- **GSAP** - Animation library (loaded via CDN)
- **ScrollTrigger** - Scroll-based animations
- **TextPlugin** - Text animations
- **Spline** - 3D graphics and interactions

## Forms & Validation

- **React Hook Form** - Form management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

## Development Tools

- **pnpm** - Package manager
- **PostCSS** - CSS processing
- **ESLint** - Code linting (ignored during builds)

## Common Commands

\`\`\`bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Package management
pnpm install      # Install dependencies
pnpm add <pkg>    # Add new package
\`\`\`

## Build Configuration

- TypeScript errors ignored during builds
- ESLint errors ignored during builds
- Images unoptimized for static export
- Strict TypeScript configuration with path aliases (@/\*)
