# Project Structure

## Directory Organization

\`\`\`
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Main landing page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── chat-widget.tsx   # Customer chat integration
│   ├── contact.tsx       # Contact form section
│   ├── demo-section.tsx  # Product demonstrations
│   ├── footer.tsx        # Site footer
│   ├── header.tsx        # Navigation header
│   ├── hero.tsx          # Landing hero section
│   ├── products.tsx      # Product showcase
│   ├── reviews.tsx       # Customer testimonials
│   ├── services.tsx      # Service offerings
│   └── theme-provider.tsx # Dark/light theme context
├── lib/                   # Utility libraries
│   ├── chatbot-knowledge.ts # Chat widget data
│   ├── gsap-animations.ts   # GSAP animation helpers
│   ├── utils.ts            # Common utilities (cn function)
│   └── view-transitions.ts # Smooth scroll transitions
├── public/               # Static assets
│   ├── images/          # Image assets
│   └── *.png           # Product demos and team photos
├── reference/           # Original/backup files
└── styles/             # Additional stylesheets
\`\`\`

## Naming Conventions

- **Files**: kebab-case for components (`chat-widget.tsx`)
- **Components**: PascalCase exports (`ChatWidget`)
- **Functions**: camelCase (`gsapAnimations`)
- **CSS Classes**: Tailwind utilities with `cn()` helper

## Component Architecture

- **Client Components**: Use `"use client"` directive for interactivity
- **Server Components**: Default for static content
- **UI Components**: Located in `components/ui/` (shadcn/ui)
- **Page Sections**: Modular components for each landing page section

## Path Aliases

- `@/*` - Root directory alias
- `@/components` - Component imports
- `@/lib` - Utility library imports
- `@/components/ui` - UI component imports

## Asset Management

- Static images in `public/` directory
- Product demos and team photos included
- GSAP loaded via CDN in layout
- Fonts: Poppins (headings) and Inter (body text)
