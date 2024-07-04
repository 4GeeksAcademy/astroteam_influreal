import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const FloatingEnviarPropuesta = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const [selectedList, setSelectedList] = useState("");
  const [selectedProposal, setSelectedProposal] = useState("");
  const [propuestaTituloEnviar, setPropuestaTituloEnviar] = useState("");
  const [propuestaDescripcion, setPropuestaDescripcion] = useState("");
  const [error, setError] = useState(null);

  const asyncListLoad = async () => {
    try {
      await actions.loadListas();
      await actions.loadPropuestas();
    } catch (error) {
      console.error("Error loading data:", error);
      setError("Error al cargar datos. Por favor, intenta de nuevo más tarde.");
    }
  };

  useEffect(() => {
    if (!store.isAuthenticated) {
      setIsOpen(false);
    } else {
      asyncListLoad();
    }
  }, []);

  const handleSave = async () => {
    try {
      if (
        propuestaTituloEnviar.trim() !== "" &&
        propuestaDescripcion.trim() !== ""
      ) {
        await actions.createPropuesta(
          propuestaTituloEnviar,
          propuestaDescripcion
        );
        asyncListLoad();
        setPropuestaTituloEnviar("");
        setPropuestaDescripcion("");
        setIsOpen(false);
      } else {
        setError("Por favor, completa todos los campos.");
      }
    } catch (error) {
      console.error("Error saving proposal:", error);
      setError("Error al guardar la propuesta. Por favor, intenta de nuevo.");
    }
  };

  const handleSend = async () => {
    console.log("Proposal sent:", {
      selectedList,
      selectedProposal,
      propuestaTituloEnviar,
      propuestaDescripcion,
    });
    if (selectedList && selectedProposal) {
      await actions.sendPropuesta(selectedList, selectedProposal);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white w-full max-w-md h-auto max-h-screen p-6 overflow-y-auto rounded-lg mt-16 md:mt-12 shadow-lg">
            {" "}
            {/* added mt-16 for mobile and md:mt-12 for desktop */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </button>
            <div className="bg-white p-6 rounded-lg">
              {error && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                  role="alert"
                >
                  <strong className="font-bold">Error: </strong>
                  <span className="block sm:inline">{error}</span>
                  <button
                    className="absolute top-0 bottom-0 right-0 px-4 py-3"
                    onClick={() => setError(null)}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              )}

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="list"
                >
                  Selecciona una Lista
                </label>
                <select
                  id="list"
                  value={selectedList}
                  onChange={(e) => setSelectedList(e.target.value)}
                  className="block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Selecciona una Lista</option>
                  {Array.isArray(store.listas) &&
                    store.listas.map((lista, index) => (
                      <option value={lista.nombre} key={index}>
                        {lista.nombre}
                      </option>
                    ))}
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="proposal"
                >
                  Selecciona una Propuesta
                </label>
                <select
                  id="proposal"
                  value={selectedProposal}
                  onChange={(e) => setSelectedProposal(e.target.value)}
                  className="block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Selecciona una Propuesta</option>
                  {Array.isArray(store.propuestas) &&
                    store.propuestas.map((propuesta, index) => (
                      <option value={propuesta.nombre} key={index}>
                        {propuesta.nombre}
                      </option>
                    ))}
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="propuestaTituloEnviar"
                >
                  Nombre de la Propuesta
                </label>
                <input
                  id="propuestaTituloEnviar"
                  type="text"
                  value={propuestaTituloEnviar}
                  onChange={(e) => setPropuestaTituloEnviar(e.target.value)}
                  className="block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="propuestaDescripcion"
                >
                  Escribir Propuesta
                </label>
                <ReactQuill
                  value={propuestaDescripcion}
                  onChange={setPropuestaDescripcion}
                  placeholder="Descripción de la Propuesta"
                  className="w-full h-40 mb-20"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <button
                  onClick={handleSave}
                  className="bg-gray-800 text-white py-2 px-4 rounded"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  onClick={handleSend}
                  className="bg-pink-500 hover:bg-pink-400 text-white py-2 px-4 rounded flex items-center"
                >
                  <span className="mr-2">📧</span> ENVIAR PROPUESTA
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/influencer");
                  }}
                  className="bg-orange-500 hover:bg-orange-400 text-white py-2 px-4 rounded"
                >
                  Volver al directorio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingEnviarPropuesta;
