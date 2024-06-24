import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/floatingButton.css";

const FloatingButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/empresa/mis-propuestas");
  };

  return (
    <div className="sticky bottom-0 left-0 right-0 flex justify-center p-4">
      <button
        className="text-white px-6 py-2 nueva-propuesta"
        onClick={handleClick}
      >
        Nueva Propuesta
      </button>
    </div>
  );
};

export default FloatingButton;
