import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n'
import Navbar from '../Navbar'
import '../../test/mocks/i18n'

describe('Navbar', () => {
  const renderNavbar = () => {
    const onLanguageChange = vi.fn()
    return render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Navbar onLanguageChange={onLanguageChange} />
        </BrowserRouter>
      </I18nextProvider>
    )
  }

  it('renders the navbar with all navigation links', () => {
    renderNavbar()
    
    expect(screen.getByText('Josevan Oliveira')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('changes language when language buttons are clicked', () => {
    const onLanguageChange = vi.fn()
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Navbar onLanguageChange={onLanguageChange} />
        </BrowserRouter>
      </I18nextProvider>
    )

    fireEvent.click(screen.getByText('PT'))
    expect(onLanguageChange).toHaveBeenCalledWith('pt')

    fireEvent.click(screen.getByText('EN'))
    expect(onLanguageChange).toHaveBeenCalledWith('en')
  })
}) 