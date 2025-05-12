import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../Header'

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('Header Component', () => {
  it('renders the header with correct title', () => {
    renderWithRouter(<Header />)
    expect(screen.getByText('Josevan Oliveira')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    renderWithRouter(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Sobre')).toBeInTheDocument()
    expect(screen.getByText('Contato')).toBeInTheDocument()
  })

  it('has correct links to pages', () => {
    renderWithRouter(<Header />)
    const homeLink = screen.getByText('Home')
    const aboutLink = screen.getByText('Sobre')
    const contactLink = screen.getByText('Contato')

    expect(homeLink.closest('a')).toHaveAttribute('href', '/')
    expect(aboutLink.closest('a')).toHaveAttribute('href', '/about')
    expect(contactLink.closest('a')).toHaveAttribute('href', '/contact')
  })
}) 