const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={project.imagePath}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
          {project.language && (
            <span className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
              {project.language}
            </span>
          )}
          {project.stars > 0 && (
            <span className="flex items-center">
              ⭐ {project.stars}
            </span>
          )}
          <span>Updated: {project.updatedAt}</span>
        </div>

        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          View Repository
        </a>
      </div>
    </div>
  );
};

export default ProjectCard; 