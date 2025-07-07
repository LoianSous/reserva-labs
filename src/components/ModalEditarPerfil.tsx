"use client"

import type React from "react"
import { useState } from "react"
import { X, User, Save } from "lucide-react"
import type { User as UserType } from "../types"

interface ModalEditarPerfilProps {
  user: UserType
  onClose: () => void
  onSave: (userData: Partial<UserType>) => void
}

const ModalEditarPerfil: React.FC<ModalEditarPerfilProps> = ({ user, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    role: user.role,
    department: user.department,
    campus: user.campus,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Editar Perfil</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Profile Picture */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-3">
              <User className="w-10 h-10 text-white" />
            </div>
            <button type="button" className="text-sm text-green-600 hover:text-green-700 font-medium">
              Clique na foto para alterar a foto
            </button>
          </div>

          {/* Nome */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
            <div className="flex">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
              <div className="px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg text-gray-600">
                Teste
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          {/* Função */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Função</label>
            <select
              value={formData.role}
              onChange={(e) => setFormData((prev) => ({ ...prev, role: e.target.value as UserType["role"] }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="student">Estudante</option>
              <option value="teacher">Professor</option>
              <option value="admin">Administrador</option>
            </select>
          </div>

          {/* Departamento */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Departamento</label>
            <select
              value={formData.department}
              onChange={(e) => setFormData((prev) => ({ ...prev, department: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="Departamento de Informática">Departamento de Informática</option>
              <option value="Departamento de Eletrônica">Departamento de Eletrônica</option>
              <option value="Departamento de Mecânica">Departamento de Mecânica</option>
            </select>
          </div>

          {/* Campus */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Campus</label>
            <select
              value={formData.campus}
              onChange={(e) => setFormData((prev) => ({ ...prev, campus: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="IFMS - Campus Três Lagoas">IFMS - Campus Três Lagoas</option>
              <option value="IFMS - Campus Campo Grande">IFMS - Campus Campo Grande</option>
              <option value="IFMS - Campus Dourados">IFMS - Campus Dourados</option>
            </select>
          </div>

          {/* Biografia */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Biografia (opcional)</label>
            <textarea
              placeholder="Conte um pouco sobre você..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>Salvar Alterações</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalEditarPerfil
