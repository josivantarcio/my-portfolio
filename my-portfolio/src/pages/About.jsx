import React from 'react';

const About = () => {
  const certifications = [
    {
      name: "MBA USP in Software Engineering",
      issuer: "Universidade de São Paulo",
      date: "2024"
    },
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "2023"
    },
    {
      name: "Scrum Fundamentals Certified",
      issuer: "Scrum Alliance",
      date: "2023"
    }
  ];

  const technologies = [
    { name: 'Java', icon: '☕' },
    { name: 'Spring Boot', icon: '🌱' },
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Git', icon: '📦' },
    { name: 'MySQL', icon: '🗄️' }
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src="/assets/profile.jpg"
                alt="Josevan Oliveira"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x400?text=Josevan+Oliveira';
                }}
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl font-bold mb-4">Sobre Mim</h1>
              <p className="text-gray-600 mb-6">
                Olá! Sou Josevan Oliveira, um desenvolvedor Java Junior apaixonado por criar soluções eficientes e escaláveis. 
                Minha jornada na programação começou com Java e Spring Boot, e desde então tenho expandido minhas habilidades 
                para incluir desenvolvimento web com React e outras tecnologias modernas.
              </p>
              <p className="text-gray-600 mb-6">
                Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente, 
                aplicando as melhores práticas de desenvolvimento e contribuindo para projetos inovadores.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Tecnologias</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg"
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span className="text-gray-700">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Bio</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sou Josevan Oliveira, um Engenheiro de Software focado em resolver problemas reais através do desenvolvimento Java, 
            arquitetura limpa e soluções cloud-native. Baseado em Fortaleza, CE – Brasil, sou especialista em microserviços Spring Boot, 
            arquitetura RESTful e infraestrutura AWS.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Com experiência em desenvolvimento de software empresarial e integração cloud, entreguei com sucesso projetos de integração backend, 
            executei migrações de sistemas para plataformas cloud e implementei soluções de automação. Combino habilidades técnicas sólidas 
            com experiência em gerenciamento de projetos para entregar aplicações escaláveis, seguras e de alto desempenho.
          </p>
        </section>

        <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Stack Tecnológica</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Backend</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>JPA/Hibernate</li>
                <li>PostgreSQL</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Cloud & DevOps</h3>
              <ul className="text-gray-600 space-y-2">
                <li>AWS (EC2, S3, Lambda)</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>CI/CD</li>
                <li>GitHub Actions</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Frontend & Data</h3>
              <ul className="text-gray-600 space-y-2">
                <li>React</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>Pandas</li>
                <li>Scikit-learn</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Certificações</h2>
          <div className="grid gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 