from flask import Flask, Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from flask_bcrypt import Bcrypt
from api.models import db, User
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from api.extensions import bcrypt

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

@auth.put('/change-password')
@jwt_required()
def change_password():
    data = request.json

    # Validate incoming data
    if 'password' not in data:
        return jsonify({"msg": "New password is required"}), 400

    new_password = data['password']
    current_user_id = get_jwt_identity()

    user = db.session.execute(db.select(User).filter_by(id=current_user_id)).scalar_one()

    if user is None:
        return jsonify({"msg": "User not found"}), 401

    user.set_password(new_password)

    db.session.commit()

    return jsonify({"msg": "Password updated successfully"}), 200