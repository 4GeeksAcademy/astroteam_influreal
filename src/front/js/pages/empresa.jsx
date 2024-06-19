import React, { useEffect, useState } from "react";
import { Search } from "../component/search.jsx";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Flux from "../store/flux";
import "../../styles/empresa.css";

const Empresa = () => {
  const { state, actions } = Flux();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const success = await actions.checkAuthentication(token);
          if (!success) {
            navigate('/login');
          }
        } catch (error) {
          console.error('Error checking authentication:', error);
          navigate('/login');
        }
      } else {
        navigate('/login');
      }
    
    };

    checkAuthentication();
  }, []);

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
