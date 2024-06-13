import React from "react";
import { useState } from "react";
import { Propuesta } from "./empresa/propuesta.jsx";
import "../../styles/empresa.css";
import { Link } from "react-router-dom";
export const MisPropuestas = () => {
  const [crearPropuesta, setCrearPropuesta] = useState(false);

  const handleCrearPropuesta = () => {
    setCrearPropuesta(true);
  };
  return (
    <>
      <div className="px-5 py-4">
        <div className="flex justify-center w-secreen relative mt-5">
          {crearPropuesta === true ? (
            <>
              <div className="flex flex-col gap-2">
                <Link
                  to="/"
                  className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-accent text-white py-2 px-4 rounded"
                >
                  Volver al directorio
                </Link>
                <input
                  type="text"
                  name="propuestaNombre"
                  id="propuesta_nombre"
                  className="w-full border-1 py-2 px-1"
                  placeholder="Nombre de la Propuesta"
                />
                <textarea
                  name="propuesta"
                  id=""
                  cols={33}
                  rows={10}
                  className=" border-1 py-2 px-1"
                  placeholder="Descripción de la propuesta"
                ></textarea>
                <button className=" w-fit self-end bg-button-background text-white py-2 px-4 rounded">
                  Crear
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleCrearPropuesta()}
                className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-button-background text-white py-2 px-4 rounded"
              >
                Crear Propuesta nueva
              </button>
              <Link
                to="/"
                className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-accent text-white py-2 px-4 rounded"
              >
                Volver al directorio
              </Link>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 gap-3 mt-5">
          <Propuesta titulo={"Navidad 2024"} />
          <Propuesta titulo={"Primavera 2025"} />
        </div>
      </div>
    </>
  );
};
