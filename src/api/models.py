from flask_sqlalchemy import SQLAlchemy
from api.extensions import bcrypt

db = SQLAlchemy()

# Modelos existentes
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)

    def __init__(self, email):
        self.email = email

    def set_password(self, password):
        self.password = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password, password)

categoria_table = db.Table('categoria_table',
    db.Column('influencer_id', db.Integer, db.ForeignKey('influencer.id'), primary_key=True),
    db.Column('nombre', db.String(50), db.ForeignKey('categoria.nombre'), primary_key=True)
)

edad_objetivo_table = db.Table('edad_objetivo_table',
    db.Column('influencer_id', db.Integer, db.ForeignKey('influencer.id'), primary_key=True),
    db.Column('rango', db.String(50), db.ForeignKey('edad_objetivo.rango'), primary_key=True)
)

pais_objetivo_table = db.Table('pais_objetivo_table',
    db.Column('influencer_id', db.Integer, db.ForeignKey('influencer.id'), primary_key=True),
    db.Column('nombre', db.String(50), db.ForeignKey('pais_objetivo.nombre'), primary_key=True)
)

class Influencer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    red_social = db.Column(db.String(50), nullable=False)
    er_instagram = db.Column(db.Float, nullable=False)
    seguidores_instagram = db.Column(db.Integer, nullable=False)
    er_tiktok = db.Column(db.Float, nullable=False)
    seguidores_tiktok = db.Column(db.Integer, nullable=False)
    imagen = db.Column(db.String(255), nullable=False)
    estilo_de_vida = db.Column(db.String(50), nullable=False)
    sexo = db.Column(db.String(10), nullable=False)

    categorias = db.relationship('Categoria', secondary=categoria_table, lazy='subquery',
        backref=db.backref('influencers', lazy=True))
    edades_objetivo = db.relationship('EdadObjetivo', secondary=edad_objetivo_table, lazy='subquery',
        backref=db.backref('influencers', lazy=True))
    paises_objetivo = db.relationship('PaisObjetivo', secondary=pais_objetivo_table, lazy='subquery',
        backref=db.backref('influencers', lazy=True))

class Categoria(db.Model):
    nombre = db.Column(db.String(50), primary_key=True)

class EdadObjetivo(db.Model):
    rango = db.Column(db.String(50), primary_key=True)

class PaisObjetivo(db.Model):
    nombre = db.Column(db.String(50), primary_key=True)

lista_influencers_table = db.Table('lista_influencers_table',
    db.Column('lista_id', db.Integer, db.ForeignKey('lista.id'), primary_key=True),
    db.Column('influencer_id', db.Integer, db.ForeignKey('influencer.id'), primary_key=True)
)
class Lista(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    empresa_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    fecha_creacion = db.Column(db.DateTime, nullable=False, default=db.func.current_timestamp())
    
    empresa = db.relationship('User', backref=db.backref('listas', lazy=True))
    influencers = db.relationship('Influencer', secondary=lista_influencers_table, lazy='subquery',
                                   backref=db.backref('listas', lazy=True))

    def __init__(self, nombre, empresa_id):
        self.nombre = nombre
        self.empresa_id = empresa_id

class Propuesta(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    descripcion = db.Column(db.Text, nullable=False)
    fecha_creacion = db.Column(db.DateTime, nullable=False, default=db.func.current_timestamp())
    usuario_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    usuario = db.relationship('User', backref=db.backref('propuestas', lazy=True))
