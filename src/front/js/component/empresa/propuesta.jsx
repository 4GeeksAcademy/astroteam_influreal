import React from "react";
import '../../../styles/empresa.css'
import { useState } from "react";
import { EnviarPropuesta } from "../enviarPropuesta.jsx";
export const Propuesta = ({titulo}) => {
    const [activePopup, setActivePopup] = useState(false)

    const handlePopup = () => {
        setActivePopup(true)
    }
    return (
        <>
        <div className=" w-3/4 relative flex flex-col align-start gap-1">
            <span className=" font-semibold text-base ">{titulo}</span>
            <div className=" flex flex-row justify-evenly accent-two gap-1 ">
                <button >editar</button>
                <span onClick={setActivePopup}>enviar</span>
                <span>duplicar</span>
                <span>borrar</span>
            </div>
        </div>
        {activePopup === true && <EnviarPropuesta />}
        </>
    )
}