import React from "react";
export const Search = () => {
    return (
        <>
        <div className="relative flex items-center">
        <input type="text" className="pl-3 pr-10 py-2 flex-grow border border-gray-300 focus:outline-none " placeholder="Busca Aquí"/>
        <button className="absolute right-0 top-0 mt-2 mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a7 7 0 1 0 4.9 11.9L21 21l-2 2-5.1-5.1A7 7 0 0 0 11 4z" />
            </svg>
        </button>
    </div>
        </>
        
    );
}