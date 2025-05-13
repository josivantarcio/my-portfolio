import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600">
            © {new Date().getFullYear()} Josevan Oliveira. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/josivantarcio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/josevanoliveira/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 