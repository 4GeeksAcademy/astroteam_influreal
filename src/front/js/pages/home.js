import React, { useEffect, useState } from "react";
import Flux from "../store/flux";
import { Search } from "../component/search.jsx";
import InfluencerCard from "../component/influencerCard.jsx";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

import "../../styles/tailwind.css";
import "../../styles/index.css";
import "../../styles/homeMaria.css";

const Home = () => {
  const { state, actions } = Flux();

  const [filters, setFilters] = useState({
    seguidores: 0,
    engagement: 0,
  });

  useEffect(() => {
    actions.loadInfluencers();
  }, []);

  const handleFilterChange = (event) => {
    const { name, value, selectedOptions } = event.target;
    if (name === "categoria" || name === "edadObjetivo" || name === "paisesObjetivo") {
      const values = Array.from(selectedOptions, (option) => option.value);
      actions.setFilter(name, values);
    } else {
      actions.setFilter(name, value);
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num;
  };


  return (
    <>
      <Search />
      <div className="container mx-auto p-2 pt-3 md:p-3 lg:p-6">
        <div className="container mx-auto mb-3 p-1 pt-2 md:p-2 lg:p-4">
          <div className="contenedor-enlaces">
            <a href="#" className="filtro-popular font-semibold">
              Filtros populares
            </a>
            <a
              href="#"
              className="borrar-filtros text-accent-two"
              onClick={actions.clearFilters}
            >
              Borrar filtros
            </a>
          </div>

          <div className="filters flex overflow-x-auto whitespace-nowrap px-4 mb-4 space-x-2">
            <div className="filter flex-shrink-0 inline-block border-3 border-solid border-gray-400 p-1 h-12 flex items-center">
              <span className="text-sm font-semibold">Red</span>
              <select
                className="text-sm p-2 pl-10 ml-2"
                name="redSocial"
                onChange={handleFilterChange}
              >
                <option value="">Todas</option>
                <option value="Instagram">Instagram</option>
                <option value="TikTok">TikTok</option>
              </select>
            </div>

            <div className="filter flex-shrink-0 inline-block border-3 border-solid border-gray-400 p-1 h-12 flex items-center">
              <span className="text-sm font-semibold">Categoría</span>
              <select
                className="text-sm p-2 pl-2 pr-10 ml-2 max-w-[200px]"
                name="categoria"
                multiple
                onChange={handleFilterChange}
              >
                <option value="comida">Comida</option>
                <option value="viajes">Viajes</option>
                <option value="videojuegos">Videojuegos</option>
                <option value="vidaSana">Vida sana</option>
                <option value="deportes">Deportes</option>
              </select>
            </div>

            <div className="filter flex-shrink-0 inline-block border-3 border-solid border-gray-400 p-1 h-12 flex items-center">
              <span className="text-sm font-semibold">Estilo de Vida</span>
              <select
                className="text-sm p-2 pl-10 ml-2"
                name="estiloDeVida"
                onChange={handleFilterChange}
              >
                <option value="">Todos</option>
                <option value="fitness">Fitness</option>
                <option value="foodie">Foodie</option>
                <option value="vegano">Vegano</option>
                <option value="gamer">Gamer</option>
              </select>
            </div>

            <div className="filter flex-shrink-0 inline-block border-3 border-solid border-gray-400 p-1 h-12 flex items-center">
              <span className="text-sm mr-2 font-semibold">Engagement</span>
              <input
                type="range"
                min="0"
                max="10"
                className="barra range-input"
                name="engagement"
                value={filters.engagement}
                onChange={handleFilterChange}
                style={{ width: "100%" }}
              />
              <span className="ml-2">{formatNumber(filters.engagement)}</span>
            </div>

            <div className="filter flex-shrink-0 inline-block border-3 border-solid border-gray-400 p-1 h-12 flex items-center">
              <span className="text-sm mr-2 font-semibold">Nº de seguidores</span>
              <input
                type="range"
                min="0"
                max="30000"
                className="barra range-input"
                name="seguidores"
                value={filters.seguidores}
                onChange={handleFilterChange}
                style={{ width: "100%" }}
              />
              <span className="ml-2">{formatNumber(filters.seguidores)}</span>
            </div>

            <div className="filter flex-shrink-0 inline-block border-3 border-solid border-gray-400 p-1 h-12 flex items-center">
              <span className="text-sm font-semibold">Países</span>
              <select
                className="text-sm p-2 pl-2 pr-10 ml-2 max-w-[200px]"
                name="paisesObjetivo"
                multiple
                onChange={handleFilterChange}
              >
                <option value="España">España</option>
                <option value="Colombia">Colombia</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Argentina">Argentina</option>
                <option value="Perú">Perú</option>
                <option value="Uruguay">Uruguay</option>
                <option value="México">México</option>
              </select>
            </div>

            <div className="filter flex-shrink-0 inline-block border-3 border-solid border-gray-400 p-1 h-12 flex items-center">
              <span className="text-sm font-semibold">Edad Objetivo</span>
              <select
                className="text-sm p-2 pl-2 pr-10 ml-2 max-w-[200px]"
                name="edadObjetivo"
                multiple
                onChange={handleFilterChange}
              >
                <option value="">Todas</option>
                <option value="-18">-18</option>
                <option value="18-25">18-25</option>
                <option value="25-30">25-30</option>
                <option value="30-35">30-35</option>
                <option value="35-45">35-45</option>
                <option value="+45">+45</option>
              </select>
            </div>

            <div className="filter flex-shrink-0 inline-block border-3 border-solid border-gray-400 p-1 h-12 flex items-center">
              <span className="text-sm font-semibold">Sexo</span>
              <select
                className="text-sm p-2 pl-10 ml-2"
                name="sexo"
                onChange={handleFilterChange}
              >
                <option value="">Todos</option>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <span className="block text-sm font-semibold">
              Lista "04-06-2024"
            </span>
            <span className="block text-sm">{state.filteredInfluencers.length} influencers mostrados</span>
            <button className="text-sm">mostrar todos</button>
            <button className="text-sm text-accent-two ml-2">
              mostrar solo seleccionados
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.isArray(state.filteredInfluencers) && state.filteredInfluencers.map((influencer) => (
              <InfluencerCard
                key={influencer.id}
                imagen={influencer.imagen}
                usuario={influencer.nombre}
                erInstagram={influencer.erInstagram}
                seguidoresInstagram={influencer.seguidoresInstagram}
                erTiktok={influencer.erTiktok}
                seguidoresTiktok={influencer.seguidoresTiktok}
                iconoCorazon={influencer.liked ? faSolidHeart : faRegularHeart}
              />
            ))}
          </div>

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
