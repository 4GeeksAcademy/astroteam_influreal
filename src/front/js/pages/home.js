import React, { useEffect } from "react";
import Flux from "../store/flux";
import { Search } from "../component/search.jsx";
import InfluencerCard from '../component/influencerCard.jsx';

import "../../styles/tailwind.css";
import "../../styles/index.css";
import "../../styles/homeMaria.css";


const Home = () => {
  const { state, actions } = Flux();

  useEffect(() => {
    actions.loadInfluencers();
  }, []);

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
              <input type="range" min="0" max="100" className="barra range-input" style={{ width: '100%' }} />
            </div>
            <div className="filter flex-shrink-0 inline-block border-3 border-solid border-gray-400 p-1 h-12 flex items-center">
              <span className="text-sm mr-2 font-semibold">Nº de seguidores</span>
              <input type="range" min="0" max="100" className="barra range-input" style={{ width: '100%' }} />
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

          {state.influencers.map((influencer) => (
        <InfluencerCard
          key={influencer.id}
          imagen={influencer.imagen} 
          usuario={influencer.nombre}
          erInstagram={influencer.erInstagram}
          seguidoresInstagram={influencer.seguidoresInstagram}
          erTiktok={influencer.erTiktok}
          seguidoresTiktok={influencer.seguidoresTiktok}
        />
      ))}


          <div className="fixed bottom-4 right-4 flex justify-end">
            <button className="boton-envio fab text-white rounded-full p-2 shadow-md">
              <svg
                className="h-7 w-7 text-white"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
              </svg>
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
