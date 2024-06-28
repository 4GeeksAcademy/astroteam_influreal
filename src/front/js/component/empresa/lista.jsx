import React from "react";
import "../../../styles/empresa.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faClone, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export const Lista = ({ id, titulo, onDuplicar, onBorrar, onSelectList }) => {
  return (
    <div className="flex flex-row justify-between items-center p-4 border rounded-lg shadow-md bg-white">
      <span className="font-semibold text-base">{titulo}</span>
      <div className="flex flex-row gap-4">
        <button onClick={onSelectList} className="text-green-500">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={onDuplicar} className="text-green-500">
          <FontAwesomeIcon icon={faClone} />
        </button>
        <button onClick={onBorrar} className="text-red-500">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};
