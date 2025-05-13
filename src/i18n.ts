import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      about: {
        title: 'About Me',
        description: 'Junior Java Developer passionate about creating efficient and scalable applications.',
        certifications: 'Certifications',
        education: 'Education'
      },
      projects: {
        title: 'My Projects',
        viewMore: 'View More'
      },
      contact: {
        title: 'Contact Me',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message'
      },
      nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact'
      }
    }
  },
  pt: {
    translation: {
      about: {
        title: 'Sobre Mim',
        description: 'Desenvolvedor Java Júnior apaixonado por criar aplicações eficientes e escaláveis.',
        certifications: 'Certificações',
        education: 'Educação'
      },
      projects: {
        title: 'Meus Projetos',
        viewMore: 'Ver Mais'
      },
      contact: {
        title: 'Entre em Contato',
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
        send: 'Enviar Mensagem'
      },
      nav: {
        home: 'Início',
        about: 'Sobre',
        projects: 'Projetos',
        contact: 'Contato'
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n 