import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState(false);
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      await actions.login(emailInput, passwordInput); 
      if (store.isAuthenticated) {
        navigate("/empresa/mis-listas"); 
      } else {
        setError(true); 
      }
    } catch (error) {
      setError(true); 
    }
  };

  useEffect(() => {
    if (store.isAuthenticated) {
      navigate("/empresa/mis-listas"); // Redirige si el usuario ya está autenticado
    }
  }, [store.isAuthenticated]);

  return (
    <div className="p-6">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[65vh] lg:py-0 p-8">
        <div className="mb-4">
          <h1 className="text-xl font-bold">Te damos la bienvenida</h1>
        </div>
        {error && (
          <div className="mb-4">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">Credenciales incorrectas. Inténtalo de nuevo.</span>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Correo Electrónico *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="form-input border-1 border-gray-600 py-2 px-5 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block focus:outline-none"
              placeholder="Correo Electrónico"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Contraseña *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="form-input border-1 border-gray-600 py-2 px-5 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block focus:outline-none"
              placeholder="******************"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-fuchsia-700 hover:bg-fuchsia-500 focus:ring-4 focus:outline-none text-white font-bold h-10 px-6"
          >
            Iniciar Sesión
          </button>
        </form>
        <hr />
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[33vh] lg:py-0 p-48 mb-4">
          <div className="mb-4">
            <h1 className="text-xl font-bold">Soy nuevo/a</h1>
          </div>
          <div className="container w-[18rem] mb-4">
            <Link to="/register">
              <button className="w-full border-1 bg-white border-dark text-black font-bold h-10 px-6">
                Registrarse
              </button>
            </Link>
          </div>
          <div className="flex">
            <div className="flex w-[129px]">
              <p className="text-start text-gray-500 text-xs px-0 w-40">Política de privacidad</p>
            </div>
            <div className="flex w-[100px]">
              <p className="text-start text-gray-500 text-xs px-0 w-32">Términos de Uso</p>
            </div>
            <div className="flex w-[4rem]">
              <p className="text-start text-gray-500 text-xs px-0 w-32">Aviso Legal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
