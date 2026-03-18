import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="mt-20 space-y-6">

      <h2 className="text-3xl font-semibold text-primary">
        Contacto
      </h2>

      <p className="text-secondary max-w-2xl leading-relaxed">
        Disponible para roles Backend | Fintech | Remoto.
      </p>

      <div className="flex gap-4 flex-wrap">

        {/* Email */}
        <a
          href="mailto:cristianlair@gmail.com"
          className="px-4 py-2 border  border-foreground/10 rounded-lg hover:bg-foreground/5 transition-colors"
        >
          Email
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/cristian-lair-developer/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border  border-foreground/10 rounded-lg hover:bg-foreground/5 transition-colors"
        >
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/CristianLair"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border  border-foreground/10 rounded-lg hover:bg-foreground/5 transition-colors"
        >
          GitHub
        </a>

      </div>

    </section>
  );
}