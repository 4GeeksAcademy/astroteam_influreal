import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [secondPasswordInput, setSecondPasswordInput] = useState("");
  const [error, setError] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (passwordInput !== secondPasswordInput) {
      setError("Las contraseñas no coinciden");
      return;
    }

    const success = await actions.register(emailInput, passwordInput);
    if (success) {
      navigate("/empresa/mis-listas");
      return;
    }
    setError("Algo ha salido mal");
  };

  return (
    <div className="p-6 touch-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[65vh] lg:py-0 p-8 touch-auto"
      >
        <div className="mb-4">
          <h1 className="text-xl font-bold">Crea tu cuenta!</h1>
        </div>
        <div className="mb-4">
          <div className="relative text-gray-500 text-sm font-bold mb-2 focus-within:text-gray-600 block border-solid border-t w-2/4 border-1 border-gray-600">
            <label className="relative left-1" htmlFor="email">
              Correo Electrónico *
            </label>
          </div>
          <div className="relative -mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="relative pointer-events-none w-8 h-8 absolute top-[38px] left-[12px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <input
              type="email"
              name="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              id="email"
              placeholder="Correo Electrónico"
              className="form-input border-1 border-gray-600 py-2 px-5 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="relative text-gray-500 text-sm font-bold mb-2 focus-within:text-gray-600 block border-solid border-t w-2/6 border-1 border-gray-600">
            <label className="relative left-1" htmlFor="password">
              Contraseña *
            </label>
          </div>

          <div className="relative -mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8 relative pointer-events-none w-8 h-8 absolute top-[37px] left-[12px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <input
              id="password"
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="******************"
              className="form-input border-1 border-gray-600 py-2 px-5 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="relative text-gray-500 text-sm font-bold mb-2 focus-within:text-gray-600 block border-solid border-t w-44 border-1 border-gray-600">
            <label className="relative left-1" htmlFor="password2">
              Confirmar Contraseña *
            </label>
          </div>

          <div className="relative -mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8 relative pointer-events-none w-8 h-8 absolute top-[37px] left-[12px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <input
              id="password2"
              type="password"
              value={secondPasswordInput}
              onChange={(e) => setSecondPasswordInput(e.target.value)}
              placeholder="******************"
              className="form-input border-1 border-gray-600 py-2 px-5 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none"
            />
          </div>
        </div>

        {error && (
          <div
            className=" mb-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
            role="alert"
          >
            <p className="font-bold">Error</p>
            <p>{error}</p>
          </div>
        )}

        <div>
          <div className="container w-[18rem] mb-4">
            <button
              type="submit"
              className="w-full bg-fuchsia-700 hover:bg-fuchsia-500 focus:ring-4 focus:outline-none text-white font-bold h-10 px-6"
            >
              Registrarse
            </button>
          </div>
        </div>
      </form>

      <hr></hr>

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[33vh] lg:py-0 p-48 mb-4">
        <div className="mb-4 ">
          <h1 className="text-xl font-bold">¿Ya tienes cuenta?</h1>
        </div>

        <Link to="/login">
          <div className="container w-[18rem] mb-1 px-0">
            <button className="w-full border-1 bg-white border-dark text-black font-bold h-10 px-6">
              Inicia Sesion
            </button>
          </div>
        </Link>

        <div className="flex mt-4">
          <div className="flex w-[129px]">
            <p className="text-start text-gray-500 text-xs px-0 w-40">
              Politica de privacidad
            </p>
          </div>
          <div className="flex w-[100px]">
            <p className="text-start text-gray-500 text-xs px-0 w-32">
              Terminos de Uso
            </p>
          </div>
          <div className="flex w-[4rem]">
            <p className="text-start text-gray-500 text-xs px-0 w-32">
              Aviso Legal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
