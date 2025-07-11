from werkzeug.security import generate_password_hash

senha = "123456"

hash = generate_password_hash(senha)
print(hash)

