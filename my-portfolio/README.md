# Josevan T. Oliveira - Portfolio

[![Deploy Portfolio](https://github.com/josivantarcio/my-portfolio/actions/workflows/pages-deploy.yml/badge.svg)](https://github.com/josivantarcio/my-portfolio/actions/workflows/pages-deploy.yml)

A modern portfolio website built with React, Vite, and Tailwind CSS, featuring automatic GitHub repository integration.

## Features

- Responsive design with mobile-first approach
- Automatic GitHub repository integration
- Project showcase with Embla Carousel
- Contact form integration with Formspree
- About page with bio and certifications
- Social media links
- Modern UI with Tailwind CSS

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Embla Carousel
- GitHub API Integration
- Formspree

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- GitHub account
- Formspree account

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/josivantarcio/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a Formspree form:
   - Go to [Formspree](https://formspree.io)
   - Create a new form
   - Copy the form ID
   - Replace `YOUR_FORM_ID` in `src/components/ContactForm.jsx` with your form ID

4. Add project images:
   - Add images to `public/assets` directory
   - Name them according to your repository names (lowercase, hyphens instead of spaces)
   - Example: `workshop-springboot3-jpa.jpg`

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Testes

Este projeto utiliza [Vitest](https://vitest.dev/) e [Testing Library](https://testing-library.com/) para testes automatizados.

Para rodar os testes:
```bash
npm test
```

Para ver o relatório de cobertura:
```bash
npm run test:coverage
```

Os testes ficam em `src/components/__tests__/`.

## CI/CD

O projeto utiliza GitHub Actions para CI/CD:
- **Testes**: Todo push e pull request na branch `main` executa os testes automatizados.
- **Deploy**: O deploy para o GitHub Pages só ocorre se todos os testes passarem.
- O status do workflow pode ser visto no badge acima ou na aba "Actions" do repositório.

## GitHub Integration

O portfólio busca automaticamente seus 6 repositórios mais atualizados do GitHub. Cada card exibe:
- Nome do repositório
- Descrição
- Linguagem principal
- Estrelas
- Data da última atualização
- Link para o repositório

## Deployment on Vercel

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Create a new project on Vercel:
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - The build settings are pre-configured in `vercel.json`
   - Deploy!

## Customization

- Update personal information in `src/pages/About.jsx`
- Modify social media links in `src/components/Footer.jsx`
- Customize colors and styling in `tailwind.config.js`
- Update GitHub username in `src/services/github.js`

## License

MIT 