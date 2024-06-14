import React from "react";

export const MisDatos = () => {
  return (
    <>
      <div className="p-2">
        <div className="relative flex flex-row gap-5">
          <span className=" font-semibold text-base">Email: </span>
          <span className="font-regular text-base">xxx@xxx.com</span>
        </div>
        <div className="relative flex flex-row gap-5 mt-2">
          <span className=" font-semibold text-base">Contraseña: </span>
          <span className="font-regular text-base">xxxxxxx</span>
        </div>
        <div className="flex justify-center w-secreen relative mt-5">
          <button className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-button-background text-white py-2 px-4 rounded">
            Cambiar Contraseña
          </button>
        </div>
      </div>
    </>
  );
};
