import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Footer from '../Footer'

describe('Footer', () => {
  const renderFooter = () => {
    return render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
  }

  it('renders the footer with copyright and social links', () => {
    renderFooter()
    
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(`© ${currentYear} Josevan Oliveira. All rights reserved.`)).toBeInTheDocument()
    
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