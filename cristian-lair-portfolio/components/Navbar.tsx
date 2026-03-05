export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-white border-b z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
  
          <span className="font-semibold">
            Cristian Lair
          </span>
  
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-gray-900">Sobre mí</a>
            <a href="#experience" className="hover:text-gray-900">Experiencia</a>
            <a href="#projects" className="hover:text-gray-900">Proyectos</a>
            <a href="#skills" className="hover:text-gray-900">Tecnologías</a>
            <a href="#contact" className="hover:text-gray-900">Contacto</a>
          </div>
  
        </div>
      </nav>
    )
  }