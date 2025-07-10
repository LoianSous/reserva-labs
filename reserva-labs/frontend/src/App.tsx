"use client"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/LoginPage"
import LabsOverviewPage from './pages/LabsOverviewPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/usuario" element={<LabsOverviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default(App)