"use client"

import type React from "react"
import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Users, Building, Clock, Calendar, Search, Edit, Trash2, Eye } from "lucide-react"

const AdminDashboardPage: React.FC = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("Visão Geral")
  const [searchTerm, setSearchTerm] = useState("")

  const tabs = ["Visão Geral", "Usuários", "Laboratórios", "Solicitações", "Configurações"]

  const stats = [
    { label: "Total de Usuários", value: "156", subtitle: "Usuários cadastrados", icon: Users, color: "bg-blue-500" },
    { label: "Labs Ativos", value: "12", subtitle: "Laboratórios", icon: Building, color: "bg-green-500" },
    {
      label: "Solicitações Pendentes",
      value: "8",
      subtitle: "Aguardando aprovação",
      icon: Clock,
      color: "bg-yellow-500",
    },
    {
      label: "Agendamentos Hoje",
      value: "23",
      subtitle: "Agendamentos para hoje",
      icon: Calendar,
      color: "bg-purple-500",
    },
  ]

  const users = [
    {
      id: 1,
      name: "João Silva",
      email: "joao@ifms.edu.br",
      role: "Professor",
      status: "Ativo",
      lastLogin: "2024-01-02",
    },
    { id: 2, name: "Ana Costa", email: "ana@ifms.edu.br", role: "Aluno", status: "Ativo", lastLogin: "2024-01-02" },
    {
      id: 3,
      name: "Carlos Santos",
      email: "carlos@ifms.edu.br",
      role: "Técnico",
      status: "Inativo",
      lastLogin: "2023-12-28",
    },
  ]

  const labs = [
    {
      id: 1,
      name: "LAB 01",
      capacity: "30 pessoas",
      department: "Computadores",
      status: "Disponível",
      schedule: "8 anos atrás",
    },
    {
      id: 2,
      name: "LAB 02",
      capacity: "25 pessoas",
      department: "Eletrônica",
      status: "Ocupado",
      schedule: "8 anos atrás",
    },
    {
      id: 3,
      name: "LAB 03",
      capacity: "20 pessoas",
      department: "Inglês",
      status: "Manutenção",
      schedule: "8 anos atrás",
    },
  ]

  const appointments = [
    { id: 1, student: "Maria Silva", lab: "LAB 01", date: "2024-01-02", time: "14:00-16:00", status: "Pendente" },
    { id: 2, student: "Pedro Lima", lab: "LAB 02", date: "2024-01-02", time: "08:00-10:00", status: "Pendente" },
    { id: 3, student: "Ana Garcia", lab: "LAB 03", date: "2024-01-02", time: "10:00-12:00", status: "Aprovado" },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case "Visão Geral":
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Atividade Recente</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">João Silva agendou LAB 01 para amanhã às 14:00</span>
                    <span className="text-xs text-gray-400">há 2 min</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Novo usuário Ana Costa foi cadastrado</span>
                    <span className="text-xs text-gray-400">há 5 min</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">LAB 03 entrou em manutenção</span>
                    <span className="text-xs text-gray-400">há 1h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "Usuários":
        return (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Usuários</h3>
                <div className="flex space-x-3">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Buscar usuários..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700">
                    Novo Usuário
                  </button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nome
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Função
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Último Login
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            user.status === "Ativo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.lastLogin}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-green-600 hover:text-green-800">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )

      case "Laboratórios":
        return (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Laboratórios</h3>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700">
                  Novo Laboratório
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nome
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Capacidade
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Departamento
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Agendamento
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {labs.map((lab) => (
                    <tr key={lab.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lab.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lab.capacity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lab.department}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            lab.status === "Disponível"
                              ? "bg-green-100 text-green-800"
                              : lab.status === "Ocupado"
                                ? "bg-red-100 text-red-800"
                                : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {lab.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lab.schedule}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-green-600 hover:text-green-800">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )

      case "Solicitações":
        return (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Solicitações</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estudante
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Laboratório
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Horário
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {appointments.map((appointment) => (
                    <tr key={appointment.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {appointment.student}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.lab}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            appointment.status === "Aprovado"
                              ? "bg-green-100 text-green-800"
                              : appointment.status === "Pendente"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="text-green-600 hover:text-green-800">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )

      case "Configurações":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Configurações Gerais</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900">Aprovação automática</h4>
                    <p className="text-sm text-gray-600">Aprovar automaticamente agendamentos de professores</p>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
                    Ativar
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900">Notificações por email</h4>
                    <p className="text-sm text-gray-600">Enviar notificações por email para administradores</p>
                  </div>
                  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300">
                    Configurar
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900">Horário de funcionamento</h4>
                    <p className="text-sm text-gray-600">Definir horários disponíveis para agendamento</p>
                  </div>
                  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300">
                    Editar
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Backup e Segurança</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900">Backup automático</h4>
                    <p className="text-sm text-gray-600">Realizar backup automático dos dados</p>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
                    Configurar
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900">Logs do sistema</h4>
                    <p className="text-sm text-gray-600">Visualizar logs de atividade</p>
                  </div>
                  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300">
                    Ver Logs
                  </button>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">Painel do Administrador</h1>
            <div className="text-sm text-gray-600">Bem-vindo, {user?.name}</div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  )
}

export default AdminDashboardPage
