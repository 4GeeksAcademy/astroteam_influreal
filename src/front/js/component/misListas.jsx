import React from "react";
import { useState } from "react";
import { Lista } from "./empresa/lista.jsx";

export const MisListas = () => {
  const [crearLista, setCrearLista] = useState(false);

  const handleCrearLista = () => {
    setCrearLista(true);
  };
  return (
    <>
      <div className=" px-5 py-4 ">
        <div className="flex justify-center w-secreen relative mt-5">
          {crearLista === true ? (
            <>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="lista"
                  id="lista"
                  className="w-full border-1 py-2 px-1"
                  placeholder="Nombre de la Lista"
                />
                <button className=" w-fit self-end bg-button-background text-white py-2 px-4 rounded">
                  Crear
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={() => handleCrearLista()}
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-button-background text-white py-2 px-4 rounded"
            >
              Crear Lista nueva
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 gap-3 mt-5">
          <Lista titulo={"Navidad 2024"} />
          <Lista titulo={"Primavera 2025"} />
        </div>
      </div>
    </>
  );
};
