import React from 'react';
import { Search } from '../component/search.jsx';
import { useState } from 'react';
import { MisDatos } from '../component/misDatos.jsx';
import { MisListas } from '../component/misListas.jsx';
import { MisPropuestas } from '../component/misPropuestas.jsx';
const Empresa = () => {
    const [vista, setVista] = useState('mis-datos');
    const handleViewChange = (viewToChange) => {
        setVista(viewToChange);
    }
    return (
        <>
            <Search />
            <div className='grid text-base grid-cols-4 grid-rows-1 text-center'>
                <button onClick={() => handleViewChange('mis-datos')} className={`hover:bg-slate-100 ${vista === 'mis-datos' ? 'bg-slate-200': ''} py-3 px-2 border border-slate-200`}>
                    Mis Datos
                </button>
                <button  onClick={() => handleViewChange('mis-listas')} className={`hover:bg-slate-100 ${vista === 'mis-listas' ? 'bg-slate-200': ''} py-3 px-2 border border-slate-200`} >
                    Mis Listas
                </button>
                <button onClick={() => handleViewChange('mis-propuestas')} className={`hover:bg-slate-100 ${vista === 'mis-propuestas' ? 'bg-slate-200': ''} py-3 px-2 border border-slate-200 col-span-2`}>
                    Mis Propuestas
                </button>
            </div>

            {vista === 'mis-datos' && <MisDatos />}
            {vista === 'mis-listas' && <MisListas />}
            {vista === 'mis-propuestas' && <MisPropuestas />}
            
        </>
    );
};

export default Empresa;
