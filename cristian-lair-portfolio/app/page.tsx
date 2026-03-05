import Navbar from "@/components/Navbar"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-20">

        <section className="space-y-6">
          <h1 className="text-5xl font-bold">
            Cristian Lair
          </h1>

          <h2 className="text-xl text-gray-600">
            Backend Developer
          </h2>

          <p className="text-lg max-w-2xl">
            Desarrollador backend especializado en sistemas fintech,
            microservicios e integraciones financieras utilizando Node.js.
          </p>
        </section>

        <About />

        <Experience />

        <Projects />

        <Skills />
        
        <Contact />

      </main>
    </>
  )
}