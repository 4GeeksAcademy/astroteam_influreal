import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import InfluencerCard from '../component/influencerCard.jsx';

const ListaComponent = ({ lista }) => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4">
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{lista.nombre}</h2>
                <p><strong>ID:</strong> {lista.id}</p>
                <p><strong>Fecha de creación:</strong> {new Date(lista.fecha_creacion).toLocaleString()}</p>
                <p><strong>Usuario:</strong> {lista.usuario_email}</p>

            </div>
        </div>
    );
};

const PropuestaComponent = ({ propuesta }) => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4">
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{propuesta.nombre}</h2>
                <p><strong>ID:</strong> {propuesta.id}</p>
                <p><strong>Fecha de creación:</strong> {new Date(propuesta.fecha_creacion).toLocaleString()}</p>
                <div dangerouslySetInnerHTML={{ __html: propuesta.descripcion }} />
            </div>
        </div>
    );
};

const PropuestaRecibida = () => {

    const { store, actions } = useContext(Context);
    const { lista_id, propuesta_id } = useParams();
    const [lista, setLista] = useState(null);
    const [propuesta, setPropuesta] = useState(null);
    const [influencers, setInfluencers] = useState(store.influencers);
    useEffect(() => {
        const getProposal = async () => {
            const listaResponse = await actions.getLista(lista_id);
            const propuestaResponse = await actions.getPropuesta(propuesta_id);

            if (listaResponse.success) {
                setLista(listaResponse.lista);

                setInfluencers(store.influencers.filter((influencer) => listaResponse.lista.influencers.includes(influencer.id)));
            }

            if (propuestaResponse.success) {
                setPropuesta(propuestaResponse.propuesta);
            }
        };

        getProposal();
    }, []);



    if (!lista || !propuesta) {
        return (
            <>
                loading
            </>
        )


    }
    return (<>

        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Datos de Lista</h1>
            <ListaComponent lista={lista} />

            {influencers.map((influencer) => (
                <InfluencerCard
                    key={influencer.id}
                    imagen={influencer.imagen || ""}
                    usuario={influencer.nombre || ""}
                    erInstagram={influencer.erInstagram || 1}
                    seguidoresInstagram={influencer.seguidoresInstagram || 1}
                    erTiktok={influencer.erTiktok || 1}
                    seguidoresTiktok={influencer.seguidoresTiktok || 1}
                    isLiked={() => false}
                    onClick={() => false}
                    selectInfluencer={() => {
                        false
                    }}
                    id={influencer.id}
                />
            ))}
            <h1 className="text-2xl font-bold mb-4">Datos de Propuesta</h1>
            <PropuestaComponent propuesta={propuesta} />
        </div>
    </>);
}


export default PropuestaRecibida;