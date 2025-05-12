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

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Sobre Mim</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Bio</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sou Josevan Oliveira, um desenvolvedor Full Stack apaixonado por criar soluções inovadoras e eficientes. 
            Especializado em desenvolvimento web com React, Node.js e TypeScript, busco sempre entregar produtos de alta qualidade 
            e excelente experiência do usuário.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Com experiência em desenvolvimento de aplicações web modernas, tenho trabalhado em projetos que envolvem 
            arquitetura de microserviços, integração com APIs RESTful e implementação de soluções escaláveis. 
            Meu objetivo é criar aplicações que não apenas atendam às necessidades dos usuários, mas também 
            proporcionem uma experiência excepcional.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Stack Tecnológica</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Frontend</h3>
              <ul className="text-gray-600">
                <li>React</li>
                <li>TypeScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Backend</h3>
              <ul className="text-gray-600">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">DevOps & Ferramentas</h3>
              <ul className="text-gray-600">
                <li>Git</li>
                <li>GitHub Actions</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Certificações</h2>
          <div className="grid gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
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