const GITHUB_USERNAME = 'josivantarcio';

export const fetchGitHubRepos = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=3`);
    const repos = await response.json();

    return repos.map(repo => ({
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