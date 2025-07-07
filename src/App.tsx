"use client"

import type React from "react"
import { AuthProvider, useAuth } from "./contexts/AuthContext"
import LoginPage from "./pages/LoginPage"
import LabsOverviewPage from "./pages/LabsOverviewPage"
import AdminDashboardPage from "./pages/AdminDashboardPage"

const AppContent: React.FC = () => {
  const { user, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <LoginPage />
  }

  if (user?.role === "admin") {
    return <AdminDashboardPage />
  }

  return <LabsOverviewPage />
}

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
