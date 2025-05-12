const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Josevan Oliveira</h3>
            <p className="text-gray-400">Desenvolvedor Full Stack</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/josivantarcio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/josivantarcio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Josevan Oliveira. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 