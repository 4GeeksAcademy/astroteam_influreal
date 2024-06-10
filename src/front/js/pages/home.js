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
    <a href="#" className="filtro-popular">Filtros populares</a>
    <a href="#" className="borrar-filtros">Borrar filtros</a>

  </div>

  <div class="filters flex flex-wrap justify-center mb-4">
    <div class="filter inline-block mr-4 border border-gray-400 rounded p-1">
      <span class="text-sm">Red</span>
      <select class="text-sm p-2 pl-10">
        <option value="2" selected>2</option>
      </select>
    </div>
    <div class="filter inline-block mr-4 border border-gray-400 rounded p-1">
      <span class="text-sm">Categoría</span>
      <select class="text-sm p-2 pl-10">
        <option value="1" selected>1</option>
      </select>
    </div>
    <div class="filter inline-block mr-4 border border-gray-400 rounded p-1">
      <span class="text-sm">Tipo</span>
      <select class="text-sm p-2 pl-10">
        <option value=""> </option>
      </select>
    </div>

    <div class="hidden md:flex filters-extra">
      <div class="filter inline-block mr-4 border border-gray-400 rounded p-1">
        <span class="text-sm">Engagement</span>
        <select class="text-sm p-2 pl-10">
          <option value="">Engagement</option>
        </select>
      </div>
      <div class="filter inline-block mr-4 border border-gray-400 rounded p-1">
        <span class="text-sm">Nº de seguidores</span>
        <select class="text-sm p-2 pl-10">
          <option value="">Nº de seguidores</option>
        </select>
      </div>
      <div class="filter inline-block mr-4 border border-gray-400 rounded p-1">
        <span class="text-sm">Paises</span>
        <select class="text-sm p-2 pl-10">
          <option value=""> </option>
        </select>
      </div>
      <div class="filter inline-block mr-4 border border-gray-400 rounded p-1">
        <span class="text-sm">Edad</span>
        <select class="text-sm p-2 pl-10">
          <option value=""> </option>
        </select>
      </div>
      <div class="filter inline-block mr-4 border border-gray-400 rounded p-1">
        <span class="text-sm">Sexo</span>
        <select class="text-sm p-2 pl-10">
          <option value=""> </option>
        </select>
      </div>
    </div>
    <button class="toggle-filters btn btn-sm" onClick={()=> {
      const filtersExtra = document.querySelector('.filters-extra');
      const toggleButton = document.querySelector('.toggle-filters');
      filtersExtra.classList.toggle('hidden');
      toggleButton.textContent = filtersExtra.classList.contains('hidden')? 'Mostrar más' : 'Mostrar menos';
      }}>
      <i class="fas fa-chevron-down"></i> Mostrar más
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
    <img src="https://i.ibb.co/59hBNYF/Captura-de-pantalla-2024-06-10-141252.png" alt="Influencer"
        className="rounded-full foto" />
      <div className="ml-4">
      <FontAwesomeIcon icon={faInstagram} className="ml-auto icono-redes" />
        <span className="block text-sm font-semibold">@IG</span>
        <span className="block text-sm">ER%: 4.5% - 10.000 seguidores</span>
        <FontAwesomeIcon icon={faTiktok} className="ml-auto icono-redes" />
        <span className="block text-sm font-semibold">@TikTok</span>
        <span className="block text-sm">ER%: 3% - 15.000 seguidores</span>
        
      </div>


    </div>
  </div>
  <div className="influencer-card">
  <div className="heart-container">
    <FontAwesomeIcon icon={faRegularHeart} className="heart" />
  </div>
    <div className="flex items-center mt-2">
    <img src="https://i.ibb.co/59hBNYF/Captura-de-pantalla-2024-06-10-141252.png" alt="Influencer" class="rounded-full foto" />


      <div className="ml-4">
      <FontAwesomeIcon icon={faInstagram} className="ml-auto icono-redes" />
        <span className="block text-sm font-semibold">@IG</span>
        <span className="block text-sm">ER%: 4.5% - 10.000 seguidores</span>
        <FontAwesomeIcon icon={faTiktok} className="ml-auto icono-redes" />
        <span className="block text-sm font-semibold">@TikTok</span>
        <span className="block text-sm">ER%: 3% - 15.000 seguidores</span>
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
