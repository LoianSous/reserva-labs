from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Laboratorio(db.Model):
    __tablename__ = 'laboratorio'

    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)

    reservas = db.relationship('Reserva', backref = 'laboratorio', lazy = True)

    def __repr__(self):
        return f'<Laboratorio {self.nome}>'

class Reserva(db.Model):
    __tablename__ = 'reserva'

    id = db.Column(db.Integer, primary_key=True)
    usuario = db.Column(db.String(100), nullable=False)
    laboratorio_id = db.Column(db.Integer, db.ForeignKey('laboratorio.id'), nullable=False)
    data = db.Column(db.Date, nullable=False)
    hora_inicio = db.Column(db.Time, nullable=False)
    hora_fim = db.Column(db.Time, nullable=False)

    def __repr__(self):
        return f'<Reserva de {self.usuario} em {self.data} das {self.hora_inicio} às {self.hora_fim}'

class User(db.Model):
    __tablename__ = 'user'  

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    senha = db.Column(db.String(100), nullable=False)

    


    
