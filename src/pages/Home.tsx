import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6">
          <span className="block">{t('home.greeting')}</span>
          <span className="block text-indigo-400">Josevan Oliveira</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">
          {t('home.role')}
        </p>
        <p className="text-lg text-gray-400 mb-12">
          {t('home.description')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            {t('home.viewProjects')}
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-400 bg-transparent hover:bg-indigo-600 hover:text-white transition-colors"
          >
            {t('home.contactMe')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home 