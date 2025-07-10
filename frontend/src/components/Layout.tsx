import type React from "react"

interface LayoutProps {
  children: React.ReactNode
  showBranding?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, showBranding = false }) => {
  if (showBranding) {
    return (
      <div className="min-h-screen flex">
        {/* Left side - IFMS Branding */}
        <div className="flex-1 bg-gradient-to-br from-green-400 to-green-600 p-12 text-white flex flex-col justify-center">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                <div className="grid grid-cols-3 gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-sm"></div>
                  <div className="w-2 h-2 bg-green-300 rounded-sm"></div>
                  <div className="w-2 h-2 bg-green-300 rounded-sm"></div>
                  <div className="w-2 h-2 bg-green-300 rounded-sm"></div>
                  <div className="w-2 h-2 bg-green-300 rounded-sm"></div>
                  <div className="w-2 h-2 bg-green-300 rounded-sm"></div>
                  <div className="w-2 h-2 bg-green-300 rounded-sm"></div>
                  <div className="w-2 h-2 bg-green-300 rounded-sm"></div>
                  <div className="w-2 h-2 bg-green-300 rounded-sm"></div>
                </div>
              </div>
              <div>
                <div className="font-bold text-lg">INSTITUTO FEDERAL</div>
                <div className="text-sm opacity-90">Mato Grosso do Sul</div>
                <div className="text-sm opacity-90">Campus Três Lagoas</div>
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

        {/* Right side - Content */}
        <div className="flex-1 bg-gray-50 flex items-center justify-center p-8">{children}</div>
      </div>
    )
  }

  return <div className="min-h-screen bg-gray-50">{children}</div>
}

export default Layout
