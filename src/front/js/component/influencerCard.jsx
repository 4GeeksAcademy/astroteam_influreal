import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const InfluencerCard = ({
  isLiked,
  imagen,
  usuario,
  erInstagram,
  seguidoresInstagram,
  erTiktok,
  seguidoresTiktok,
  selectInfluencer,
}) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(isLiked());
  }, [isLiked]);

  const handleClick = () => {
    navigate(`/influencer/single-influencer`);
  };

  const toggleLike = () => {
    setLiked(!liked); 
    selectInfluencer();
  };

  const iconoCorazon = liked ? faSolidHeart : faRegularHeart;

  return (
    <div className="influencer-card">
      <div className="heart-container">
        <FontAwesomeIcon icon={iconoCorazon} className="heart" onClick={toggleLike} />
      </div>
      <div onClick={handleClick} className="flex items-center mt-2">
        <div className="foto-container">
          <img src={imagen} alt={usuario} className="foto" />
        </div>
        <div className="info-container">
          <div className="social-media">
            {erInstagram && (
              <>
                <FontAwesomeIcon icon={faInstagram} className="icono-redes" />
                <span className="block text-sm font-semibold">@{usuario}</span>
                <span className="block text-sm">
                  ER%:{" "}
                  <span className="texto-resaltado font-semibold">
                    {erInstagram}%
                  </span>{" "}
                  - {seguidoresInstagram} seguidores
                </span>
              </>
            )}
            {erTiktok && (
              <>
                <FontAwesomeIcon icon={faTiktok} className="icono-redes" />
                <span className="block text-sm font-semibold">@{usuario}</span>
                <span className="block text-sm">
                  ER%:{" "}
                  <span className="texto-resaltado font-semibold">
                    {erTiktok}%
                  </span>{" "}
                  - {seguidoresTiktok} seguidores
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerCard;
