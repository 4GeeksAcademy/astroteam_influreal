"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from api.auth_routes.auth import auth
from api.influencer_routes.influencer import influencer
from flask_jwt_extended import JWTManager
from api.lista_routes.listas import listas
from api.propuestas_routes.propuestas import propuestas

api = Blueprint('api', __name__)
jwt = JWTManager()
api.register_blueprint(auth)
api.register_blueprint(influencer)
api.register_blueprint(listas)
api.register_blueprint(propuestas)
# Allow CORS requests to this API
CORS(api)

@api.record_once
def on_load(state):
    jwt.init_app(state.app)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200
