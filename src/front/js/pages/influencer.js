import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";

const Influencer = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [influencer, setInfluencer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInfluencer = async () => {
      try {
        const result = await actions.loadSingleInfluencer(id);
        console.log(result.influencer)
        setInfluencer(result.influencer);
      } catch (error) {
        console.error("Error fetching influencer:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInfluencer();
  }, [actions, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!influencer) {
    return <div>No influencer found.</div>;
  }

  const seguidoresInstagramFormatted = influencer.seguidoresInstagram ? influencer.seguidoresInstagram.toLocaleString() : '';
  const seguidoresTiktokFormatted = influencer.seguidoresTiktok ? influencer.seguidoresTiktok.toLocaleString() : '';
  const edadObjetivoFormatted = influencer.edadesObjetivo && influencer.edadesObjetivo.length > 0
    ? influencer.edadesObjetivo.join(", ")
    : "No disponible";

  const paisesObjetivoFormatted = influencer.paisesObjetivo && influencer.paisesObjetivo.length > 0
    ? influencer.paisesObjetivo.join(", ")
    : "No disponible";
  return (
    <div className="container mx-auto">
      <div className="flex justify-end items-center py-4">
        <button>
          <FontAwesomeIcon
            icon={faSolidHeart}
            className="heart translate-x-6 translate-y-[-2rem]"
          />
        </button>
        <div>
          <img
            className="rounded-full w-32 h-32"
            src={influencer.imagen}
            alt={influencer.nombre}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-6 lg:h-[90vh] lg:py-0 p-8">
        <div className="bio mb-8">
          <h2 className="font-bold text-xl mb-2">Bio</h2>
          <p>{influencer.bio || "Información biográfica no disponible"}</p>
        </div>

        <hr className="my-4 w-full border-t-1 bg-gray-400" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-bold text-xl mb-2">Instagram</h2>
            <p>
              <FontAwesomeIcon icon={faInstagram} className="mr-2" />
              @IG
            </p>
            <p>
              ER%:{" "}
              <strong className="text-accent-two">
                {influencer.erInstagram}%
              </strong>
            </p>
            <p>
              <FontAwesomeIcon icon={faUser} />{" "}
              {seguidoresInstagramFormatted} Seguidores
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-2">TikTok</h2>
            <p>
              <FontAwesomeIcon icon={faTiktok} className="mr-2 text-accent-two" />
              @TikTok
            </p>
            <p>
              ER%:{" "}
              <strong className="text-accent-two">{influencer.erTiktok}%</strong>
            </p>
            <p>
              <FontAwesomeIcon icon={faUser} />{" "}
              {seguidoresTiktokFormatted} Seguidores
            </p>
          </div>
        </div>

        <hr className="my-4 w-full border-t-1 bg-gray-400" />

        <div className="mb-8">
          <h2 className="font-bold text-xl mb-2">Estilo de Vida</h2>
          <button className="bg-fuchsia-700 hover:bg-fuchsia-500 text-white font-bold py-2 px-4 rounded">
            {influencer.estiloDeVida}
          </button>
        </div>

        <hr className="my-4 w-full border-t-1 bg-gray-400" />

        <div className="mb-8">
          <h2 className="font-bold text-xl mb-2">Edad Objetivo</h2>
          <p>{edadObjetivoFormatted}</p>
        </div>

        <hr className="my-4 w-full border-t-1 bg-gray-400" />

        <div className="mb-8">
          <h2 className="font-bold text-xl mb-2">Países Objetivo</h2>
          <p>{paisesObjetivoFormatted}</p>
        </div>
      </div>
    </div>
  );
};

export default Influencer;
