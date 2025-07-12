import type React from "react"

interface LayoutProps {
  children: React.ReactNode
  showBranding?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, showBranding = false }) => {
  if (showBranding) {
    return (
      <div className="min-h-screen flex">
        {/* Lado esquerdo com fundo verde e quadrados brancos */}
        <div className="flex-1 bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden p-12 text-white flex flex-col justify-center">
          {/* Quadrados adaptados ao layout responsivo */}
<div className="absolute inset-0 pointer-events-none">
  <div className="absolute w-[500px] h-[700px] top-[0%] left-[60%] bg-[#106d31] rounded-[80px] rotate-[-29deg] opacity-[0.5]" />
  <div className="absolute w-[500px] h-[700px] top-[-40%] left-[-10%] bg-[#388353] rounded-[80px] rotate-[-29deg] opacity-[0.5]" />
  <div className="absolute w-[500px] h-[700px] top-[10%] left-[30%] bg-[#2ec464] rounded-[80px] rotate-[-29deg] opacity-[0.3]" />
  <div className="absolute w-[500px] h-[700px] top-[-10%] left-[-25%] bg-[#6dcd90] rounded-[80px] rotate-[-29deg] opacity-[0.4]" />
</div>
          {/* Conteúdo por cima dos quadrados */}
          <div className="relative z-10">
            <div className="mb-8">
              <div className="mb-8">
                <div className="inline-block bg-white rounded-xl shadow-md p-2">
                  <img
                    src="/img/ifms-tl-marca-2015.png"
                    alt="Logo IFMS"
                    className="h-20 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">Sistema de Agendamento de Laboratórios</h1>
              <p className="text-lg opacity-90 leading-relaxed">
                Bem-vindo ao Sistema de Agendamento de Laboratórios do IFMS. Aqui você pode reservar espaços nos
                laboratórios da sua unidade acadêmica de forma simples e rápida.
              </p>
            </div>
          </div>
        </div>

        {/* Lado direito (formulário ou children) */}
        <div className="flex-1 bg-gray-50 flex items-center justify-center p-8">{children}</div>
      </div>
    )
  }

  return <div className="min-h-screen bg-gray-50">{children}</div>
}

export default Layout
