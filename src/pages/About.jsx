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
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Bio</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I'm Josevan Oliveira, a passionate Software Engineer focused on solving real-world problems through Java development, 
            clean architecture, and cloud-native solutions. Based in Fortaleza, CE – Brazil, I specialize in Spring Boot microservices, 
            RESTful API architecture, and AWS cloud infrastructure.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With expertise in enterprise software development and cloud integration, I've successfully delivered backend integration 
            projects, executed system migrations to cloud platforms, and implemented automation solutions. I combine strong technical 
            skills with project management expertise to deliver scalable, secure, and high-performance applications.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Core Stack</h3>
              <ul className="text-gray-600">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>JPA</li>
                <li>PostgreSQL</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Cloud & DevOps</h3>
              <ul className="text-gray-600">
                <li>AWS (EC2, S3, Lambda)</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>CI/CD</li>
                <li>GitHub Actions</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Frontend & Data</h3>
              <ul className="text-gray-600">
                <li>React</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>Pandas</li>
                <li>Scikit-learn</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
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