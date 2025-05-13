import { useTranslation } from 'react-i18next'
import profileImage from '../assets/profile.jpg'

const About = () => {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t('about.title')}</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <img
                src={profileImage}
                alt="Josevan Oliveira"
                className="rounded-lg shadow-lg w-[500px] h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <p className="text-lg text-gray-700">{t('about.description')}</p>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">{t('about.education')}</h3>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-medium">MBA em Engenharia de Software</h4>
                  <p className="text-gray-600">USP (Universidade de São Paulo)</p>
                  <p className="text-gray-500">Maio/2026</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">{t('about.certifications')}</h3>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-medium">Java Development Certification</h4>
                  <p className="text-gray-600">Oracle</p>
                </div>
              </div>

              <div className="flex gap-4">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 