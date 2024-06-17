import React, { useState } from "react";
import { Search } from "../component/search.jsx";
import { MisDatos } from "../component/misDatos.jsx";
import { MisListas } from "../component/misListas.jsx";
import { MisPropuestas } from "../component/misPropuestas.jsx";
import { Outlet, Link } from "react-router-dom";

import "../../styles/empresa.css";
const Empresa = () => {
  const [vista, setVista] = useState("mis-datos");
  const handleViewChange = (viewToChange) => {
    setVista(viewToChange);
  };
  return (
    <>
      <Search />
      <div className="grid text-base grid-cols-4 grid-rows-1 text-center">
        <Link
          to={'/empresa/mis-datos'}
          className={`hover:bg-slate-100 ${
            vista === "mis-datos" ? "bg-slate-200" : ""
          } py-3 px-2 border border-slate-200`}
        >
          Mis Datos
        </Link>
        <Link 
          to={'/empresa/mis-listas'}
          className={`hover:bg-slate-100 ${
            vista === "mis-listas" ? "bg-slate-200" : ""
          } py-3 px-2 border border-slate-200`}
        >
          Mis Listas
        </Link>
        <Link
          to={'/empresa/mis-propuestas'}
          className={`hover:bg-slate-100 ${
            vista === "mis-propuestas" ? "bg-slate-200" : ""
          } py-3 px-2 border border-slate-200 col-span-2`}
        >
          Mis Propuestas
        </Link>
      </div>
      <main>
        <Outlet />
      </main>
      
    </>
  );
};

export default Empresa;
