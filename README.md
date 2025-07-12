# 🧪 Sistema de Agendamento de Laboratórios - IFMS Três Lagoas

Este repositório contém o sistema web desenvolvido para facilitar o **agendamento de laboratórios** pelos alunos e professores do **Instituto Federal de Mato Grosso do Sul – Campus Três Lagoas**.

A aplicação possui um **frontend moderno em React** e um **backend em Python (Flask)**. O objetivo é permitir uma gestão eficiente do uso dos laboratórios de informática, com controle de agendamentos e visualização de disponibilidade em tempo real.

Como rodar o projeto:
cd backend

# Instale as dependências
pip install -r requirements.txt

# Execute o servidor backend
python run.py

# Volte para a raiz do projeto (caso esteja no /backend)
cd ..
cd frontend

# Instale as dependências do frontend
npm install

# Inicie o servidor de desenvolvimento
npm run dev

---

## 🛠️ Tecnologias Utilizadas

### 🎨 Frontend
- **React + TypeScript**
- **Vite** (build e dev server)
- **React Router DOM** (SPA)
- **Tailwind CSS** (estilização)
- **Lucide React** (ícones SVG)
- **Context API** (autenticação e estado global)

### ⚙️ Backend
- **Python 3**
- **Flask** (API)
- **requirements.txt** para dependências

---

## 📁 Estrutura do Projeto

```bash
reserva-labs/
├── backend/                   # API Flask (Python)
│   ├── run.py                 # Arquivo principal de execução
│   └── requirements.txt       # Lista de dependências do backend
│
├── src/                       # Frontend React
│   ├── components/            # Componentes reutilizáveis
│   ├── contexts/              # AuthContext e estado global
│   ├── pages/                 # Páginas (login, dashboard, admin)
│   ├── types/                 # Tipagens TypeScript
│   ├── App.tsx                # Definição de rotas
│   └── main.tsx               # Ponto de entrada do React
│
├── public/                    # Imagens e assets estáticos
├── index.css                  # Estilos globais (Tailwind)
└── tailwind.config.js         # Configuração do Tailwind
