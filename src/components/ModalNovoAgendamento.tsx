"use client"

import type React from "react"
import { useState } from "react"
import { X, Calendar, Clock, User, Users, FileText, MapPin } from "lucide-react"
import type { Lab } from "../types"

interface ModalNovoAgendamentoProps {
  onClose: () => void
  labs: Lab[]
}

const ModalNovoAgendamento: React.FC<ModalNovoAgendamentoProps> = ({ onClose, labs }) => {
  const [formData, setFormData] = useState({
    labId: "",
    studentName: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    responsibleName: "",
    participants: [""],
    description: "",
    notes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Agendamento criado:", formData)
    onClose()
  }

  const addParticipant = () => {
    setFormData((prev) => ({
      ...prev,
      participants: [...prev.participants, ""],
    }))
  }

  const updateParticipant = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      participants: prev.participants.map((p, i) => (i === index ? value : p)),
    }))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Novo agendamento</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <p className="text-sm text-gray-600">Preencha os dados para agendar o laboratório</p>

          {/* Laboratório */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              Laboratório
            </label>
            <select
              value={formData.labId}
              onChange={(e) => setFormData((prev) => ({ ...prev, labId: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            >
              <option value="">Nome do estudante</option>
              {labs.map((lab) => (
                <option key={lab.id} value={lab.id}>
                  {lab.name}
                </option>
              ))}
            </select>
          </div>

          {/* Nome do estudante */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 mr-2" />
              Nome do estudante
            </label>
            <input
              type="text"
              value={formData.studentName}
              onChange={(e) => setFormData((prev) => ({ ...prev, studentName: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          {/* Datas */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                Data de início
              </label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData((prev) => ({ ...prev, startDate: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Data de término</label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData((prev) => ({ ...prev, endDate: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Horários */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                Horário de início
              </label>
              <input
                type="time"
                value={formData.startTime}
                onChange={(e) => setFormData((prev) => ({ ...prev, startTime: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Horário de término</label>
              <input
                type="time"
                value={formData.endTime}
                onChange={(e) => setFormData((prev) => ({ ...prev, endTime: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Responsável pelo agendamento */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 mr-2" />
              Responsável pelo agendamento
            </label>
            <select
              value={formData.responsibleName}
              onChange={(e) => setFormData((prev) => ({ ...prev, responsibleName: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            >
              <option value="">Nome do estudante</option>
              <option value="Professor Silva">Professor Silva</option>
              <option value="Professor Costa">Professor Costa</option>
            </select>
          </div>

          {/* Estudantes participantes */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Users className="w-4 h-4 mr-2" />
              Estudantes participantes
            </label>
            {formData.participants.map((participant, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  value={participant}
                  onChange={(e) => updateParticipant(index, e.target.value)}
                  placeholder="Nome do estudante"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                {index === formData.participants.length - 1 && (
                  <button
                    type="button"
                    onClick={addParticipant}
                    className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700"
                  >
                    +
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Descrição */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <FileText className="w-4 h-4 mr-2" />
              Descrição
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              placeholder="Não preenchido"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Anotações adicionais */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <FileText className="w-4 h-4 mr-2" />
              Anotações adicionais
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
              placeholder="Descreva detalhes sobre o uso do laboratório, equipamentos necessários, etc."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Local */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              GMT-4 Horário do Mato Grosso do Sul
            </div>
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
            <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Agendar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalNovoAgendamento
