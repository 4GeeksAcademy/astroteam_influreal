import React, { useEffect, useState } from "react";
import "../../styles/empresa.css";
import { useOutletContext } from "react-router-dom";

export const MisDatos = () => {
  const { store, actions } = useOutletContext();
  const [cambiarContraseña, setCambiarContraseña] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [secondPasswordInput, setSecondPasswordInput] = useState("");
  const [error, setError] = useState("");
  const [successOperation, setSuccessOperation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessOperation("");
    if (passwordInput !== secondPasswordInput) {
      setError("Las contraseñas no coinciden");
      setPasswordInput("");
      setSecondPasswordInput("");

      return;
    }

    const response = await actions.changePassword(passwordInput);
    if (response.success) {
      setSuccessOperation("Contraseña cambiada con éxito");
      setPasswordInput("");
      setSecondPasswordInput("");
      setCambiarContraseña(false);
      return;
    }
    setError(response.message);
  };

  return (
    <>
      <div className="p-2">
        <div className="relative flex flex-row gap-5">
          <span className="font-semibold text-base">Email: </span>
          <span className="font-regular text-base">
            {store.current_user.email}
          </span>
        </div>
        <div className="relative flex flex-row gap-5 mt-2">
          <span className="font-semibold text-base">Contraseña: </span>
          <span className="font-regular text-base">xxxxxxx</span>
        </div>

        <div className="flex justify-center w-secreen relative mt-5">
          <button
            onClick={() => {
              setCambiarContraseña(!cambiarContraseña);
            }}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-button-background text-white py-2 px-4 rounded"
          >
            Cambiar Contraseña
          </button>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div
            className={`mb-6 mt-10 ${
              cambiarContraseña === true ? "" : "hidden"
            }`}
          >
            <div className="relative text-gray-500 text-sm font-bold mb-2 focus-within:text-gray-600 block border-solid border-t w-44 border-1 border-gray-600">
              <label className="relative left-1" htmlFor="password">
                Nueva Contraseña *
              </label>
            </div>
            <div>
              <div className="relative -mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8 relative pointer-events-none w-8 h-8 top-[37px] left-[12px]"
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

            <div className={`mb-6 mt-3`}>
              <div className="relative text-gray-500 text-sm font-bold mb-2 focus-within:text-gray-600 block border-solid border-t w-52 border-1 border-gray-600">
                <label className="relative left-1" htmlFor="password2">
                  Confirmar Nueva Contraseña *
                </label>
              </div>

              <div className="relative -mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8 relative pointer-events-none w-8 h-8 top-[37px] left-[12px]"
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
              <button
                type="submit"
                className="mt-5 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-button-background text-white py-2 px-4 rounded"
              >
                Confirmar cambio Contraseña
              </button>
            </div>
          </div>
        </form>
        {error && <div className="text-red-500 mt-3">{error}</div>}

        {successOperation && (
          <div className="text-green-500 mt-3">{successOperation}</div>
        )}
      </div>
    </>
  );
};
