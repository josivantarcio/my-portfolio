import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n'
import Projects from '../../pages/Projects'
import '../../test/mocks/i18n'

// Mock the GitHub API response
vi.mock('../../services/github', () => ({
  fetchGitHubProjects: () => Promise.resolve([
    {
      id: 1,
      name: 'Project 1',
      description: 'Description 1',
      html_url: 'https://github.com/user/project1',
      topics: ['react', 'typescript']
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Description 2',
      html_url: 'https://github.com/user/project2',
      topics: ['java', 'spring']
    }
  ])
}))

// Mock Embla Carousel
vi.mock('embla-carousel-react', () => ({
  useEmblaCarousel: () => {
    const emblaRef = vi.fn()
    const api = {
      scrollPrev: vi.fn(),
      scrollNext: vi.fn(),
      canScrollPrev: () => true,
      canScrollNext: () => true,
      on: vi.fn(),
      off: vi.fn(),
      rootNode: () => document.createElement('div'),
      internalEngine: {
        scrollSnaps: [0, 100, 200],
        scrollProgress: 0
      }
    }
    return [emblaRef, api]
  }
}))

describe('Projects', () => {
  const renderProjects = () => {
    return render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Projects />
        </BrowserRouter>
      </I18nextProvider>
    )
  }

  it('renders the projects section with title', async () => {
    renderProjects()
    
    expect(screen.getByText('My Projects')).toBeInTheDocument()
    
    // Wait for projects to load
    const project1 = await screen.findByText('Project 1')
    const project2 = await screen.findByText('Project 2')
    
    expect(project1).toBeInTheDocument()
    expect(project2).toBeInTheDocument()
    expect(screen.getByText('Description 1')).toBeInTheDocument()
    expect(screen.getByText('Description 2')).toBeInTheDocument()
  })

  it('renders project links correctly', async () => {
    renderProjects()
    
    // Wait for projects to load
    await screen.findByText('Project 1')
    
    const projectLinks = screen.getAllByRole('link')
    expect(projectLinks[0]).toHaveAttribute('href', 'https://github.com/user/project1')
    expect(projectLinks[1]).toHaveAttribute('href', 'https://github.com/user/project2')
  })
}) 