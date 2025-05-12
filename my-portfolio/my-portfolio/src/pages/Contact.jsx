import ContactForm from '../components/ContactForm';
import { personalData } from '../data/personalData';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: personalData.social.github,
      icon: '🐙'
    },
    {
      name: 'LinkedIn',
      url: personalData.social.linkedin,
      icon: '💼'
    },
    {
      name: 'Twitter',
      url: personalData.social.twitter,
      icon: '🐦'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Entre em Contato</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Formulário de Contato</h2>
            <ContactForm />
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Informações de Contato</h2>
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <p className="text-gray-600">Email</p>
                <a href={`mailto:${personalData.email}`} className="text-blue-600 hover:underline">
                  {personalData.email}
                </a>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <p className="text-gray-600">Telefone</p>
                <a href={`tel:${personalData.phone}`} className="text-blue-600 hover:underline">
                  {personalData.phone}
                </a>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <p className="text-gray-600">Localização</p>
                <p>{personalData.location}</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Redes Sociais</h2>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="text-lg font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 