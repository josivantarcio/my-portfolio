import { useTranslation } from 'react-i18next'
import profileImg from '../assets/profile.jpg'

const About = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {t('about.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            {t('about.description')}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex justify-center">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-lg shadow-xl w-[300px] h-[300px] object-cover"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('about.skills.title')}
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t('about.skills.frontend')}
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Next.js</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t('about.skills.backend')}
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>Java</li>
                    <li>Spring</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t('about.skills.tools')}
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>Git</li>
                    <li>Docker</li>
                    <li>AWS</li>
                    <li>Linux</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('about.education.title')}
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white">
                    {t('about.education.mba')}
                  </h4>
                  <p className="text-gray-300">{t('about.education.university')}</p>
                  <p className="text-gray-300">{t('about.education.expected')}</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white">
                    {t('about.education.bachelor')}
                  </h4>
                  <p className="text-gray-300">{t('about.education.university2')}</p>
                  <p className="text-gray-300">{t('about.education.year')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 