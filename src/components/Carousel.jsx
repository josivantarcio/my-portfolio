import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { fetchGitHubRepos } from '../services/github';

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const repos = await fetchGitHubRepos();
        setProjects(repos);
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {projects.map((project) => (
          <div key={project.name} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{project.language}</span>
                  <span>⭐ {project.stars}</span>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Ver Projeto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel; 