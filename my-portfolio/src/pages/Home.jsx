import { useEffect, useState } from 'react';
import { fetchGitHubRepos } from '../services/github';

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubRepos().then((data) => {
      setRepos(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">Bem-vindo ao meu Portfólio!</h1>
        <p className="text-lg text-gray-700 mb-12 text-center">
          Aqui você encontra meus projetos mais recentes, stack de tecnologias e formas de contato.
        </p>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Projetos Recentes</h2>
        {loading ? (
          <div className="text-center text-gray-500">Carregando projetos...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 h-full min-h-[340px]"
                style={{ minHeight: 340 }}
              >
                <img
                  src={repo.image}
                  alt={repo.name}
                  className="w-full h-32 object-cover rounded mb-4 bg-gray-100"
                  onError={(e) => (e.target.style.display = 'none')}
                />
                <h3 className="text-xl font-bold mb-2 text-blue-700">{repo.name}</h3>
                <p className="text-gray-600 mb-2 flex-grow">{repo.description}</p>
                <div className="flex items-center text-sm text-gray-500 space-x-4 mt-auto">
                  <span>Linguagem: {repo.language}</span>
                  <span>⭐ {repo.stars}</span>
                </div>
                <div className="text-xs text-gray-400 mt-2">Atualizado em {repo.lastUpdated}</div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home; 