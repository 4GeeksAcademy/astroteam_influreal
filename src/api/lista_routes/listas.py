from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from api.models import db, User, Influencer, Lista

listas = Blueprint('listas', __name__, url_prefix='/listas')

@listas.route('/create', methods=['POST'])
@jwt_required()
def create_lista():
    data = request.get_json()
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    
    if not user:
        return jsonify({'message': 'Usuario no encontrado'}), 404

    nombre = data.get('nombre')
    

    if not nombre:
        return jsonify({'message': 'El campo "nombre" es requerido'}), 400
    

    new_lista = Lista(nombre=nombre, empresa_id=user_id)


    db.session.add(new_lista)
    db.session.commit()
    
    return jsonify({'message': 'Lista creada con éxito'}), 201

@listas.route('/all', methods=['GET'])
@jwt_required()
def get_all_listas():
    user_id = get_jwt_identity()
    listas = Lista.query.filter_by(empresa_id=user_id).all()
    listas_list = []

    for lista in listas:
        listas_list.append({
            'id': lista.id,
            'nombre': lista.nombre,
            'usuario_id': lista.empresa_id,
            'usuario_email': lista.empresa.email,
            'fecha_creacion': lista.fecha_creacion,
            'influencers': [influencer.id for influencer in lista.influencers]
        })

    return jsonify({'listas': listas_list})

@listas.route('/<int:lista_id>', methods=['GET'])
@jwt_required()
def get_lista(lista_id):
    user_id = get_jwt_identity()
    lista = Lista.query.filter_by(id=lista_id, empresa_id=user_id).first()
    if not lista:
        return jsonify({'message': 'Lista no encontrada o no pertenece a este usuario'}), 404
    
    lista_data = {
        'id': lista.id,
        'nombre': lista.nombre,
        'usuario_id': lista.empresa_id,
        'usuario_email': lista.empresa.email,
        'fecha_creacion': lista.fecha_creacion,
        'influencers': [influencer.id for influencer in lista.influencers]
    }

    return jsonify({'lista': lista_data})

@listas.route('/<int:lista_id>/add_influencer', methods=['POST'])
@jwt_required()
def add_influencer_to_lista(lista_id):
    user_id = get_jwt_identity()
    lista = Lista.query.filter_by(id=lista_id, empresa_id=user_id).first()
    
    if not lista:
        return jsonify({'message': 'Lista no encontrada o no pertenece a este usuario'}), 404

    data = request.get_json()
    influencer = Influencer.query.get(data['influencer_id'])
    if not influencer:
        return jsonify({'message': 'Influencer no encontrado'}), 404

    lista.influencers.append(influencer)
    db.session.commit()

    return jsonify({'message': 'Influencer añadido a la lista con éxito'})

@listas.route('/<int:lista_id>/remove_influencer', methods=['POST'])
@jwt_required()
def remove_influencer_from_lista(lista_id):
    user_id = get_jwt_identity()
    lista = Lista.query.filter_by(id=lista_id, empresa_id=user_id).first()
    
    if not lista:
        return jsonify({'message': 'Lista no encontrada o no pertenece a este usuario'}), 404

    data = request.get_json()
    influencer = Influencer.query.get(data['influencer_id'])
    if not influencer:
        return jsonify({'message': 'Influencer no encontrado'}), 404

    lista.influencers.remove(influencer)
    db.session.commit()

    return jsonify({'message': 'Influencer eliminado de la lista con éxito'})


@listas.route('/<int:lista_id>', methods=['DELETE'])
@jwt_required()
def delete_lista(lista_id):
    user_id = get_jwt_identity()
    lista = Lista.query.filter_by(id=lista_id, empresa_id=user_id).first()
    
    if not lista:
        return jsonify({'message': 'Lista no encontrada o no pertenece a este usuario'}), 404

    db.session.delete(lista)
    db.session.commit()

    return jsonify({'message': 'Lista eliminada con éxito'}), 200