"use client"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/LoginPage"
import LabsOverviewPage from './pages/LabsOverviewPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/laboratorios" element={<LabsOverviewPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default(App)