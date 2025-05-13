import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Josevan Oliveira
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Junior Java Developer
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/josivantarcio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/josevanoliveira/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('about.title')}
            </h2>
            <p className="text-gray-600 mb-4">
              {t('about.description')}
            </p>
            <Link
              to="/about"
              className="text-blue-600 hover:text-blue-800"
            >
              {t('about.title')} →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('projects.title')}
            </h2>
            <p className="text-gray-600 mb-4">
              Check out my latest projects and contributions on GitHub.
            </p>
            <Link
              to="/projects"
              className="text-blue-600 hover:text-blue-800"
            >
              {t('projects.title')} →
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            {t('contact.title')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home 