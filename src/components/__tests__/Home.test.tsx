import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n'
import Home from '../../pages/Home'
import '../../test/mocks/i18n'

describe('Home', () => {
  const renderHome = () => {
    return render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </I18nextProvider>
    )
  }

  it('renders the hero section with name and title', () => {
    renderHome()
    
    expect(screen.getByText('Josevan Oliveira')).toBeInTheDocument()
    expect(screen.getByText('Junior Java Developer')).toBeInTheDocument()
  })

  it('renders the social links', () => {
    renderHome()
    
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