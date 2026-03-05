export default function Skills() {
    return (
      <section id="skills" className="mt-20 space-y-8">
  
        <h2 className="text-3xl font-semibold">Skills</h2>
  
        <div className="grid md:grid-cols-2 gap-8">
  
          <div>
            <h3 className="text-xl font-medium mb-3">Backend</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Node.js</li>
              <li>Go (APIs para microservicios)</li>
              <li>PHP</li>
              <li>REST APIs</li>
              <li>Microservicios</li>
            </ul>
          </div>
  
     
          <div>
            <h3 className="text-xl font-medium mb-3">Bases de Datos</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>MongoDB</li>
              <li>Optimización de consultas e indexación</li>
            </ul>
          </div>
  

          <div>
            <h3 className="text-xl font-medium mb-3">Infraestructura</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Google Cloud Platform (GCP)</li>
              <li>Jenkins (CI/CD)</li>
            </ul>
          </div>
  
 
          <div>
            <h3 className="text-xl font-medium mb-3">Arquitectura</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Arquitectura Hexagonal</li>
            <li>Domain Driven Design (DDD)</li>
            <li>Diseño de APIs REST</li>
            <li>Arquitectura basada en microservicios</li>
            </ul>
          </div>
 
          <div>
            <h3 className="text-xl font-medium mb-3">Autenticación y Seguridad</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>JWT</li>
              <li>OAuth</li>
            </ul>
          </div>
  
        </div>
  
      </section>
    )
  }