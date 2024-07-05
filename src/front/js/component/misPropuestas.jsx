import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Propuesta } from "./empresa/propuesta.jsx";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const MisPropuestas = () => {
  const { store, actions } = useOutletContext();
  const [crearPropuesta, setCrearPropuesta] = useState(false);
  const [propuestaTitulo, setPropuestaTitulo] = useState("");
  const [propuestaDescripcion, setPropuestaDescripcion] = useState("");
  const [propuestas, setPropuestas] = useState([]);

  const fetchPropuestas = async () => {
    try {
      const fetchedPropuestas = await actions.loadPropuestas();
      console.log("Propuestas cargadas inicialmente:", fetchedPropuestas);
      if (fetchedPropuestas) {
        setPropuestas(fetchedPropuestas);
      }
    } catch (error) {
      console.error("Error al cargar las propuestas:", error);
    }
  };

  const handleBorrarPropuesta = async (propuesta) => {
      await actions.deletePropuesta(propuesta.id);
      fetchPropuestas();
  }

  const handleCrearPropuesta = async () => {
    try {
      if (propuestaTitulo.trim() !== "" && propuestaDescripcion.trim() !== "") {
        await actions.createPropuesta(propuestaTitulo, propuestaDescripcion);
        setPropuestaTitulo("");
        setPropuestaDescripcion("");
        setCrearPropuesta(false);
        fetchPropuestas();
      }
    } catch (error) {
      console.error("Error al crear propuesta:", error);
    }
  };

  const handleDuplicarPropuesta = async (propuesta) => {
    try {
      // Implementa la lógica para duplicar una propuesta
      console.log("Duplicar propuesta:", propuesta);
    } catch (error) {
      console.error("Error al duplicar propuesta:", error);
    }
  };

  const handleEditarPropuesta = async (propuesta) => {
    try {
      
      
    } catch (error) {
      console.error("Error al editar propuesta:", error);
    }
  };

  const handleEnviarPropuesta = async (propuesta) => {
    try {
      // Implementa la lógica para enviar una propuesta
      console.log("Enviar propuesta:", propuesta);
    } catch (error) {
      console.error("Error al enviar propuesta:", error);
    }
  };

  useEffect(() => {
    fetchPropuestas();
  }, []);

  console.log("Estado actual de propuestas en MisPropuestas:", propuestas);
  return (
    <div className="p-2">
      <div className="flex justify-center w-screen relative">
        {crearPropuesta ? (
          <div className="w-full flex flex-col gap-2 px-2">
            <input
              type="text"
              name="propuesta"
              id="propuesta"
              className="w-full border-1 py-2 px-1 text-black border-black font-base font-normal rounded-lg"
              placeholder="Título de la Propuesta"
              value={propuestaTitulo}
              onChange={(e) => setPropuestaTitulo(e.target.value)}
            />
            <ReactQuill
              value={propuestaDescripcion}
              onChange={setPropuestaDescripcion}
              placeholder="Descripción de la Propuesta"
              className="w-full h-40 mb-20"
            />
            <button
              className="w-fit self-end bg-button-background text-white py-2 px-4 rounded"
              onClick={handleCrearPropuesta}
            >
              Crear
            </button>
          </div>
        ) : (
          <button
            onClick={() => setCrearPropuesta(true)}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-button-background text-white py-2 px-4 rounded"
          >
            Crear Propuesta nueva
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 gap-3 mt-5">
        {propuestas && propuestas.length > 0 ? (
          propuestas.map((propuesta) => (
            <Propuesta
              key={propuesta.id}
              titulo={propuesta.nombre}
              descripcion={propuesta.descripcion}
              onDuplicar={() => handleDuplicarPropuesta(propuesta)}
              onEditar={() => handleEditarPropuesta(propuesta)}
              onEnviar={() => handleEnviarPropuesta(propuesta)}
              onBorrar={() => handleBorrarPropuesta(propuesta)}
            />
          ))
        ) : (
          <p>No hay propuestas disponibles</p>
        )}
      </div>
    </div>
  );
};

export default MisPropuestas;
