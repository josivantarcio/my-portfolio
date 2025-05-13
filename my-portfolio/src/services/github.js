const GITHUB_USERNAME = 'josivantarcio';

export const fetchGitHubRepos = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`);
    const repos = await response.json();

    // Filtra o repositório do portfólio e qualquer repositório Python
    const filtered = repos.filter(repo => repo.name.toLowerCase() !== 'my-portfolio' && repo.language !== 'Python');

    // Pega apenas os 5 primeiros (mais recentes, exceto o portfólio e Python)
    return filtered.slice(0, 5).map(repo => ({
      name: repo.name,
      description: repo.description || 'Sem descrição',
      url: repo.html_url,
      language: repo.language || 'Não especificado',
      stars: repo.stargazers_count,
      image: `/assets/${repo.name.toLowerCase().replace(/\s+/g, '-')}.jpg` || '/placeholder.png',
      lastUpdated: new Date(repo.updated_at).toLocaleDateString()
    }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};