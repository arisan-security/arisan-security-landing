# Project Context
- This is the official landing page for Arisan Security (A-SEC), a community-driven platform focused on Information Technology Security, collaboration, and public education.
- The site highlights community activities, blog contributions, podcasts, and cybersecurity events (e.g., CTF competitions).
- The audience includes IT professionals, students, and the general public interested in cybersecurity.

# Design & Content
- Use a modern, clean, and accessible UI with a focus on clarity and trust.
- Prioritize Indonesian language content, but ensure code and structure are internationalization (i18n) ready.
- Use high-quality images and SVGs from the `public/images` directory.
- Highlight community features: blog, podcasts (A-Cast), discussion groups (Sawala Mangkus), expert perspectives (Lintas Taksa), and events.
- Promote open collaboration and crowdsourcing; encourage user contributions.

# Technical Best Practices
- Use Next.js and React best practices: functional components, hooks, and TypeScript for type safety.
- Use Tailwind CSS for styling; keep styles modular and utility-first.
- Store environment variables (e.g., PUBLIC_URL) in a `.env.local` file at the project root. Access them via `process.env.NEXT_PUBLIC_PUBLIC_URL` (prefix with `NEXT_PUBLIC_` for frontend access).
- Optimize images with Next.js `<Image />` where possible.
- Ensure all external links open in a new tab and use `rel="noopener noreferrer"` for security.
- Implement SEO best practices: use the `src/seo` component, set meta tags, and use Open Graph images.
- Make the site responsive and mobile-friendly.
- Use semantic HTML for accessibility.
- Keep components in `src/components` small, focused, and reusable.
- Use `src/data` for static or mock data; fetch dynamic data via API routes in `src/pages/api`.

# Collaboration & Contribution
- Document all reusable components and utilities.
- Encourage contributions via clear comments and documentation.
- Follow a consistent code style (Prettier, ESLint).
- Use meaningful commit messages and branch names.

# Security & Privacy
- Do not expose sensitive information in the frontend or public repos.
- Follow privacy best practices for user data and analytics.

# Community & Branding
- Maintain Arisan Security branding: logo, color palette, and tone.
- Promote community channels (Telegram, Facebook, Instagram, etc.) and events.
- Encourage blog and content contributions; highlight the crowdsourcing model.

# Copilot Usage
- When generating code, prefer idiomatic Next.js/React/TypeScript patterns.
- Suggest improvements for accessibility, SEO, and performance.
- When in doubt, refer to the official Arisan Security site for branding and content inspiration.
