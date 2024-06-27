import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser, faClipboard, faComment, faGift } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";

const Influencer = () => {
  const { id } = useParams();
  const { actions } = useContext(Context);
  const [influencer, setInfluencer] = useState(null);

  useEffect(() => {
    const fetchInfluencer = async () => {
      const result = await actions.loadSingleInfluencer(id);
      setInfluencer(result);
    };
    fetchInfluencer();
  }, [id, actions]);

  if (!influencer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <div className="relative flex flex-row-reverse items-center justify-center py-4">
        <button>
          <FontAwesomeIcon
            icon={faSolidHeart}
            className="heart translate-x-6 translate-y-[-2rem]"
            type="checkbox"
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

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:h-[90vh] lg:py-0 p-8">
        <div className="bio">
          <h2 className="px-4 font-bold">Bio</h2>
          <p className="px-4">Información biográfica no disponible</p>
        </div>

        <div className="flex items-end justify-center">
          <div className="my-4 h-0.5 border-t-1 bg-gray-400  w-[22rem]"></div>
        </div>

        <div className="inline-flex">
          <div className="px-4 w-[12rem]">
            <span className="block text-sm font-semibold">
              <FontAwesomeIcon
                icon={faInstagram}
                className="ml-auto bg-gray text-3xl"
              />{" "}
              @IG
            </span>
            <span className="block text-sm">
              ER%: <strong className="text-accent-two">{influencer.erInstagram}%</strong>
            </span>
            <span className="block text-sm">
              <FontAwesomeIcon icon={faUser} /> {influencer.seguidoresInstagram.toLocaleString()} Seguidores
            </span>
          </div>

          <div className="px-4">
            <span className="block text-sm font-semibold">
              <FontAwesomeIcon
                icon={faTiktok}
                className="ml-auto text-accent-two text-3xl"
              />
              @TikTok
            </span>
            <span className="block text-sm">
              ER%: <strong className="text-accent-two">{influencer.erTiktok}%</strong>
            </span>
            <span className="block text-sm">
              <FontAwesomeIcon icon={faUser} /> {influencer.seguidoresTiktok.toLocaleString()} Seguidores
            </span>
          </div>
        </div>

        <div className="flex items-end justify-center">
          <div className="my-4 h-0.5 border-t-1 bg-gray-400  w-[22rem]"></div>
        </div>

        <div className="inline-flex">
          <div className="px-4 w-[12rem]">
            <button className="bg-fuchsia-700 hover:bg-fuchsia-500 text-white font-bold py-0 px-2 rounded">
              {influencer.estiloDeVida}
            </button>
          </div>
        </div>
        <div className="flex items-end justify-center">
          <div className="my-4 h-0.5 border-t-1 bg-gray-400  w-[22rem]"></div>
        </div>

        <div>
          <h2 className="px-4 font-bold">Edad Objetivo</h2>
          <p className="px-4">{influencer.edadObjetivo.join(", ")}</p>
        </div>

        <div className="flex items-end justify-center">
          <div className="my-4 h-0.5 border-t-1 bg-gray-400  w-[22rem]"></div>
        </div>

        <div>
          <h2 className="px-4 font-bold">Paises Objetivos</h2>
          <p className="px-4">{influencer.paisesObjetivo.join(", ")}</p>
        </div>

        <div className="flex items-end justify-center">
          <div className="my-4 h-0.5 border-t-1 bg-gray-400  w-[22rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Influencer;