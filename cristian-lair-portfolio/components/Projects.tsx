export default function Projects() {
    return (
      <section id="projects" className="mt-20 space-y-10">
  
        <h2 className="text-3xl font-semibold">Proyectos</h2>
  
        <div className="space-y-4">
  
          <h3 className="text-xl font-medium">
            Marketplace NFT
          </h3>
  
          <p className="text-gray-600 max-w-2xl">
            Desarrollo de un marketplace para la creación, compra y venta de NFTs,
            con integración de wallets como MetaMask para interacción con contratos
            inteligentes y sistema automático de comisiones para creadores.
          </p>
  
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Diseño e implementación de APIs backend en Node.js.</li>
            <li>Autenticación de usuarios mediante JWT.</li>
            <li>Gestión de roles y permisos.</li>
            <li>Integración con MetaMask para interacción con contratos inteligentes.</li>
            <li>Persistencia de datos utilizando MongoDB.</li>
          </ul>
  
          <div className="flex gap-4 pt-2">
  
            <a
              href="https://github.com/CristianLair/Henry-Backend-PF"
              target="_blank"
              className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              Ver código
            </a>
  
          </div>
  
        </div>
  
      </section>
    )
  }