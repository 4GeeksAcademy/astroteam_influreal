import React, { useContext, useState } from "react";
import { Search } from "../component/search.jsx";
import FloatingButton from "../component/floatingButton.jsx";
import InfluencerCard from "../component/influencerCard.jsx";
import { Context } from "../store/appContext.js";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

import "../../styles/tailwind.css";
import "../../styles/index.css";
import "../../styles/homeMaria.css";

const Home = () => {
  const { store, actions } = useContext(Context);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const [filters, setFilters] = useState({
    seguidores: 0,
    engagement: 0,
    redSocial: "",
    categoria: [],
    estiloDeVida: "",
    edadObjetivo: [],
    paisesObjetivo: [],
    sexo: "",
  });

  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const filteredInfluencers = store.filteredInfluencers.filter(
    (influencer) =>
      influencer.nombre.toLowerCase().includes(searchQuery) &&
      influencer.seguidoresInstagram >= filters.seguidores &&
      influencer.erInstagram >= filters.engagement &&
      (filters.redSocial === "" ||
        influencer.redSocial === filters.redSocial) &&
      (filters.categoria.length === 0 ||
        filters.categoria.includes(influencer.categoria)) &&
      (filters.edadObjetivo.length === 0 ||
        filters.edadObjetivo.includes(influencer.edadObjetivo)) &&
      (filters.paisesObjetivo.length === 0 ||
        filters.paisesObjetivo.includes(influencer.paisObjetivo)) &&
      (filters.sexo === "" || influencer.sexo === filters.sexo)
  );

  const handleFilterChange = (event) => {
    const { name, value, selectedOptions } = event.target;
    if (
      name === "categoria" ||
      name === "edadObjetivo" ||
      name === "paisesObjetivo"
    ) {
      const values = Array.from(selectedOptions, (option) => option.value);
      actions.setFilter(name, values);
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: values,
      }));
    } else {
      actions.setFilter(name, value);
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

  const toggleInfluencerFromList = async (id) => {
    if (store.singleList) {
      const isInList = store.singleList.influencers.some(
        (influencer_id) => influencer_id === id
      );

      try {
        if (isInList) {
          await actions.removeInfluencerFromLista(store.singleList.id, id);
        } else {
          await actions.addInfluencerToLista(store.singleList.id, id);
        }
      } catch (error) {
        console.error("Error al añadir o eliminar influencer:", error);
      }
    } else {
      console.error("No hay ninguna lista seleccionada.");
    }
  };

  const influencerIsLiked = (id) => {
    return store.singleList?.influencers.some(
      (influencer_id) => influencer_id === id
    );
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num;
  };

  if (!store.filteredInfluencers) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
          <p className="text-xl font-semibold text-gray-700">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Search onSearch={handleSearch} />
      <div className="containerTotal mx-auto p-2 pt-3 md:p-3 lg:p-6">
        <div className="container mx-auto mb-3 p-1 pt-2 md:p-2 lg:p-4">
          <div className="flex justify-between items-center mb-4">
            <a href="#" className="font-semibold text-sm">
              Filtros populares
            </a>
            <a
              href="#"
              className="text-accent-two text-sm"
              onClick={actions.clearFilters}
            >
              Borrar filtros
            </a>
          </div>

          <div className="overflow-x-auto">
            <div className="flex flex-nowrap">
              <div className="filter-item flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 flex flex-col p-2 mb-2">
                <label className="filter-label">Red</label>
                <select
                  className="filter-select"
                  name="redSocial"
                  onChange={handleFilterChange}
                >
                  <option value="">Todas</option>
                  <option value="Instagram">Instagram</option>
                  <option value="TikTok">TikTok</option>
                </select>
              </div>

              <div className="filter-item flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 flex flex-col p-2 mb-2">
                <label className="filter-label">Engagement</label>
                <div className="flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    className="filter-range"
                    name="engagement"
                    value={filters.engagement}
                    onChange={handleFilterChange}
                  />
                  <span className="ml-2 filter-range-value">
                    {formatNumber(filters.engagement)}
                  </span>
                </div>
              </div>

              <div className="filter-item flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 flex flex-col p-2 mb-2">
                <label className="filter-label">Nº de seguidores</label>
                <div className="flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="30000"
                    className="filter-range"
                    name="seguidores"
                    value={filters.seguidores}
                    onChange={handleFilterChange}
                  />
                  <span className="ml-2 filter-range-value">
                    {formatNumber(filters.seguidores)}
                  </span>
                </div>
              </div>

              <div className="filter-item flex-shrink-0 w-full md:w-1/2 lg:w-1/4 flex flex-col p-2 mb-2">
                <label className="filter-label">Sexo</label>
                <select
                  className="filter-select"
                  name="sexo"
                  onChange={handleFilterChange}
                >
                  <option value="">Todos</option>
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                </select>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3">
            <button
              className="show-more-button boton-filtros text-white w-full md:w-auto"
              onClick={() => setShowMoreFilters(!showMoreFilters)}
            >
              {showMoreFilters
                ? "Mostrar menos filtros"
                : "Mostrar más filtros"}
            </button>
          </div>

          {showMoreFilters && (
            <div className={`slide-up-menu ${showMoreFilters ? "open" : ""}`}>
              <div className="filter-item w-full">
                <label className="filter-label">Países</label>
                <select
                  className="filter-select w-full"
                  name="paisesObjetivo"
                  multiple
                  onChange={handleFilterChange}
                >
                  <option value="España">España</option>
                  <option value="México">México</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Chile">Chile</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Panamá">Panamá</option>
                  <option value="Perú">Perú</option>
                  <option value="República Dominicana">
                    República Dominicana
                  </option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div className="filter-item w-full">
                <label className="filter-label">Categoría</label>
                <select
                  className="filter-select w-full"
                  name="categoria"
                  multiple
                  onChange={handleFilterChange}
                  value={filters.categoria}
                >
                  <option value="lifestyle">Lifestyle</option>
                  <option value="marketing">Marketing</option>
                  <option value="negocios">Negocios</option>
                  <option value="emprendimiento">Emprendimiento</option>
                  <option value="viajes">Viajes</option>
                  <option value="comida">Comida</option>
                  <option value="fitness">Fitness</option>
                  <option value="belleza">Belleza</option>
                  <option value="salud">Salud</option>
                  <option value="moda">Moda</option>
                  <option value="automoviles">Automóviles</option>
                  <option value="tecnologia">Tecnología</option>
                  <option value="finanzas">Finanzas</option>
                  <option value="educacion">Educación</option>
                  <option value="maternidad">Maternidad</option>
                  <option value="medioAmbienteYSostenibilidad">
                    Medio ambiente y sostenibilidad
                  </option>
                  <option value="animales">Animales</option>
                  <option value="entretenimiento">Entretenimiento</option>
                  <option value="libros">Libros</option>
                  <option value="musica">Música</option>
                  <option value="politica">Política</option>
                  <option value="actualidad">Actualidad</option>
                  <option value="otros">Otros</option>
                </select>
              </div>

              <div className="filter-item w-full">
                <label className="filter-label">Edad Objetivo</label>
                <select
                  className="filter-select w-full"
                  name="edadObjetivo"
                  multiple
                  onChange={handleFilterChange}
                >
                  <option value="">Todas</option>
                  <option value="0-3">Hasta 3 años</option>
                  <option value="3-12">3 a 12 años</option>
                  <option value="12-18">12 a 18 años</option>
                  <option value="18-25">18 a 25 años</option>
                  <option value="25-35">25 a 35 años</option>
                  <option value="35-45">35 a 45 años</option>
                  <option value="45-55">45 a 55 años</option>
                  <option value="55+">Más de 55 años</option>
                </select>
              </div>

              <div className="filter-item w-full">
                <label className="filter-label">Estilo de Vida</label>
                <select
                  className="filter-select w-full"
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

              <div className="w-full mt-4 flex justify-center">
                <button
                  className="close-menu-button boton-filtros text-white"
                  onClick={() => setShowMoreFilters(false)}
                >
                  Cerrar menú
                </button>
              </div>
            </div>
          )}

          {showMoreFilters && (
            <div
              className="overlay"
              onClick={() => setShowMoreFilters(false)}
            />
          )}

          <div className="mb-4">
            <span className="block text-sm font-semibold">
              {store.singleList
                ? store.singleList.nombre
                : "Ninguna lista seleccionada"}
            </span>
            <span className="block text-sm">
              {filteredInfluencers.length} influencers mostrados
            </span>
            <button className="text-sm">mostrar todos</button>
            <button className="text-sm text-accent-two ml-2">
              mostrar solo seleccionados
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.isArray(filteredInfluencers) &&
              filteredInfluencers.map((influencer) => (
                <InfluencerCard
                  key={influencer.id}
                  imagen={influencer.imagen || ""}
                  usuario={influencer.nombre || ""}
                  erInstagram={influencer.erInstagram || 1}
                  seguidoresInstagram={influencer.seguidoresInstagram || 0}
                  erTiktok={influencer.erTiktok || 1}
                  seguidoresTiktok={influencer.seguidoresTiktok || 0}
                  isLiked={() => influencerIsLiked(influencer.id)}
                  onClick={() => actions.selectInfluencer(influencer.id)}
                  selectInfluencer={() => {
                    toggleInfluencerFromList(influencer.id);
                  }}
                  id={influencer.id}
                />
              ))}
          </div>
        </div>
      </div>
      <FloatingButton />
    </>
  );
};

export default Home;
