import axios from 'axios'

export interface Project {
  id: number
  name: string
  description: string
  html_url: string
  topics: string[]
}

export const fetchGitHubProjects = async (): Promise<Project[]> => {
  const response = await axios.get(
    'https://api.github.com/users/josivantarcio/repos?sort=updated&per_page=6'
  )
  // Filter out the portfolio repository
  return response.data
    .filter((repo: Project) => repo.name !== 'Portfolio')
    .map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || 'No description available',
      html_url: repo.html_url,
      topics: repo.topics || []
    }))
} 