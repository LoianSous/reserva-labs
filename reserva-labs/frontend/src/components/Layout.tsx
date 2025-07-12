import type React from "react"

interface LayoutProps {
  children: React.ReactNode
  showBranding?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, showBranding = false }) => {
  if (showBranding) {
    return (
      <div className="min-h-screen flex">
        <div className="flex-1 bg-gradient-to-br from-green-400 to-green-600 p-12 text-white flex flex-col justify-center">
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
        <div className="flex-1 bg-gray-50 flex items-center justify-center p-8">{children}</div>
      </div>
    )
  }

  return <div className="min-h-screen bg-gray-50">{children}</div>
}

export default Layout
