import { vi } from 'vitest'

export const mockI18n = {
  useTranslation: () => ({
    t: (key: string) => {
      const translations: { [key: string]: string } = {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'about.title': 'About Me',
        'about.description': 'Junior Java Developer passionate about creating efficient and scalable applications.',
        'about.certifications': 'Certifications',
        'about.education': 'Education',
        'projects.title': 'My Projects',
        'projects.viewMore': 'View More',
        'contact.title': 'Contact Me',
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.message': 'Message',
        'contact.send': 'Send Message',
        'home.title': 'Junior Java Developer',
        'home.github': 'GitHub',
        'home.linkedin': 'LinkedIn'
      }
      return translations[key] || key
    },
    i18n: {
      changeLanguage: vi.fn(),
      language: 'en'
    }
  })
}

vi.mock('react-i18next', async () => {
  const actual = await vi.importActual('react-i18next')
  return {
    ...actual,
    ...mockI18n
  }
}) 