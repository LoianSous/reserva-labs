from flask import Blueprint, request, jsonify
from .models import User, db, Laboratorio, Reserva
from werkzeug.security import generate_password_hash, check_password_hash

bp = Blueprint('main', __name__)

# Rota de login do usuário
@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    senha = data.get('senha')
    
    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.senha, senha):
        return jsonify({
            'mensagem': 'login bem sucedido!',
            'user_id': user.id,
            'email': user.email,
            'name': 'Usuário Teste',  # adicione aqui caso não tenha no banco
            'role': 'admin' if 'admin' in user.email else 'student',
            'department': 'Departamento de Informática',
            'campus': 'IFMS - Campus Três Lagoas',
            'memberSince': 'Março 2020'
        }), 200
    else:
        return jsonify({'erro': 'Credenciais inválidas!'}), 401
        
# Rote de listagem de laboratórios
@bp.route('/laboratorios', methods = ['GET'])
def get_laboratorios():
    laboratorios = Laboratorio.query.all()
    resultado = [{"id": lab.id, "nome": lab.nome} for lab in laboratorios]
    return jsonify(resultado)

# Rota de listagem de reservas/agendamentos
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

# Rota de cadastro
@bp.route('/cadastro', methods=['POST'])
def cadastro():
    data = request.get_json()
    nome = data.get('nome')
    email = data.get('email')
    senha = data.get('senha')

    if not nome or not email or not senha:
        return jsonify({'error': 'Dados incompletos'}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({'error': 'E-mail já cadastrado'}), 409

    senha_hash = generate_password_hash(senha)

    novo_usuario = User(nome=nome, email=email, senha=senha_hash)
    db.session.add(novo_usuario)
    db.session.commit()

    return jsonify({'message': 'Usuário cadastrado com sucesso'}), 201

# Rota de recuperação de senha
@bp.route('/recuperar-senha', methods=['POST'])
def recuperar_senha():
    data = request.get_json()
    email = data.get('email')

    usuario = User.query.filter_by(email=email).first()
    if not usuario:
        return jsonify({'error': 'Usuário não encontrado'}), 404


    return jsonify({'message': f'Instruções enviadas para o e-mail {email}'}), 200

# Rota de perfil do usuário
@bp.route('/perfil/<int:usuario_id>', methods=['GET'])
def perfil(usuario_id):
    usuario = User.query.get(usuario_id)
    if not usuario:
        return jsonify({'error': 'Usuário não encontrado'}), 404

    return jsonify({
        'id': usuario.id,
        'nome': usuario.nome,
        'email': usuario.email
    }), 200
