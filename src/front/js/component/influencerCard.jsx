import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const InfluencerCard = ({ iconoCorazon, imagenSrc, usuario, erInstagram, seguidoresInstagram, erTiktok, seguidoresTiktok }) => {
  return (
    <div className="influencer-card">
      <div className="heart-container">
        <FontAwesomeIcon icon={iconoCorazon} className="heart" />
      </div>
      <div className="flex items-center mt-2">
        <div className="foto-container">
          <img
            src={imagenSrc}
            alt="Influencer"
            className="foto"
          />
        </div>
        <div className="info-container">
          <div className="social-media">
            <FontAwesomeIcon icon={faInstagram} className="icono-redes" />
            <span className="block text-sm font-semibold">@{usuario}</span>
            <span className="block text-sm">
              ER%: <span className="texto-resaltado font-semibold">{erInstagram}%</span> - {seguidoresInstagram} seguidores
            </span>
            <FontAwesomeIcon icon={faTiktok} className="icono-redes" />
            <span className="block text-sm font-semibold">@{usuario}</span>
            <span className="block text-sm">
              ER%: <span className="texto-resaltado font-semibold">{erTiktok}%</span> - {seguidoresTiktok} seguidores
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfluencerCard;
