import axios from 'axios'

const API_URL = 'http://localhost:5000';
export async function login(email: string, senha: string) {
    const response = await axios.post(`${API_URL}/login`, { email, senha});
    return response.data;
}

export async function cadastro(nome: string,email: string, senha: string) {
    const response = await axios.post(`${API_URL}/cadastro`, { nome, email, senha});
    return response.data;
}