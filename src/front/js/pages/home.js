import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { Search } from '../component/search.jsx'
import '../../styles/tailwind.css';
import '../../styles/index.css';
import '../../styles/homeMaria.css';

const Home = () => {
  return (
    <><Search />
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">

        <div className="filters flex flex-wrap justify-center mb-4">
          <div className="filter w-full md:w-1/4 p-2">
            <span className="text-sm">Red</span>
            <select className="w-full p-2 pl-10 text-sm text-gray-700">
              <option value="2">2</option>
            </select>
          </div>
          <div className="filter w-full md:w-1/4 p-2">
            <span className="text-sm">Categoría</span>
            <select className="w-full p-2 pl-10 text-sm text-gray-700">
              <option value="1">1</option>
            </select>
          </div>
          <div className="filter w-full md:w-1/4 p-2">
            <span className="text-sm">Tipo</span>
            <select className="w-full p-2 pl-10 text-sm text-gray-700">
              <option value=""> </option>
            </select>
          </div>
          <div className="filter w-full md:w-1/4 p-2">
            <span className="text-sm">Engagement</span>
            <select className="w-full p-2 pl-10 text-sm text-gray-700">
              <option value="">Engagement</option>
            </select>
          </div>
          <div className="filter w-full md:w-1/4 p-2">
            <span className="text-sm">Nº de seguidores</span>
            <select className="w-full p-2 pl-10 text-sm text-gray-700">
              <option value="">Nº de seguidores</option>
            </select>
          </div>
          <div className="filter w-full md:w-1/4 p-2">
            <span className="text-sm">Paises</span>
            <select className="w-full p-2 pl-10 text-sm text-gray-700">
              <option value=""> </option>
            </select>
          </div>
          <div className="filter w-full md:w-1/4 p-2">
            <span className="text-sm">Edad</span>
            <select className="w-full p-2 pl-10 text-sm text-gray-700">
              <option value=""> </option>
            </select>
          </div>
          <div className="filter w-full md:w-1/4 p-2">
            <span className="text-sm">Sexo</span>
            <select className="w-full p-2 pl-10 text-sm text-gray-700">
              <option value=""> </option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <span className="block text-sm font-semibold">Lista "04-06-2024"</span>
          <span className="block text-sm">20 influencers mostrados</span>
          <button className="text-sm text-accent-one">mostrar todos</button>
          <button className="text-sm text-accent-two ml-2">mostrar solo seleccionados</button>
        </div>

        <div className="influencer-card border rounded p-4 mb-4">
          <div className="flex items-center mt-2">
            <img src="https://i.ibb.co/yX7CPrx/Captura-de-pantalla-2024-06-08-154516.png" alt="Influencer" className="w-20 h-20 rounded-full" />
            <div className="ml-4">
              <span className="block text-sm font-semibold">@IG</span>
              <span className="block text-sm">ER%: 4.5% - 10.000 seguidores</span>
              <FontAwesomeIcon icon={faInstagram} className="ml-auto text-accent-one" />
              <span className="block text-sm font-semibold">@TikTok</span>
              <span className="block text-sm">ER%: 3% - 15.000 seguidores</span>
              <FontAwesomeIcon icon={faTiktok} className="ml-auto text-accent-two" />

            </div>

            <FontAwesomeIcon icon={faSolidHeart} className="heart" />

          </div>
        </div>
        <div className="influencer-card border rounded p-4 mb-4">
          <div className="flex items-center mt-2">
            <img src="https://i.ibb.co/yX7CPrx/Captura-de-pantalla-2024-06-08-154516.png" alt="Influencer" className="w-20 h-20 rounded-full" />
            <div className="ml-4">
              <span className="block text-sm font-semibold">@TikTok</span>
              <span className="block text-sm">ER%: 3% - 15.000 seguidores</span>
              <FontAwesomeIcon icon={faInstagram} className="ml-auto text-accent-one" />
              <span className="block text-sm font-semibold">@TikTok</span>
              <span className="block text-sm">ER%: 3% - 15.000 seguidores</span>
              <FontAwesomeIcon icon={faTiktok} className="ml-auto text-accent-two" />
            </div>
            <FontAwesomeIcon icon={faRegularHeart} className="heart" />

          </div>
        </div>


        <div className="actions flex justify-center mb-4">
          <button className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-button-background text-white py-2 px-4 rounded">
            Enviar propuesta
          </button>
        </div>

        <div className="text-center">
          <a href="https://online.forms.app/wediweb/influreal" className="text-sm text-accent-one">
            https://online.forms.app/wediweb/influreal
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
