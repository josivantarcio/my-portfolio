import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n'
import About from '../../pages/About'
import '../../test/mocks/i18n'

describe('About', () => {
  const renderAbout = () => {
    return render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <About />
        </BrowserRouter>
      </I18nextProvider>
    )
  }

  it('renders the about section with title and description', () => {
    renderAbout()
    
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('Junior Java Developer passionate about creating efficient and scalable applications.')).toBeInTheDocument()
  })

  it('renders the certifications and education sections', () => {
    renderAbout()
    
    expect(screen.getByText('Certifications')).toBeInTheDocument()
    expect(screen.getByText('Java Development Certification')).toBeInTheDocument()
    expect(screen.getByText('Oracle')).toBeInTheDocument()
    
    expect(screen.getByText('Education')).toBeInTheDocument()
    expect(screen.getByText('Bachelor in Computer Science')).toBeInTheDocument()
    expect(screen.getByText('Your University')).toBeInTheDocument()
  })

  it('renders social links', () => {
    renderAbout()
    
    const githubLink = screen.getByText('GitHub')
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/josivantarcio')
    expect(githubLink).toHaveAttribute('target', '_blank')
    
    const linkedinLink = screen.getByText('LinkedIn')
    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/josevanoliveira/')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
  })
}) 