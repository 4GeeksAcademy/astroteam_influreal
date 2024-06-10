import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import '../../styles/tailwind.css'; 
import '../../styles/index.css'; 
import '../../styles/homeMaria.css'; 

const Home = () => {
  return (
<div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
  <div className="contenedor-enlaces">
    <a href="#" className="filtro-popular  font-semibold">Filtros populares</a>
    <a href="#" className="borrar-filtros text-accent-two ">Borrar filtros</a>

  </div>

  <div className="filters flex flex-wrap justify-center mb-4">
    <div className="filter inline-block mr-4 border border-gray-400 rounded p-1">
      <span className="text-sm">Red</span>
      <select className="text-sm p-2 pl-10"  defaultValue="2">
        <option value="2">2</option>
      </select>
    </div>
    <div className="filter inline-block mr-4 border border-gray-400 rounded p-1">
      <span className="text-sm">Categoría</span>
      <select className="text-sm p-2 pl-10" defaultValue="1">
        <option value="1">1</option>
      </select>
    </div>
    <div className="filter inline-block mr-4 border border-gray-400 rounded p-1">
      <span className="text-sm">Tipo</span>
      <select className="text-sm p-2 pl-10">
        <option value=""> </option>
      </select>
    </div>

    <div className="hidden md:flex filters-extra">
      <div className="filter inline-block mr-4 border border-gray-400 rounded p-1">
        <span className="text-sm">Engagement</span>
        <select className="text-sm p-2 pl-10">
          <option value="">Engagement</option>
        </select>
      </div>
      <div className="filter inline-block mr-4 border border-gray-400 rounded p-1">
        <span className="text-sm">Nº de seguidores</span>
        <select className="text-sm p-2 pl-10">
          <option value="">Nº de seguidores</option>
        </select>
      </div>
      <div className="filter inline-block mr-4 border border-gray-400 rounded p-1">
        <span className="text-sm">Paises</span>
        <select className="text-sm p-2 pl-10">
          <option value=""> </option>
        </select>
      </div>
      <div className="filter inline-block mr-4 border border-gray-400 rounded p-1">
        <span className="text-sm">Edad</span>
        <select className="text-sm p-2 pl-10">
          <option value=""> </option>
        </select>
      </div>
      <div className="filter inline-block mr-4 border border-gray-400 rounded p-1">
        <span className="text-sm">Sexo</span>
        <select className="text-sm p-2 pl-10">
          <option value=""> </option>
        </select>
      </div>
    </div>
    <button className="toggle-filters btn btn-sm" onClick={()=> {
      const filtersExtra = document.querySelector('.filters-extra');
      const toggleButton = document.querySelector('.toggle-filters');
      filtersExtra.classList.toggle('hidden');
      toggleButton.textContent = filtersExtra.classList.contains('hidden')? 'Mostrar más' : 'Mostrar menos';
      }}>
      <i className="fas fa-chevron-down"></i> Mostrar más
    </button>
  </div>

  <div className="mb-4">
    <span className="block text-sm font-semibold">Lista "04-06-2024"</span>
    <span className="block text-sm">20 influencers mostrados</span>
    <button className="text-sm">mostrar todos</button>
    <button className="text-sm text-accent-two ml-2">mostrar solo seleccionados</button>
  </div>

  <div className="influencer-card">
  <div className="heart-container">
    <FontAwesomeIcon icon={faSolidHeart} className="heart" />
  </div>
  <div className="flex items-center mt-2">
    <div className="foto-container">
      <img src="https://i.ibb.co/59hBNYF/Captura-de-pantalla-2024-06-10-141252.png" alt="Influencer" className="foto" />
    </div>
    <div className="info-container">
      <div className="social-media">
        <FontAwesomeIcon icon={faInstagram} className="icono-redes" />
        <span className="block text-sm font-semibold">@IG</span>
        <span className="block text-sm">ER%: <span className="texto-resaltado font-semibold">4.5%</span> - 10.000 seguidores</span>
        <FontAwesomeIcon icon={faTiktok} className="icono-redes" />
        <span className="block text-sm font-semibold">@TikTok</span>
        <span className="block text-sm">ER%: <span className="texto-resaltado font-semibold">3%</span>  - 15.000 seguidores</span>
      </div>
    </div>
  </div>
</div>


<div className="influencer-card">
<div className="heart-container">
    <FontAwesomeIcon icon={faRegularHeart} className="heart" />
  </div>
  <div className="flex items-center mt-2">
    <div className="foto-container">
      <img src="https://i.ibb.co/59hBNYF/Captura-de-pantalla-2024-06-10-141252.png" alt="Influencer" className="foto" />
    </div>
    <div className="info-container">
      <div className="social-media">
        <FontAwesomeIcon icon={faInstagram} className="icono-redes" />
        <span className="block text-sm font-semibold">@IG</span>
        <span className="block text-sm">ER%: <span className="texto-resaltado font-semibold">4.5%</span> - 10.000 seguidores</span>
        <FontAwesomeIcon icon={faTiktok} className="icono-redes" />
        <span className="block text-sm font-semibold">@TikTok</span>
        <span className="block text-sm">ER%: <span className="texto-resaltado font-semibold">3%</span>  - 15.000 seguidores</span>
      </div>
    </div>
  </div>
</div>


  <div className="actions flex justify-center mb-4">
  <button className="w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-button-background text-white py-2 px-4 rounded">
    Enviar propuesta
  </button>
</div>


  <div className="text-center">
    <a href="https://online.forms.app/wediweb/influreal" className="text-sm text-accent-one">
      https://online.forms.app/wediweb/influreal
    </a>
  </div>
</div>
  );
};

export default Home;
