from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from api.models import db, Propuesta

propuestas = Blueprint('propuestas', __name__, url_prefix='/propuestas')

@propuestas.route('/create', methods=['POST'])
@jwt_required()
def create_propuesta():
    data = request.get_json()
    user_id = get_jwt_identity()
    new_propuesta = Propuesta(
        nombre=data['nombre'],
        usuario_id= user_id,
        descripcion=data['descripcion']
    )

    db.session.add(new_propuesta)
    db.session.commit()
    
    return jsonify({'message': 'Propuesta creada con éxito'}), 201

@propuestas.route('/all', methods=['GET'])
@jwt_required()
def get_all_propuestas():
    propuestas = Propuesta.query.all()
    propuestas_list = []

    for propuesta in propuestas:
        propuestas_list.append({
            'id': propuesta.id,
            'nombre': propuesta.nombre,
            'descripcion': propuesta.descripcion,
            'fecha_creacion': propuesta.fecha_creacion
        })

    return jsonify({'propuestas': propuestas_list})

@propuestas.route('/<int:propuesta_id>', methods=['GET'])
@jwt_required()
def get_propuesta(propuesta_id):
    propuesta = Propuesta.query.get(propuesta_id)
    if not propuesta:
        return jsonify({'message': 'Propuesta no encontrada'}), 404
    
    propuesta_data = {
        'id': propuesta.id,
        'nombre': propuesta.nombre,
        'descripcion': propuesta.descripcion,
        'fecha_creacion': propuesta.fecha_creacion
    }

    return jsonify({'propuesta': propuesta_data})

@propuestas.route('/<int:propuesta_id>', methods=['PUT'])
@jwt_required()
def update_propuesta(propuesta_id):
    data = request.get_json()
    propuesta = Propuesta.query.get(propuesta_id)
    
    if not propuesta:
        return jsonify({'message': 'Propuesta no encontrada'}), 404

    propuesta.nombre = data.get('nombre', propuesta.nombre)
    propuesta.descripcion = data.get('descripcion', propuesta.descripcion)

    db.session.commit()

    return jsonify({'message': 'Propuesta actualizada con éxito'})

@propuestas.route('/<int:propuesta_id>', methods=['DELETE'])
@jwt_required()
def delete_propuesta(propuesta_id):
    propuesta = Propuesta.query.get(propuesta_id)
    
    if not propuesta:
        return jsonify({'message': 'Propuesta no encontrada'}), 404

    db.session.delete(propuesta)
    db.session.commit()

    return jsonify({'message': 'Propuesta eliminada con éxito'})

