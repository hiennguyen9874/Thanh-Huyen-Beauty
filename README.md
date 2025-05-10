# Thanh-Huyen-Beauty

<div align="center">
  <img src="public/next.svg" alt="Next.js Logo" width="180" />
  <br>
  <h3>Modern NextJS Application with TypeScript and TailwindCSS</h3>
</div>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#development">Development</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#code-quality">Code Quality</a>
</p>

## Features

- ⚡️ **Next.js 15** - Latest Next.js features with App Router
- 🔥 **React 19** - Latest React version with improved performance
- 💎 **TypeScript** - Type safety and improved developer experience
- 🎨 **TailwindCSS 4** - Utility-first CSS framework
- 🧩 **Component-Based Architecture** - Modular and reusable components
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and Twitter cards
- 📱 **Responsive Design** - Mobile-first approach
- 🎭 **Framer Motion** - Smooth animations and transitions
- 📦 **FontAwesome** - Rich icon library
- 🛠️ **Robust Development Tooling** - ESLint, Prettier, Stylelint, Husky

## Tech Stack

### Core

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript

### Styling

- [TailwindCSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [PostCSS](https://postcss.org/) - Tool for transforming CSS

### UI Components

- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [FontAwesome](https://fontawesome.com/) - Icon library

### Development Tools

- [ESLint](https://eslint.org/) - JavaScript/TypeScript linter
- [Prettier](https://prettier.io/) - Code formatter
- [Stylelint](https://stylelint.io/) - CSS linter
- [Husky](https://typicode.github.io/husky/) - Git hooks
- [Lint-staged](https://github.com/okonet/lint-staged) - Run linters on git staged files

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/thanh-huyen-beauty.git
cd thanh-huyen-beauty

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Development

### Project Structure

```
thanh-huyen-beauty/
├── app/               # Next.js App Router
│   ├── components/    # App-specific components
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── components/        # Shared components
│   ├── layout/        # Layout components
│   └── sections/      # Page sections
├── public/            # Static assets
├── scripts/           # Utility scripts
└── ...configuration files
```

### File Editing

The application automatically updates as you edit the files. Start by modifying `app/page.tsx`.

## Deployment

### Deploying on Vercel

The easiest way to deploy your Next.js app is with [Vercel](https://vercel.com), the platform from the creators of Next.js:

1. Push your code to a Git repository
2. Import the project to Vercel: [https://vercel.com/new](https://vercel.com/new)
3. Vercel will detect Next.js and configure the build settings automatically

For more details, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Code Quality

This project uses several tools to ensure code quality:

### Linting and Formatting

- **ESLint**: Lints JavaScript and TypeScript files

  ```bash
  npm run lint        # Check for issues
  npm run lint:fix    # Fix issues automatically
  ```

- **Stylelint**: Lints CSS files with Tailwind CSS support

  ```bash
  npm run stylelint       # Check for issues
  npm run stylelint:fix   # Fix issues automatically
  ```

- **Prettier**: Formats code consistently

  ```bash
  npm run format    # Format all files
  ```

- **TypeScript**: Type checking
  ```bash
  npm run type-check    # Check for type errors
  ```

### Convenient Scripts

- **Run all checks**: `npm run check-all`
- **Fix all issues**: `npm run fix-all`

### Git Hooks with Husky

- **Pre-commit**: Runs lint-staged to check/format code
- **Commit-msg**: Validates commit messages using commitlint

### Commit Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

**Types**:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `perf`: Performance improvements
- `test`: Adding or fixing tests
- `chore`: Changes to build process or tools

### VS Code Integration

This project includes VS Code settings that automatically format and lint your code on save. Install the recommended extensions when prompted for the best development experience.

---

<div align="center">
  <p>
    Made with ❤️ using Next.js
  </p>
</div>
