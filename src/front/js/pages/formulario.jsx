import React, { useState } from 'react';
import "../../styles/formulario.css";

export const Formulario = () => {
  const [formData, setFormData] = useState({
    instagram_user: '',
    instagram_url: '',
    tiktok_user: '',
    tiktok_url: '',
    categories: [],
    countries: [],
    target_age: [],
    name: '',
    email: '',
    phone: ''
  });
  const [respuestas, setRespuestas] = useState([]);
  const [image, setImage] = useState(null);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.instagram_user && formData.instagram_url && formData.tiktok_user && formData.tiktok_url && formData.categories.length && formData.countries.length && formData.target_age.length && formData.name && formData.email && formData.phone) {
      setRespuestas([...respuestas, formData]);
      alert('Formulario enviado correctamente.');
      setFormData({
        instagram_user: '',
        instagram_url: '',
        tiktok_user: '',
        tiktok_url: '',
        categories: [],
        countries: [],
        target_age: [],
        name: '',
        email: '',
        phone: ''
      });
      setImage(null);
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  };
  return (
    <div className="forma">
      <div className="image-upload">
        <label htmlFor="file-input">
          <div className="image-preview">
            {image ? <img src={image} alt="Preview" style={{ width: '100%', height: '100%', borderRadius: '50%' }} /> : 'T'}
          </div>
        </label>
        <input id="file-input" type="file" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
      </div>
      <form onSubmit={handleSubmit}>
        <label className="pregunta">
        <b>1. Usuario de Instagram:</b>
          <input type="text" name="instagram_user" placeholder= "@xxxx" value={formData.instagram_user} onChange={handleChange} required />
        </label>
        <label className="pregunta">
        <b>2. URL Instagram:</b>
          <input type="url" name="instagram_url" value={formData.instagram_url} onChange={handleChange} required />
        </label>
        <label className="pregunta">
         <b> 3. Usuario de TikTok:</b>
          <input type="text" name="tiktok_user" placeholder= "@xxxx" value={formData.tiktok_user} onChange={handleChange} required />
        </label>
        <label className="pregunta">
          <b>4. URL TikTok:</b>
          <input type="url" name="tiktok_url" value={formData.tiktok_url} onChange={handleChange} required />
        </label>
        <div className="pregunta">
          <b>5. Categorías:</b>
          <div className="checkbox-group">
            {['Lifestyle', 'Marketing', 'Negocios', 'Emprendimiento', 'Viajes', 'Comida', 'Fitness', 'Belleza', 'Salud', 'Moda', 'Automóviles', 'Tecnología', 'Finanzas', 'Educación', 'Maternidad', 'Medio ambiente y sostenibilidad', 'Animales', 'Entretenimiento', 'Libros', 'Música', 'Política', 'Actualidad', 'Otros'].map(category => (
              <label key={category}>
                <input type="checkbox" name="categories" value={category.toLowerCase()} checked={formData.categories.includes(category.toLowerCase())} onChange={handleChange} />
                {category}
              </label>
            ))}
          </div>
        </div>
        <div className="pregunta">
          <b>6. Países de influencia:</b>
          <div className="checkbox-group">
            {['España', 'México', 'Argentina', 'Bolivia', 'Chile', 'Colombia', 'Costa Rica', 'Cuba', 'Ecuador', 'El Salvador', 'Guatemala', 'Honduras', 'Nicaragua', 'Panamá', 'Perú', 'República Dominicana', 'Uruguay', 'Venezuela', 'Otro'].map(country => (
              <label key={country}>
                <input type="checkbox" name="countries" value={country.toLowerCase()} checked={formData.countries.includes(country.toLowerCase())} onChange={handleChange} />
                {country}
              </label>
            ))}
          </div>
        </div>
        <div className="pregunta">
          <b>7. Edad del público objetivo:</b>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" name="target_age" value="hasta_3" checked={formData.target_age.includes("hasta_3")} onChange={handleChange} />
              Hasta 3 años
            </label>
            <label>
              <input type="checkbox" name="target_age" value="3_a_12" checked={formData.target_age.includes("3_a_12")} onChange={handleChange} />
              3 a 12 años
            </label>
            <label>
              <input type="checkbox" name="target_age" value="12_a_18" checked={formData.target_age.includes("12_a_18")} onChange={handleChange} />
              12 a 18 años
            </label>
            <label>
              <input type="checkbox" name="target_age" value="18_a_25" checked={formData.target_age.includes("18_a_25")} onChange={handleChange} />
              18 a 25 años
            </label>
            <label>
              <input type="checkbox" name="target_age" value="25_a_35" checked={formData.target_age.includes("25_a_35")} onChange={handleChange} />
              25 a 35 años
            </label>
            <label>
              <input type="checkbox" name="target_age" value="35_a_45" checked={formData.target_age.includes("35_a_45")} onChange={handleChange} />
              35 a 45 años
            </label>
            <label>
              <input type="checkbox" name="target_age" value="45_a_55" checked={formData.target_age.includes("45_a_55")} onChange={handleChange} />
              45 a 55 años
            </label>
            <label>
              <input type="checkbox" name="target_age" value="mas_de_55" checked={formData.target_age.includes("mas_de_55")} onChange={handleChange} />
              Más de 55 años
            </label>
          </div>
        </div>
        <label className="pregunta">
          <b>8. Nombre:</b>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label className="pregunta">
        <b>9. Correo electrónico:</b>
          <input type="email" placeholder= ":e-mail:" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label className="pregunta">
          <b>10. Teléfono:</b>
          <input type="tel" placeholder= ":telephone_receiver:" name="phone" value={formData.phone} onChange={handleChange} required  />
        </label>
        <button type="submit"><b>Enviar</b></button>
      </form>
    </div>
  );
}
export default Formulario;