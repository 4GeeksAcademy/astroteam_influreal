import React, { useEffect, useState, useContext } from "react";
import { Search } from "../component/search.jsx";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/empresa.css";

const Empresa = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const success = await actions.checkAuthentication(token);
          if (!success) {
            navigate("/login");
          }
        } catch (error) {
          console.error("Error checking authentication:", error);
          navigate("/login");
        }
      } else {
        navigate("/login");
      }
    };

    checkAuthentication();
  }, []);

  const [vista, setVista] = useState("mis-listas");

  const handleViewChange = (viewToChange) => {
    setVista(viewToChange);
  };

  return (
    <>
      <Search />
      <div className="grid text-base grid-cols-4 grid-rows-1 text-center">
        <Link
          to="/empresa/mis-datos"
          className={`hover:bg-slate-100 ${
            vista === "mis-datos" ? "bg-slate-200" : ""
          } py-3 px-2 border border-slate-200`}
          onClick={() => handleViewChange("mis-datos")}
        >
          Mis Datos
        </Link>
        <Link
          to="/empresa/mis-listas"
          className={`hover:bg-slate-100 ${
            vista === "mis-listas" ? "bg-slate-200" : ""
          } py-3 px-2 border border-slate-200`}
          onClick={() => handleViewChange("mis-listas")}
        >
          Mis Listas
        </Link>
        <Link
          to="/empresa/mis-propuestas"
          className={`hover:bg-slate-100 ${
            vista === "mis-propuestas" ? "bg-slate-200" : ""
          } py-3 px-2 border border-slate-200 col-span-2`}
          onClick={() => handleViewChange("mis-propuestas")}
        >
          Mis Propuestas
        </Link>
      </div>
      <main>
        <Outlet context={{ store, actions }} />
      </main>
    </>
  );
};

export default Empresa;