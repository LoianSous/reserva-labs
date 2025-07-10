from flask import Blueprint, request, jsonify
from .models import User, db, Laboratorio, Reserva

bp = Blueprint('main', __name__)

#login do usuário
@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    senha = data.get('senha')
    user = User.query.filter_by(email = email, senha = senha).first()

    if user:
        return jsonify({'mensagem':'login bem sucedido!', 'user_id': 'user.id'}), 200
    
    else:
        return jsonify({'erro':'Credencias inválidas!'}), 401
        
#listagem de laboratórios
@bp.route('/laboratorios', methods = ['GET'])
def get_laboratorios():
    laboratorios = Laboratorio.query.all()
    resultado = [{"id": lab.id, "nome": lab.nome} for lab in laboratorios]
    return jsonify(resultado)

#listagem de reservas/agendamentos
@bp.route('/reservas', methods=['GET'])
def get_reservas():
    reservas = Reserva.query.all()
    resultado = []

    for r in reservas:
        resultado.append({
            "id": r.id,
            "usuario": r.usuario,
            "laboratorio_id": r.laboratorio_id,
            "laboratorio_nome": r.laboratorio.nome,
            "data": r.data.strftime('%Y-%m-%d'),
            "hora_inicio": r.hora_inicio.strftime('%H:%M'),
            "hora_fim": r.hora_fim.strftime('%H:%M')
        })

    return jsonify(resultado)