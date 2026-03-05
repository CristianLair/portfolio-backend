export default function Contact() {
    return (
      <section id="contact" className="mt-20 space-y-6">
  
        <h2 className="text-3xl font-semibold">Contacto</h2>
  
        <p className="text-gray-600 max-w-2xl">
          Si quieres contactarme para oportunidades laborales o proyectos,
          puedes encontrarme en las siguientes plataformas.
        </p>
  
        <div className="flex gap-4 flex-wrap">
  
          <a
            href="mailto:cristianlair@gmail.com"
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            Email
          </a>
  
          <a
            href="https://www.linkedin.com/in/cristian-lair-developer/"
            target="_blank"
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            LinkedIn
          </a>
  
          <a
            href="https://github.com/CristianLair"
            target="_blank"
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            GitHub
          </a>
  
        </div>
  
      </section>
    )
  }