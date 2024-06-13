import React from "react";
import "../../../styles/empresa.css";

export const Lista = ({ titulo }) => {
  return (
    <>
      <div className=" w-2/3 relative flex flex-col gap-1 align-start">
        <span className=" font-semibold text-base">{titulo}</span>
        <div className=" flex flex-row justify-evenly  gap-1 accent-two">
          <span>editar</span>
          <span>duplicar</span>
          <span>borrar</span>
        </div>
      </div>
    </>
  );
};
