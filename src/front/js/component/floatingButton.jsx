import React, { useState } from "react";
import "../../styles/floatingButton.css";
import FloatingEnviarPropuesta from "./FloatingEnviarPropuesta.jsx";

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="sticky bottom-0 left-0 right-0 flex justify-center p-4">
      <button
        className="text-white px-6 py-2 nueva-propuesta"
        onClick={handleClick}
      >
        Nueva Propuesta
      </button>
      <FloatingEnviarPropuesta isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default FloatingButton;
