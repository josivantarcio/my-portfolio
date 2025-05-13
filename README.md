# Josevan Oliveira - Portfolio

A modern portfolio website built with React, Vite, and Tailwind CSS, featuring automatic GitHub repository integration.

## Features

- Responsive design with mobile-first approach
- Automatic GitHub repository integration
- Project showcase with Embla Carousel
- Contact form integration
- About page with bio and certifications
- Social media links
- Modern UI with Tailwind CSS
- Bilingual support (English/Portuguese)

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Embla Carousel
- GitHub API Integration
- i18next for internationalization

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- GitHub account

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/josivantarcio/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser.

## Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

The project is configured to deploy automatically to GitHub Pages using GitHub Actions. The workflow will:

1. Build the project
2. Deploy to GitHub Pages
3. Run on every push to the main branch

## Customization

- Update personal information in `src/pages/About.tsx`
- Modify social media links in `src/components/Footer.tsx`
- Customize colors and styling in `tailwind.config.js`
- Update GitHub username in `src/pages/Projects.tsx`

## License

MIT 