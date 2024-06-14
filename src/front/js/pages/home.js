import React from "react";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

import "../../styles/tailwind.css";
import "../../styles/index.css";
import "../../styles/homeMaria.css";
import { Search } from "../component/search.jsx";
import InfluencerCard from '../component/influencerCard.jsx';

const Home = () => {
  return (
    <>
      <Search />
      <div className="container mx-auto p-2 pt-3 md:p-3 lg:p-6">
        <div className="container mx-auto p-1 pt-2 md:p-2 lg:p-4">
          <div className="contenedor-enlaces">
            <a href="#" className="filtro-popular font-semibold">
              Filtros populares
            </a>
            <a href="#" className="borrar-filtros text-accent-two ">
              Borrar filtros
            </a>
          </div>

          <div className="filters flex overflow-x-auto whitespace-nowrap px-4 mb-4 space-x-2">
  <div className="filter flex-shrink-0 inline-block border-3 border-solid border-gray-400 p-1 h-12 flex items-center">
    <span className="text-sm font-semibold">Red</span>
    <select className="text-sm p-2 pl-10 ml-2" defaultValue="2">
      <option value="2">2</option>
    </select>
  </div>
  <div className="filter flex-shrink-0 inline-block border-3 border-solid border-gray-400 p-1 h-12 flex items-center">
    <span className="text-sm font-semibold">Categoría</span>
    <select className="text-sm p-2 pl-10 ml-2" defaultValue="1">
      <option value="1">1</option>
    </select>
  </div>
  <div className="filter flex-shrink-0 inline-block border-3 border-solid border-gray-400 p-1 h-12 flex items-center">
    <span className="text-sm font-semibold">Tipo</span>
    <select className="text-sm p-2 pl-10 ml-2">
      <option value=""> </option>
    </select>
  </div>
  <div className="filter flex-shrink-0 inline-block border-3 border-solid border-gray-400 p-1 h-12 flex items-center">
    <span className="text-sm mr-2 font-semibold">Engagement</span>
    <input type="range" min="0" max="100" className="barra" style={{ width: '100%' }} />
  </div>
  <div className="filter flex-shrink-0 inline-block border-3 border-solid border-gray-400 p-1 h-12 flex items-center">
    <span className="text-sm mr-2 font-semibold">Nº de seguidores</span>
    <input type="range" min="0" max="100" className="barra" style={{ width: '100%' }} />
  </div>
  <div className="filter flex-shrink-0 inline-block border-3 border-solid border-gray-400 p-1 h-12 flex items-center">
    <span className="text-sm font-semibold">Paises</span>
    <select className="text-sm p-2 pl-10 ml-2">
      <option value=""> </option>
    </select>
  </div>
  <div className="filter flex-shrink-0 inline-block border-3 border-solid border-gray-400 p-1 h-12 flex items-center">
    <span className="text-sm font-semibold">Edad</span>
    <select className="text-sm p-2 pl-10 ml-2">
      <option value=""> </option>
    </select>
  </div>
  <div className="filter flex-shrink-0 inline-block border-3 border-solid border-gray-400 p-1 h-12 flex items-center">
    <span className="text-sm font-semibold">Sexo</span>
    <select className="text-sm p-2 pl-10 ml-2">
      <option value=""> </option>
    </select>
  </div>
</div>


          <div className="mb-4">
            <span className="block text-sm font-semibold">
              Lista "04-06-2024"
            </span>
            <span className="block text-sm">20 influencers mostrados</span>
            <button className="text-sm">mostrar todos</button>
            <button className="text-sm text-accent-two ml-2">
              mostrar solo seleccionados
            </button>
          </div>

          <InfluencerCard
        iconoCorazon={faSolidHeart}
        imagenSrc="https://i.ibb.co/59hBNYF/Captura-de-pantalla-2024-06-10-141252.png"
        usuario="IG"
        erInstagram={4.5}
        seguidoresInstagram={10000}
        erTiktok={3}
        seguidoresTiktok={15000}
      />
      <InfluencerCard
        iconoCorazon={faRegularHeart}
        imagenSrc="https://i.ibb.co/59hBNYF/Captura-de-pantalla-2024-06-10-141252.png"
        usuario="TikTok"
        erInstagram={4.2}
        seguidoresInstagram={12000}
        erTiktok={2.5}
        seguidoresTiktok={18000}
      />
          
          <div className="fixed bottom-4 left-0 right-0 flex justify-center">
        <button className="boton-envio fab bg-blue-500 text-white rounded-full p-3 shadow-md">
          <i className="fas fa-plus"></i>
        </button>
      </div>


          <div className="text-center">
            <a
              href="https://online.forms.app/wediweb/influreal"
              className="text-sm text-accent-one"
            >
              https://online.forms.app/wediweb/influreal
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
