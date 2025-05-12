import { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xpwdyjgb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={status === 'submitting'}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={status === 'submitting'}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={status === 'submitting'}
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`w-full py-2 px-4 rounded transition-colors ${
          status === 'submitting'
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {status === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
      </button>

      {status === 'success' && (
        <p className="mt-4 text-green-600 text-center">
          Mensagem enviada com sucesso! Entrarei em contato em breve.
        </p>
      )}

      {status === 'error' && (
        <p className="mt-4 text-red-600 text-center">
          Ops! Algo deu errado. Por favor, tente novamente mais tarde.
        </p>
      )}
    </form>
  );
};

export default ContactForm; 