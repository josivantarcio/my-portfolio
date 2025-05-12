import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Olá, eu sou Josevan Oliveira
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Desenvolvedor Full Stack apaixonado por criar soluções web inovadoras
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Entre em Contato
              </Link>
              <a
                href="https://github.com/josivantarcio"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                Ver GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meus Projetos</h2>
          <Carousel />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tecnologias</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['React', 'Node.js', 'TypeScript', 'Python'].map((tech) => (
              <div
                key={tech}
                className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 