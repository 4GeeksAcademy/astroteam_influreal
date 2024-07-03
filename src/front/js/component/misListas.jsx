import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Lista } from "./empresa/lista.jsx";
import { Search } from "../component/search.jsx";

export const MisListas = () => {
  const navigate = useNavigate();
  const { actions } = useOutletContext();
  const [crearLista, setCrearLista] = useState(false);
  const [listaNombre, setListaNombre] = useState("");
  const [listas, setListas] = useState([]);
  const [filteredLists, setFilteredLists] = useState([]);

  const fetchListas = async () => {
    try {
      const fetchedListas = await actions.loadListas();
      setListas(fetchedListas || []);
      setFilteredLists(fetchedListas || []);
    } catch (error) {
      console.error("Error al cargar las listas:", error);
    }
  };

  const handleCrearLista = async () => {
    try {
      if (listaNombre.trim() !== "") {
        await actions.createLista(listaNombre);
        setListaNombre("");
        setCrearLista(false);
        fetchListas();
      }
    } catch (error) {
      console.error("Error al crear lista:", error);
    }
  };

  const handleDuplicarLista = async (lista) => {
    try {
      await actions.createLista(lista.nombre);
      fetchListas();
    } catch (error) {
      console.error("Error al duplicar lista:", error);
    }
  };

  const handleBorrarLista = async (listaId) => {
    try {
      await actions.deleteLista(listaId);
      fetchListas();
    } catch (error) {
      console.error("Error al borrar lista:", error);
    }
  };

  const handleSelectList = async (listaId) => {
    try {
      await actions.selectLista(listaId);
      navigate("/");
    } catch (error) {
      console.error("Error en el handleSelectLista", error);
    }
  };

  useEffect(() => {
    fetchListas();
  }, []);

  const handleSearch = (query) => {
    const filtered = listas.filter((lista) =>
      lista.nombre.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLists(filtered);
  };

  return (
    <div className="p-2">
      <Search onSearch={handleSearch} />
      <div className="flex justify-center mt-3">
        {crearLista ? (
          <div className="w-full flex flex-col gap-2 px-2">
            <input
              type="text"
              name="lista"
              id="lista"
              className="w-full border-1 py-2 px-1 text-black border-black font-base font-normal rounded-lg"
              placeholder="Nombre de la Lista"
              value={listaNombre}
              onChange={(e) => setListaNombre(e.target.value)}
            />
            <button
              className="w-fit self-end bg-button-background text-white py-2 px-4 rounded"
              onClick={handleCrearLista}
            >
              Crear
            </button>
          </div>
        ) : (
          <button
            onClick={() => setCrearLista(true)}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-button-background text-white py-2 px-4 rounded"
          >
            Crear Lista nueva
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mt-5">
        {filteredLists.length > 0 ? (
          filteredLists.map((lista) => (
            <Lista
              key={lista.id}
              id={lista.id}
              titulo={lista.nombre}
              onDuplicar={() => handleDuplicarLista(lista)}
              onBorrar={() => handleBorrarLista(lista.id)}
              onSelectList={() => handleSelectList(lista.id)}
            />
          ))
        ) : listas.length > 0 ? (
          <p>No hay listas que coincidan con tu búsqueda</p>
        ) : (
          <p>No hay listas disponibles</p>
        )}
      </div>
    </div>
  );
};

export default MisListas;
