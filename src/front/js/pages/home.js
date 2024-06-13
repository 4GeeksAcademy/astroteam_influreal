import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';

import '../../styles/tailwind.css';
import '../../styles/index.css';
import '../../styles/homeMaria.css';
import { Search } from '../component/search.jsx'


const Home = () => {
  return (
    <>
      <Search />
      <div className="container mx-auto p-2 pt-3 md:p-3 lg:p-6">

      <div className="container mx-auto p-1 pt-2 md:p-2 lg:p-4">

          <div className="contenedor-enlaces">
            <a href="#" className="filtro-popular font-semibold">Filtros populares</a>
            <a href="#" className="borrar-filtros text-accent-two ">Borrar filtros</a>

          </div>

          <div className="filters flex flex-wrap justify-center mb-2">
            <div className="filter inline-block mr-2 mb-2 border-2 border-solid border-gray-400 p-0,5">
              <span className="text-sm">Red</span>
              <select className="text-sm p-2 pl-10" defaultValue="2">
                <option value="2">2</option>
              </select>
            </div>
            <div className="filter inline-block mr-2 mb-2 border-2 border-solid border-gray-400 p-0,5">
              <span className="text-sm">Categoría</span>
              <select className="text-sm p-2 pl-10" defaultValue="1">
                <option value="1">1</option>
              </select>
            </div>
            <div className="filter inline-block mr-2 mb-2 border-2 border-solid border-gray-400 p-0,5">
              <span className="text-sm">Tipo</span>
              <select className="text-sm p-2 pl-10">
                <option value=""> </option>
              </select>
            </div>

            <div className="md:hidden filters-extra hidden">
              <div className="filter inline-block mr-2 mb-4 border-2 border-solid border-gray-400 p-0,5 w-64">
                <span className="text-sm">Engagement</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-full barra"
                />
              </div>
              <div className="filter inline-block mr-2 mb-4 border-2 border-solid border-gray-400 p-0,5 w-64">
                <span className="text-sm">Nº de seguidores</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-full barra"
                />
              </div>

            </div>

            <div className="hidden md:flex filters-rest">
              <div className="filter inline-block mr-2 mb-4 border-2 border-solid border-gray-400 p-0,5">
                <span className="text-sm">Paises</span>
                <select className="text-sm p-2 pl-10">
                  <option value=""> </option>
                </select>
              </div>
              <div className="filter inline-block mr-2 mb-4 border-2 border-solid border-gray-400 p-0,5">
                <span className="text-sm">Edad</span>
                <select className="text-sm p-2 pl-10">
                  <option value=""> </option>
                </select>
              </div>
              <div className="filter inline-block mr-2 mb-4 border-2 border-solid border-gray-400 p-0,5">
                <span className="text-sm">Sexo</span>
                <select className="text-sm p-2 pl-10">
                  <option value=""> </option>
                </select>
              </div>
            </div>

            <button className="toggle-filters btn btn-sm" onClick={() => {
              const filtersExtra = document.querySelector('.filters-extra');
              const filtersRest = document.querySelector('.filters-rest');
              const toggleButton = document.querySelector('.toggle-filters');
              filtersExtra.classList.toggle('hidden');
              filtersRest.classList.toggle('hidden');
              toggleButton.textContent = filtersExtra.classList.contains('hidden') ? 'Mostrar más' : 'Mostrar menos';
            }}>
              <i className="fas fa-chevron-down"></i>
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
      </div>
    </>
  );
};

export default Home;
