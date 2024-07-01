import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../store/appContext'

export const EnviarPropuesta = () => {
  const { store, actions } = useContext(Context)
  const [isOpen, setIsOpen] = useState(false);
  const [selectedList, setSelectedList] = useState('');
  const [selectedProposal, setSelectedProposal] = useState('');
  const [proposalName, setProposalName] = useState('');
  const [proposalText, setProposalText] = useState('');

  useEffect(() => {
    if(store.isAuthenticated){
      
    }
  },[actions])
  const handleSave = () => {
    // Logic to handle save action
    console.log('Proposal saved:', { selectedList, selectedProposal, proposalName, proposalText });
  };

  const handleSend = () => {
    // Logic to handle send action
    console.log('Proposal sent:', { selectedList, selectedProposal, proposalName, proposalText });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Abrir Popup
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white w-full h-full p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </button>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="list">
                  Selecciona una Lista
                </label>
                <select
                  id="list"
                  value={selectedList}
                  onChange={(e) => setSelectedList(e.target.value)}
                  className="block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Selecciona una Lista</option>
                  {/* Add your options here */}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="proposal">
                  Selecciona una Propuesta
                </label>
                <select
                  id="proposal"
                  value={selectedProposal}
                  onChange={(e) => setSelectedProposal(e.target.value)}
                  className="block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Selecciona una Propuesta</option>
                  {/* Add your options here */}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="proposalName">
                  Nombre de la Propuesta
                </label>
                <input
                  id="proposalName"
                  type="text"
                  value={proposalName}
                  onChange={(e) => setProposalName(e.target.value)}
                  className="block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="proposalText">
                  Escribir Propuesta
                </label>
                <textarea
                  id="proposalText"
                  value={proposalText}
                  onChange={(e) => setProposalText(e.target.value)}
                  className="block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows="4"
                ></textarea>
              </div>

              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={handleSave}
                  className="bg-gray-800 text-white py-2 px-4 rounded"
                >
                  Guardar
                </button>
              </div>

              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={handleSend}
                  className="bg-pink-500 hover:bg-pink-400 text-white py-2 px-4 rounded flex items-center"
                >
                  <span className="mr-2">📧</span> ENVIAR PROPUESTA
                </button>
              </div>

              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-orange-500 hover:bg-orange-400 text-white py-2 px-4 rounded"
                >
                  Volver al directorio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};