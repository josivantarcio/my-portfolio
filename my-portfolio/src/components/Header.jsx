import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Josevan Oliveira
          </Link>
          <div className="space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">Sobre</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contato</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 