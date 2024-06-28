from flask import Flask, Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from flask_bcrypt import Bcrypt
from api.models import db, Influencer, Categoria, EdadObjetivo, PaisObjetivo
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

influencer = Blueprint('influencers', __name__, url_prefix='/influencer')

def get_or_create_category(nombre):
    category = Categoria.query.filter_by(nombre=nombre).first()
    if category is None:
        category = Categoria(nombre=nombre)
        db.session.add(category)
        db.session.commit()
    return category
def get_or_create_edad_objetivo(rango):
    edad_objetivo = EdadObjetivo.query.filter_by(rango=rango).first()
    if edad_objetivo is None:
        edad_objetivo = EdadObjetivo(rango=rango)
        db.session.add(edad_objetivo)
        db.session.commit()
    return edad_objetivo

def get_or_create_pais_objetivo(nombre):
    pais_objetivo = PaisObjetivo.query.filter_by(nombre=nombre).first()
    if pais_objetivo is None:
        pais_objetivo = PaisObjetivo(nombre=nombre)
        db.session.add(pais_objetivo)
        db.session.commit()
    return pais_objetivo

@influencer.get('/<int:id>')
def get_influencer(id):

   
    influencer = Influencer.query.get(id)

    if not influencer:
        return jsonify({'error': 'Influencer no encontrado'}, 404)

    influencer_data = {
        'id': influencer.id,
        'nombre': influencer.nombre,
        'redSocial': influencer.red_social,
        'erInstagram': influencer.er_instagram,
        'seguidoresInstagram': influencer.seguidores_instagram,
        'erTiktok': influencer.er_tiktok,
        'seguidoresTiktok': influencer.seguidores_tiktok,
        'imagen': influencer.imagen,
        'estiloDeVida': influencer.estilo_de_vida,
        'sexo': influencer.sexo,
        'categorias': [categoria.nombre for categoria in influencer.categorias],
        'edadObjetivo': [edad.rango for edad in influencer.edades_objetivo],
        'paisesObjetivo': [pais.nombre for pais in influencer.paises_objetivo]
    }

    return jsonify({"influencer": influencer_data}), 200

@influencer.post('/create')
def create_influecer():
    data = request.get_json()

    new_influencer = Influencer(
        nombre = data['nombre'],
        red_social = data['redSocial'],
        er_instagram = data['erInstagram'],
        seguidores_instagram = data['seguidoresInstagram'],
        er_tiktok = data['erTiktok'],
        seguidores_tiktok = data['seguidoresTiktok'],
        imagen = data['imagen'],
        estilo_de_vida = data['estiloDeVida'],
        sexo = data['sexo']
    )

    for categoria_nombre in data['categoria']:
         categoria = get_or_create_category(categoria_nombre)
         new_influencer.categorias.append(categoria)

    for rango in data['edadObjetivo']:
        edad_objetivo = get_or_create_edad_objetivo(rango)
        new_influencer.edades_objetivo.append(edad_objetivo)

    for pais_nombre in data['paisesObjetivo']:
        pais_objetivo = get_or_create_pais_objetivo(pais_nombre)
        new_influencer.paises_objetivo.append(pais_objetivo)

    db.session.add(new_influencer)
    db.session.commit()

    return jsonify({'message': 'Influencer creado con exito'}), 201

@influencer.get('/all')
def get_all_influencers():
    influencers = Influencer.query.all()
    influencers_list = []

    for influencer in influencers:
        influencers_list.append({
            'id': influencer.id,
            'nombre': influencer.nombre,
            'redSocial': influencer.red_social,
            'erInstagram': influencer.er_instagram,
            'seguidoresInstagram': influencer.seguidores_instagram,
            'erTiktok': influencer.er_tiktok,
            'seguidoresTiktok': influencer.seguidores_tiktok,
            'imagen': influencer.imagen,
            'estiloDeVida': influencer.estilo_de_vida,
            'sexo': influencer.sexo,
            'categorias': [categoria.nombre for categoria in influencer.categorias],
            'edadObjetivo': [edad.rango for edad in influencer.edades_objetivo],
            'paisesObjetivo': [pais.nombre for pais in influencer.paises_objetivo]
        })

    return jsonify({'influencers': influencers_list})



@influencer.post('/create-multiple')
def create_multiple_influecers():
    data = request.get_json()

    for influencer in data:
            new_influencer = Influencer(
                nombre=influencer.get('nombre'),
                red_social=influencer.get('redSocial'),
                er_instagram=influencer.get('erInstagram'),
                seguidores_instagram=influencer.get('seguidoresInstagram'),
                er_tiktok=influencer.get('erTiktok'),
                seguidores_tiktok=influencer.get('seguidoresTiktok'),
                imagen=influencer.get('imagen'),
                estilo_de_vida=influencer.get('estiloDeVida'),
                sexo=influencer.get('sexo')
            )

            for categoria_nombre in influencer.get('categoria', []):
                categoria = get_or_create_category(categoria_nombre)
                new_influencer.categorias.append(categoria)

            for rango in influencer.get('edadObjetivo', []):
                edad_objetivo = get_or_create_edad_objetivo(rango)
                new_influencer.edades_objetivo.append(edad_objetivo)

            for pais_nombre in influencer.get('paisesObjetivo', []):
                pais_objetivo = get_or_create_pais_objetivo(pais_nombre)
                new_influencer.paises_objetivo.append(pais_objetivo)

            db.session.add(new_influencer)

    db.session.commit()
    return jsonify({'message': 'Influencers creados con éxito'}), 201