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
    

          <h1 className="text-3xl   font-semibold">
            Desarrollador Backend
          </h1>

          <p className="text-lg max-w-2xl">
            Especializado en sistemas fintech,
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