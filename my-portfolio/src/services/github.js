const GITHUB_USERNAME = 'josivantarcio';

export const fetchGitHubRepos = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
    const repos = await response.json();

    return repos.map(repo => ({
      name: repo.name,
      description: repo.description || 'Sem descrição',
      url: repo.html_url,
      language: repo.language || 'Não especificado',
      stars: repo.stargazers_count,
      image: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/main/preview.png` || '/placeholder.png',
      lastUpdated: new Date(repo.updated_at).toLocaleDateString()
    }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}; 