from flask import Flask
from flask_cors import CORS
from .models import db
from .routes import bp as routes

def create_app():
    app = Flask(__name__)

    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"

    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    CORS(app)

    app.register_blueprint(routes)

    return app