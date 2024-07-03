import React, { useState, useContext } from 'react';
import { cld } from '../cloudinaryConfig.js';
import { Context } from '../store/appContext.js';

const Formulario = () => {
  const { store, actions } = useContext(Context);

  const [formData, setFormData] = useState({
    redSocial: 'Instagram',
    usuarioInstagram: '',
    urlInstagram: '',
    usuarioTiktok: '',
    urlTiktok: '',
    categoria: [],
    paisesObjetivo: [],
    edadObjetivo: [],
    nombre: '',
    email: '',
    phone: ''
  });

  const [respuestas, setRespuestas] = useState([]);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (checked) {
        setFormData({
          ...formData,
          [name]: [...formData[name], value]
        });
      } else {
        setFormData({
          ...formData,
          [name]: formData[name].filter(item => item !== value)
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.nombre &&
      formData.email &&
      formData.phone &&
      formData.categoria.length &&
      formData.paisesObjetivo.length &&
      formData.edadObjetivo.length &&
      image &&
      formData.usuarioInstagram &&
      formData.urlInstagram &&
      formData.usuarioTiktok &&
      formData.urlTiktok
    ) {
      try {
        const formDataUpload = new FormData();
        formDataUpload.append('file', image);
        formDataUpload.append('upload_preset', 'z056uej0');

        const response = await fetch('https://api.cloudinary.com/v1_1/dmawv4zkt/image/upload', {
          method: 'POST',
          body: formDataUpload
        });

        const data = await response.json();
        const imageUrl = data.secure_url;

        const formDataWithImage = {
          ...formData,
          imagen: imageUrl,
          erTiktok: 0,
          erInstagram: 0,
          seguidoresTiktok: 0,
          seguidoresInstagram: 0,
          estiloDeVida: 'foodie',
          sexo: 'hombre'
        };

        const responseInfluencer = await actions.addInfluencer(formDataWithImage);

        if (responseInfluencer.success) {
          alert('Formulario enviado correctamente.');
        } else {
          alert(responseInfluencer.message || 'Error al enviar formulario.');
        }

        setRespuestas([...respuestas, formDataWithImage]);

        setFormData({
          redSocial: 'Instagram',
          usuarioInstagram: '',
          urlInstagram: '',
          usuarioTiktok: '',
          urlTiktok: '',
          categoria: [],
          paisesObjetivo: [],
          edadObjetivo: [],
          nombre: '',
          email: '',
          phone: ''
        });
        setImage(null);
        setImagePreview(null);
      } catch (error) {
        console.error('Error al subir imagen a Cloudinary:', error);
        alert('Error al subir imagen a Cloudinary. Por favor, inténtalo de nuevo.');
      }
    } else {
      alert('Por favor, completa todos los campos requeridos y sube una imagen.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center mb-6">
        <label htmlFor="file-input" className="cursor-pointer">
          <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full rounded-full"
              />
            ) : (
              <span className="text-4xl text-gray-700">T</span>
            )}
          </div>
        </label>
        <input
          id="file-input"
          type="file"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <b>Red Social:</b>
          <select
            name="redSocial"
            value={formData.redSocial}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="Instagram">Instagram</option>
            <option value="Tiktok">Tiktok</option>
          </select>
        </label>

        <label className="block mb-4">
          <b>1. Usuario de Instagram:</b>
          <input
            type="text"
            name="usuarioInstagram"
            placeholder="@xxxx"
            value={formData.usuarioInstagram}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block mb-4">
          <b>2. URL Instagram:</b>
          <input
            type="url"
            name="urlInstagram"
            value={formData.urlInstagram}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block mb-4">
          <b>3. Usuario de Tiktok:</b>
          <input
            type="text"
            name="usuarioTiktok"
            placeholder="@xxxx"
            value={formData.usuarioTiktok}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block mb-4">
          <b>4. URL Tiktok:</b>
          <input
            type="url"
            name="urlTiktok"
            value={formData.urlTiktok}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        {/* Resto del formulario */}
        <div className="block mb-4">
          <b>5. Categorías:</b>
          <div className="grid grid-cols-2 -mx-2">
            {[
              'Lifestyle',
              'Marketing',
              'Negocios',
              'Emprendimiento',
              'Viajes',
              'Comida',
              'Fitness',
              'Belleza',
              'Salud',
              'Moda',
              'Automóviles',
              'Tecnología',
              'Finanzas',
              'Educación',
              'Maternidad',
              'Medio ambiente y sostenibilidad',
              'Animales',
              'Entretenimiento',
              'Libros',
              'Música',
              'Política',
              'Actualidad',
              'Otros'
            ].map(category => (
              <div
                key={category}
                className="bg-slate-100 rounded-md px-3 py-2 mb-2 mr-2"
              >
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="categoria"
                    value={category.toLowerCase()}
                    checked={formData.categoria.includes(
                      category.toLowerCase()
                    )}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="block mb-4">
          <b>6. Países de influencia:</b>
          <div className="grid grid-cols-2 -mx-2">
            {[
              'España',
              'México',
              'Argentina',
              'Bolivia',
              'Chile',
              'Colombia',
              'Costa Rica',
              'Cuba',
              'Ecuador',
              'El Salvador',
              'Guatemala',
              'Honduras',
              'Nicaragua',
              'Panamá',
              'Perú',
              'República Dominicana',
              'Uruguay',
              'Venezuela',
              'Otro'
            ].map(country => (
              <div
                key={country}
                className="bg-slate-100 rounded-md px-3 py-2 mb-2 mr-2"
              >
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="paisesObjetivo"
                    value={country.toLowerCase()}
                    checked={formData.paisesObjetivo.includes(
                      country.toLowerCase()
                    )}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {country}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="block mb-4">
          <b>7. Edad del público objetivo:</b>
          <div className="grid grid-cols-2">
            {[
              'Hasta 3 años',
              '3 a 12 años',
              '12 a 18 años',
              '18 a 25 años',
              '25 a 35 años',
              '35 a 45 años',
              '45 a 55 años',
              'Más de 55 años'
            ].map((age, index) => (
              <div
                key={index}
                className="bg-slate-100 rounded-md px-3 py-2 mb-2 mr-2"
              >
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="edadObjetivo"
                    value={age.toLowerCase()}
                    checked={formData.edadObjetivo.includes(
                      age.toLowerCase()
                    )}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {age}
                </label>
              </div>
            ))}
          </div>
        </div>

        <label className="block mb-4">
          <b>8. Nombre:</b>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block mb-4">
          <b>9. Correo electrónico:</b>
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block mb-4">
          <b>10. Número de teléfono:</b>
          <input
            type="tel"
            name="phone"
            placeholder="Tu número de teléfono"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <div className="text-center mt-6">
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
