// components/ModalReservas.tsx

import React from "react";
import { X, Plus } from "lucide-react";
import type { Lab } from "../types";

interface ModalReservasProps {
  lab: Lab;
  onClose: () => void;
}

const ModalReservas: React.FC<ModalReservasProps> = ({ lab, onClose }) => {
  // Exemplo de reservas fixas para Janeiro 2025
  const reservas = [
    { date: "2025-01-15", slots: ["08:00 - 10:00", "14:00 - 16:00"] },
    { date: "2025-01-18", slots: ["10:00 - 12:00"] },
    { date: "2025-01-22", slots: ["08:00 - 10:00", "10:00 - 12:00", "14:00 - 16:00"] },
  ];

  const hasReserva = (day: number) => {
    const dateStr = `2025-01-${day.toString().padStart(2, "0")}`;
    return reservas.find((r) => r.date === dateStr);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 overflow-y-auto pt-10">
      <div className="bg-white rounded-t-xl md:rounded-lg p-6 w-full max-w-3xl relative shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-semibold">Lab de informática 01</h2>
            <p className="text-sm text-gray-600">{lab.type}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-green-600 text-white px-3 py-1.5 rounded-md flex items-center text-sm hover:bg-green-700">
              <Plus className="w-4 h-4 mr-1" /> Agendar
            </button>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mês */}
        <div className="text-center mb-4">
          <h3 className="text-base font-medium">Janeiro 2025</h3>
        </div>

        {/* Dias da semana */}
        <div className="grid grid-cols-7 gap-2 text-center text-xs mb-2">
          {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
            <div key={day} className="text-gray-500">{day}</div>
          ))}
        </div>

        {/* Calendário */}
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
            const reserva = hasReserva(day);
            return (
              <div
                key={day}
                className={`relative border border-gray-200 rounded-md h-20 flex flex-col items-center justify-start p-1
                ${reserva ? "bg-green-50 border-green-200" : ""}`}
              >
                <div className="text-xs font-medium">{day}</div>
                {reserva && (
                  <div className="flex flex-col mt-1 space-y-0.5 w-full">
                    {reserva.slots.slice(0, 3).map((slot, idx) => (
                      <div
                        key={idx}
                        className="bg-green-600 rounded-sm h-2 w-full"
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModalReservas;
