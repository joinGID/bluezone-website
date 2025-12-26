# Development Guide

This guide provides instructions for setting up and working on the BlueZone project.

## Local Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd blue-zone-web
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open the application**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev`: Starts the Next.js development server with hot-reloading.
- `npm run build`: Creates an optimized production build.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4.0+](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
- **Fonts**: Google Fonts (Playfair Display, Montserrat)

## Deployment

The project is optimized for deployment on the [Vercel Platform](https://vercel.com). Simply link your repository for automatic CI/CD.
