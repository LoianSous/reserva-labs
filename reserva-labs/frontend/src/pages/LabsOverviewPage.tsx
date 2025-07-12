"use client"

import type React from "react"
import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import type { Lab } from "../types"
import ModalNovoAgendamento from "../components/ModalNovoAgendamento"
import ModalReservas from "../components/ModalReservas"
import PerfilUsuarioCard from "../components/PerfilUsuarioCard"
import {
  Calendar,
  User,
  Plus
} from 'lucide-react';

const LabsOverviewPage: React.FC = () => {
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState("Todos")
  const [showNewAppointment, setShowNewAppointment] = useState(false)
  const [showUserProfile, setShowUserProfile] = useState(false)

  // ✅ Novo estado para abrir o modal de reservas
  const [selectedLabForReservations, setSelectedLabForReservations] = useState<Lab | null>(null)

  const tabs = ["Todos", "Hotel Tecnológico", "IF Maker", "Eletrônica"]

  const labs: Lab[] = [
    {
      id: "1",
      name: "Lab 1",
      type: "Hotel tecnológico",
      category: "Hotel Tecnológico",
      capacity: 30,
      status: "available",
      equipment: ["Computadores", "Projetor"],
    },
    {
      id: "2",
      name: "Lab 2",
      type: "Hotel tecnológico",
      category: "Hotel Tecnológico",
      capacity: 25,
      status: "available",
      equipment: ["Computadores", "Projetor"],
    },
    {
      id: "3",
      name: "Lab 3",
      type: "Hotel tecnológico",
      category: "Hotel Tecnológico",
      capacity: 20,
      status: "available",
      equipment: ["Computadores", "Projetor"],
    },
    {
      id: "4",
      name: "Lab 4",
      type: "Hotel tecnológico",
      category: "Hotel Tecnológico",
      capacity: 30,
      status: "available",
      equipment: ["Computadores", "Projetor"],
    },
    {
      id: "5",
      name: "Lab 5",
      type: "Hotel tecnológico",
      category: "Hotel Tecnológico",
      capacity: 25,
      status: "available",
      equipment: ["Computadores", "Projetor"],
    },
  ]

  const filteredLabs = activeTab === "Todos" ? labs : labs.filter((lab) => lab.category === activeTab)
  console.log("Usuário autenticado:", user)
  console.log("Mostrar modal de perfil:", showUserProfile)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                  <div className="grid grid-cols-3 gap-0.5">
                    <div className="w-1 h-1 bg-red-500 rounded-sm"></div>
                    <div className="w-1 h-1 bg-white rounded-sm"></div>
                    <div className="w-1 h-1 bg-white rounded-sm"></div>
                    <div className="w-1 h-1 bg-white rounded-sm"></div>
                    <div className="w-1 h-1 bg-white rounded-sm"></div>
                    <div className="w-1 h-1 bg-white rounded-sm"></div>
                    <div className="w-1 h-1 bg-white rounded-sm"></div>
                    <div className="w-1 h-1 bg-white rounded-sm"></div>
                    <div className="w-1 h-1 bg-white rounded-sm"></div>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-sm">INSTITUTO FEDERAL</div>
                  <div className="text-xs text-gray-600">Mato Grosso do Sul</div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowNewAppointment(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Novo Agendamento</span>
              </button>

              <button
                onClick={() => setShowUserProfile(true)}
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700"
              >
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Laboratórios Disponíveis</h1>
          <p className="text-gray-600">Selecione um laboratório para visualizar os agendamentos</p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab ? "bg-green-600 text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLabs.map((lab) => (
            <div key={lab.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{lab.name}</h3>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedLabForReservations(lab)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  {lab.type}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4">Laboratório de computadores</p>

              <button className="w-full bg-green-50 text-green-700 py-2 px-4 rounded-lg font-medium hover:bg-green-100 transition-colors flex items-center justify-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Agendar</span>
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Modals */}
      {showNewAppointment && <ModalNovoAgendamento onClose={() => setShowNewAppointment(false)} labs={labs} />}

      {showUserProfile && user && (
        <PerfilUsuarioCard user={user} onClose={() => setShowUserProfile(false)} onLogout={logout} />
      )}

      {/* ✅ Modal de Reservas */}
      {selectedLabForReservations && (
        <ModalReservas
          lab={selectedLabForReservations}
          onClose={() => setSelectedLabForReservations(null)}
        />
      )}
    </div>
  )
}

export default LabsOverviewPage
