from flask import Blueprint, request, jsonify
from api.models import db, Influencer, Categoria, EdadObjetivo, PaisObjetivo
from flask_jwt_extended import jwt_required

influencer = Blueprint('influencers', __name__, url_prefix='/influencer')

# Función auxiliar para obtener o crear una categoría
def get_or_create_category(nombre):
    category = Categoria.query.filter_by(nombre=nombre).first()
    if category is None:
        category = Categoria(nombre=nombre)
        db.session.add(category)
        db.session.commit()
    return category

# Función auxiliar para obtener o crear un rango de edad objetivo
def get_or_create_edad_objetivo(rango):
    edad_objetivo = EdadObjetivo.query.filter_by(rango=rango).first()
    if edad_objetivo is None:
        edad_objetivo = EdadObjetivo(rango=rango)
        db.session.add(edad_objetivo)
        db.session.commit()
    return edad_objetivo

# Función auxiliar para obtener o crear un país objetivo
def get_or_create_pais_objetivo(nombre):
    pais_objetivo = PaisObjetivo.query.filter_by(nombre=nombre).first()
    if pais_objetivo is None:
        pais_objetivo = PaisObjetivo(nombre=nombre)
        db.session.add(pais_objetivo)
        db.session.commit()
    return pais_objetivo

# Ruta para obtener un influencer por su ID
@influencer.get('/<int:id>')
def get_influencer(id):
    influencer = Influencer.query.get(id)

    if not influencer:
        return jsonify({'error': 'Influencer no encontrado'}), 404

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
        'bio': influencer.bio,
        'likesInstagram': influencer.likes_instagram,
        'likesTiktok': influencer.likes_tiktok,
        'comentariosInstagram': influencer.comentarios_instagram,
        'comentariosTiktok': influencer.comentarios_tiktok,
        'usuarioInstagram': influencer.instagram_user,
        'usuarioTiktok': influencer.tiktok_user,
        'email': influencer.email,
        'phone': influencer.phone,
        'categorias': [categoria.nombre for categoria in influencer.categorias],
        'edadesObjetivo': [edad.rango for edad in influencer.edades_objetivo],
        'paisesObjetivo': [pais.nombre for pais in influencer.paises_objetivo]
    }

    return jsonify({"influencer": influencer_data}), 200

# Ruta para crear un influencer
@influencer.post('/create')
def create_influencer():
    data = request.get_json()

    new_influencer = Influencer(
        nombre=data['nombre'],
        red_social=data.get('redSocial'),
        er_instagram=data.get('erInstagram'),
        seguidores_instagram=data.get('seguidoresInstagram'),
        er_tiktok=data.get('erTiktok'),
        seguidores_tiktok=data.get('seguidoresTiktok'),
        imagen=data.get('imagen'),
        estilo_de_vida=data.get('estiloDeVida'),
        sexo=data.get('sexo'),
        bio=data.get('bio', ''),
        likes_instagram=data.get('likesInstagram', ''),
        likes_tiktok=data.get('likesTiktok', ''),
        comentarios_instagram=data.get('comentariosInstagram', ''),
        comentarios_tiktok=data.get('comentariosTiktok', ''),
        instagram_user=data.get('usuarioInstagram'),
        tiktok_user=data.get('usuarioTiktok'),
        email=data.get('email'),
        phone=data.get('phone'),
        
    )

    for categoria_nombre in data.get('categoria', []):
        categoria = get_or_create_category(categoria_nombre)
        new_influencer.categorias.append(categoria)

    for rango in data.get('edadObjetivo', []):
        edad_objetivo = get_or_create_edad_objetivo(rango)
        new_influencer.edades_objetivo.append(edad_objetivo)

    for pais_nombre in data.get('paisesObjetivo', []):
        pais_objetivo = get_or_create_pais_objetivo(pais_nombre)
        new_influencer.paises_objetivo.append(pais_objetivo)

    db.session.add(new_influencer)
    db.session.commit()

    return jsonify({'message': 'Influencer creado con éxito'}), 201

# Ruta para obtener todos los influencers
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
            'bio': influencer.bio,
            'likesInstagram': influencer.likes_instagram,
            'likesTiktok': influencer.likes_tiktok,
            'comentariosInstagram': influencer.comentarios_instagram,
            'comentariosTiktok': influencer.comentarios_tiktok,
            'usuarioInstagram': influencer.instagram_user,
            'usuarioTiktok': influencer.tiktok_user,
            'email': influencer.email,
            'phone': influencer.phone,
            'categoria': [categoria.nombre for categoria in influencer.categorias],
            'edadObjetivo': [edad.rango for edad in influencer.edades_objetivo],
            'paisesObjetivo': [pais.nombre for pais in influencer.paises_objetivo]

        })

    return jsonify({'influencers': influencers_list}), 200

# Ruta para crear múltiples influencers
@influencer.post('/create-multiple')
@jwt_required()
def create_multiple_influencers():
    data = request.get_json()

    for influencer_data in data:
        new_influencer = Influencer(
            nombre=influencer_data.get('nombre'),
            red_social=influencer_data.get('redSocial'),
            er_instagram=influencer_data.get('erInstagram'),
            seguidores_instagram=influencer_data.get('seguidoresInstagram'),
            er_tiktok=influencer_data.get('erTiktok'),
            seguidores_tiktok=influencer_data.get('seguidoresTiktok'),
            imagen=influencer_data.get('imagen'),
            estilo_de_vida=influencer_data.get('estiloDeVida'),
            sexo=influencer_data.get('sexo'),
            bio=influencer_data.get('bio', ''),
            likes_instagram=influencer_data.get('likesInstagram', ''),
            likes_tiktok=influencer_data.get('likesTiktok', ''),
            comentarios_instagram=influencer_data.get('comentariosInstagram', ''),
            comentarios_tiktok=influencer_data.get('comentariosTiktok', ''),
            instagram_user=influencer_data.get('usuarioInstagram'),
            tiktok_user=influencer_data.get('usuarioTiktok'),
            email=influencer_data.get('email'),
            phone=influencer_data.get('phone')
        )

        for categoria_nombre in influencer_data.get('categoria', []):
            categoria = get_or_create_category(categoria_nombre)
            new_influencer.categorias.append(categoria)

        for rango in influencer_data.get('edadObjetivo', []):
            edad_objetivo = get_or_create_edad_objetivo(rango)
            new_influencer.edades_objetivo.append(edad_objetivo)

        for pais_nombre in influencer_data.get('paisesObjetivo', []):
            pais_objetivo = get_or_create_pais_objetivo(pais_nombre)
            new_influencer.paises_objetivo.append(pais_objetivo)

        db.session.add(new_influencer)

    db.session.commit()
    return jsonify({'message': 'Influencers creados con éxito'}), 201
