import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import brFlag from '../assets/br-flag.svg'
import usFlag from '../assets/us-flag.svg'

interface NavbarProps {
  onLanguageChange: (lang: string) => void
}

const Navbar = ({ onLanguageChange }: NavbarProps) => {
  const { t } = useTranslation()

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Josevan Oliveira
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              {t('nav.home')}
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              {t('nav.about')}
            </Link>
            <Link to="/projects" className="text-gray-600 hover:text-gray-900">
              {t('nav.projects')}
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">
              {t('nav.contact')}
            </Link>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onLanguageChange('pt')}
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              >
                <img src={brFlag} alt="Português" className="w-full h-full" />
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => onLanguageChange('en')}
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              >
                <img src={usFlag} alt="English" className="w-full h-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 