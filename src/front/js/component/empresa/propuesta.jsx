import React from "react";
import "../../../styles/empresa.css";
import { useState } from "react";
import { EnviarPropuesta } from "../enviarPropuesta.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faClone,
  faTrashAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export const Propuesta = ({
  id,
  titulo,
  descripcion,
  onDuplicar,
  onBorrar,
  onEditar,
}) => {
  const [activePopup, setActivePopup] = useState(false);

  const handlePopup = () => {
    setActivePopup(true);
  };

  return (
    <div className="flex flex-row justify-between items-center p-4 border rounded-lg shadow-md bg-white">
      <div className="flex flex-col">
        <span className="font-semibold text-base">{titulo}</span>
      </div>
      <div className="flex flex-row gap-4">
        <button onClick={onEditar} className="text-blue-500">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={handlePopup} className="text-blue-500">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
        <button onClick={onDuplicar} className="text-green-500">
          <FontAwesomeIcon icon={faClone} />
        </button>
        <button onClick={onBorrar} className="text-red-500">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
      {activePopup && <EnviarPropuesta />}
    </div>
  );
};
