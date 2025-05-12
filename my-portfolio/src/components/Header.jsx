import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            Josevan Oliveira
          </Link>
          <div className="space-x-6">
            <Link
              to="/"
              className={`text-lg font-medium transition-colors ${
                isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Início
            </Link>
            <Link
              to="/sobre"
              className={`text-lg font-medium transition-colors ${
                isActive('/sobre') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Sobre
            </Link>
            <Link
              to="/contato"
              className={`text-lg font-medium transition-colors ${
                isActive('/contato') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Contato
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header; 