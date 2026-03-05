export default function About() {
    return (
      <section id="about" className="mt-20 space-y-6">
  
        <h2 className="text-3xl font-semibold">Sobre mí</h2>
  
        <p className="text-gray-600 max-w-2xl">
          Soy desarrollador backend con más de 3 años de experiencia
          construyendo sistemas financieros y microservicios en entornos
          productivos utilizando Node.js.
        </p>
  
        <p className="text-gray-600 max-w-2xl">
          He trabajado en el desarrollo de APIs, integraciones bancarias,
          procesamiento de archivos financieros y construcción de
          backoffices utilizados por áreas de negocio y Business Intelligence.
        </p>
  
        <p className="text-gray-600 max-w-2xl">
          Trabajo con arquitecturas basadas en microservicios aplicando
          principios de Arquitectura Hexagonal y Domain Driven Design (DDD),
          priorizando sistemas mantenibles, escalables y orientados al dominio.
        </p>
  
        <p className="text-gray-600 max-w-2xl">
          Además participo como mentor técnico acompañando desarrolladores
          en formación en la construcción de proyectos fullstack,
          ayudando a resolver problemas de arquitectura, lógica de negocio
          y buenas prácticas de desarrollo.
        </p>
  
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>+3 años desarrollando backend en sistemas fintech</li>
          <li>Arquitectura Hexagonal y Domain Driven Design</li>
          <li>Microservicios con Node.js desplegados en GCP</li>
          <li>Integraciones bancarias y procesamiento de archivos financieros</li>
        </ul>
  
      </section>
    )
  }