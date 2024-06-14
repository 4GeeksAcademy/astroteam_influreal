import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-1">
        <div className="mb-4">
          <h1 className="text-xl font-bold">Te damos la bienvenida</h1>
        </div>
        <div className="mb-4">
          <div className="relative text-gray-500 text-sm font-bold mb-2 focus-within:text-gray-600 block border-solid border-t w-2/4 border-1 border-gray-600">
            <label className="relative left-1" for="email">
              Correo Electrónico *
            </label>
          </div>
          <div className="relative -mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="relative pointer-events-none w-8 h-8 absolute top-[38px] left-[12px]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Correo Electrónico"
              class="form-input border-1 border-gray-600 py-2 px-5 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="relative text-gray-500 text-sm font-bold mb-2 focus-within:text-gray-600 block border-solid border-t w-2/6 border-1 border-gray-600">
            <label className="relative left-1" for="password">
              Contraseña *
            </label>
          </div>

          <div className="relative -mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-8 relative pointer-events-none w-8 h-8 absolute top-[37px] left-[12px]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <input
              id="password"
              type="password"
              placeholder="******************"
              class="form-input border-1 border-gray-600 py-2 px-5 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <div className="container w-[23rem] mb-1 px-0">
            <button class="relative bg-fuchsia-700 hover:bg-fuchsia-500 text-white font-bold h-10 w-[19.5rem] px-6">
              Iniciar Sesion
            </button>
          </div>
          <div className="mb-6">
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              ¿Has olvidado tu contraseña?
            </a>
          </div>
        </div>
      </form>
      <form className="bg-white px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 ">
          <h1 className="text-xl font-bold">Soy nuevo/a</h1>
        </div>
        <div className="container w-[23rem] mb-4">
          <Link to="/register">
            <button class="bg-white hover:bg-gray-100 text-gray-800 h-10 w-[18rem] px-2 border-2 border-gray-950  font-bold">
              Registrarse
            </button>
          </Link>
        </div>
        <div className="flex">
          <div className="flex w-[129px]">
            <p class="text-start text-gray-500 text-xs px-0 w-40">
              Politica de privacidad
            </p>
          </div>
          <div className="flex w-[100px]">
            <p class="text-start text-gray-500 text-xs px-0 w-32">
              Terminos de Uso
            </p>
          </div>
          <div className="flex">
            <p class="text-start text-gray-500 text-xs px-0 w-32">
              Aviso Legal
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
