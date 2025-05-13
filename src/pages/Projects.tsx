import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import useEmblaCarousel from 'embla-carousel-react'
import { fetchGitHubProjects } from '../services/github'

interface Project {
  id: number
  name: string
  description: string
  html_url: string
  topics: string[]
}

const Projects = () => {
  const { t } = useTranslation()
  const [projects, setProjects] = useState<Project[]>([])
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchGitHubProjects()
        setProjects(data.slice(0, 6)) // Get only the first 6 projects
      } catch (error) {
        console.error('Error loading projects:', error)
      }
    }

    loadProjects()
  }, [])

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t('projects.title')}</h2>
        
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] p-4"
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {t('projects.viewMore')}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            onClick={() => emblaApi?.scrollNext()}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects 