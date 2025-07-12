"use client"

import type React from "react"
import { useState } from "react"
import { X, User, Mail, Building, MapPin, Calendar, Edit, Settings, Shield, LogOut } from "lucide-react"
import type { User as UserType } from "../types"
import ModalEditarPerfil from "./ModalEditarPerfil"
import { useNavigate } from "react-router-dom";

interface PerfilUsuarioCardProps {
  user: UserType
  onClose: () => void
  onLogout: () => void
}

const PerfilUsuarioCard: React.FC<PerfilUsuarioCardProps> = ({ user, onClose, onLogout }) => {
  const [showEditProfile, setShowEditProfile] = useState(false)
  const navigate = useNavigate();

  const handleSaveProfile = (userData: Partial<UserType>) => {
    console.log("Saving profile:", userData)
    // Here you would typically update the user data
  }

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-sm">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Perfil do Usuário</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6">
            {/* Profile Picture and Name */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
              <p className="text-sm text-gray-600 bg-green-50 px-3 py-1 rounded-full inline-block mt-1">
                {user.role === "teacher" ? "Professor" : user.role === "admin" ? "Administrador" : "Estudante"}
              </p>
            </div>

            {/* User Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-3" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Building className="w-4 h-4 mr-3" />
                <span>{user.department}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-3" />
                <span>{user.campus}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-3" />
                <span>Membro desde {user.memberSince}</span>
              </div>
            </div>

            {/* Menu Options */}
            <div className="space-y-2">
              <button
                onClick={() => setShowEditProfile(true)}
                className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <Edit className="w-4 h-4 mr-3" />
                Editar Perfil
              </button>

              {user.role === "admin" && (
                <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                  <Shield className="w-4 h-4 mr-3" />
                  Painel do Administrador
                </button>
              )}

              <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                <Settings className="w-4 h-4 mr-3" />
                Configurações
              </button>

              <button
  onClick={() => {
    onLogout();
    navigate("/");
  }}
  className="w-full flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
>
  <LogOut className="w-4 h-4 mr-3" />
  Sair da Conta
</button>

            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEditProfile && (
        <ModalEditarPerfil user={user} onClose={() => setShowEditProfile(false)} onSave={handleSaveProfile} />
      )}
    </>
  )
}

export default PerfilUsuarioCard
