"use client"

import React, { useEffect } from "react"

interface FeedbackAlertProps {
  message: string
  type: "success" | "error"
  onClose: () => void
}

const FeedbackAlert: React.FC<FeedbackAlertProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  const bgColor = type === "success" ? "bg-green-100 border-green-500 text-green-700" : "bg-red-100 border-red-500 text-red-700"

  return (
    <div className={`fixed top-5 right-5 z-50 border-l-4 p-4 rounded shadow ${bgColor}`}>
      <p className="text-sm font-medium">{message}</p>
    </div>
  )
}

export default FeedbackAlert
