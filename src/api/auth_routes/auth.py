from flask import Flask, Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from flask_bcrypt import Bcrypt
from api.models import db, User
auth = Blueprint('auth', __name__, url_prefix='/auth')

@auth.get('/')
def hello():
    return 'Hello'

@auth.post('/login')
def login():

    data = request.get_json()

    user = User.query.filter_by(email=data['email']).first()

    if user and user.check_password(data['password']):
        token = create_access_token(identity=user.id)
        return jsonify({"token": token, "user.id":user.id}), 200
    
    return jsonify({"msg": "username or password invalid"}), 401
    
    

@auth.post('/register')
def register():

    data = request.get_json()

    new_user = User(data['email'])
    new_user.set_password(data['password'])
    db.session.add(new_user)
    db.session.commit()

    user = User.query.filter_by(email=data['email']).first()
    token = create_access_token(identity=user.id)
    return jsonify({"msg": "registered successfully", "token":token}), 201

