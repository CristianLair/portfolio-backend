"use client"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: "#about", label: "Sobre mí" },
    { href: "#experience", label: "Experiencia" },
    { href: "#projects", label: "Proyectos" },
    { href: "#skills", label: "Tecnologías" },
    { href: "#contact", label: "Contacto" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-800 border-b border-foreground/10 z-50">
      <div className="max-w-[1100px] mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <span className="font-semibold text-[#E3E3E3]">
          Cristian Lair
        </span>

        {/* Desktop menu */}
        <div className="md:flex gap-6 text-sm text-[#C4C4C4] hidden">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#E3E3E3] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? (
            // X icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="px-6 pb-4 flex flex-col gap-4 text-[#C4C4C4]">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-[#E3E3E3] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}