export default function Experience() {
    return (
      <section id="experience" className="mt-20 space-y-10">
  
        <h2 className="text-3xl font-semibold">Experiencia</h2>
  
        <div className="space-y-3">
          <h3 className="text-xl font-medium">
            Desarrollador Backend — Ligo (Fintech)
          </h3>
  
          <p className="text-sm text-gray-500">
            Ago 2022 – Actualidad
          </p>
  
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>
              Desarrollo y mantenimiento de microservicios backend en Node.js
              para sistemas financieros en producción.
            </li>
  
            <li>
              Diseño e implementación de APIs REST utilizadas por servicios
              internos y aplicaciones de negocio.
            </li>
  
            <li>
              Desarrollo bajo principios de Arquitectura Hexagonal y
              Domain Driven Design (DDD).
            </li>
  
            <li>
              Implementación de integraciones bancarias mediante SFTP
              para intercambio automatizado de archivos financieros.
            </li>
  
            <li>
              Desarrollo de funcionalidades de backoffice para generación
              de reportes utilizados por el área de Business Intelligence.
            </li>
  
            <li>
              Gestión de bases de datos MongoDB y optimización de consultas
              mediante indexación.
            </li>
  
            <li>
              Despliegue y mantenimiento de servicios utilizando Docker,
              Kubernetes y Google Cloud Platform (GCP).
            </li>
  
            <li>
              Participación en planificación técnica, estimación de tareas
              y revisión de código para asegurar calidad y buenas prácticas.
            </li>
          </ul>
        </div>
  
        <div className="space-y-3">
          <h3 className="text-xl font-medium">
            Mentor Técnico
          </h3>
  
          <p className="text-sm text-gray-500">
            2023 – Actualidad
          </p>
  
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>
              Acompañamiento a desarrolladores en formación en la
              construcción de proyectos fullstack.
            </li>
  
            <li>
              Asistencia en resolución de problemas de lógica de negocio,
              arquitectura y diseño de APIs.
            </li>
  
            <li>
              Revisión de proyectos y orientación en buenas prácticas
              de desarrollo.
            </li>
          </ul>
        </div>
  
      </section>
    )
  }