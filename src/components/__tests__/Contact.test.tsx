import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n'
import Contact from '../../pages/Contact'
import '../../test/mocks/i18n'

describe('Contact', () => {
  const renderContact = () => {
    return render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Contact />
        </BrowserRouter>
      </I18nextProvider>
    )
  }

  it('renders the contact form with all fields', () => {
    renderContact()
    
    expect(screen.getByText('Contact Me')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('handles form submission', () => {
    renderContact()
    
    const form = screen.getByTestId('contact-form')
    const submitEvent = new Event('submit')
    Object.defineProperty(submitEvent, 'preventDefault', {
      value: vi.fn()
    })
    
    fireEvent.submit(form)
    expect(submitEvent.preventDefault).toHaveBeenCalled()
  })
}) 