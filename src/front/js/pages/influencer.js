import React, { useEffect, useState } from "react";
import Flux from "../store/flux";
import InfluencerView from "../component/InfluencerView.jsx";
import influencers from "../../data/influencers.json";

const Influencer = () => {

  const { state, actions } = Flux();

  useEffect(() => {
    actions.loadInfluencers();
  }, []);


  return (
    <div>
      
      {state.filteredInfluencers.map((influencer) => (
        
        <InfluencerView
          key={influencer.id}
          erInstagram={influencer.erInstagram}
          bio={influencer.bio}
          seguidoresInstagram={influencer.seguidoresInstagram}
          publicacionesInstagram={influencer.publicacionesInstagram}
          likesInstagram={influencer.likesInstagram}
          comentariosInstagram={influencer.comentariosInstagram}
          brandedPostInstagram={influencer.brandedPostInstagram}
          imagen={influencer.imagen}
          erTiktok={influencer.erTiktok}
          seguidoresTiktok={influencer.seguidoresTiktok}
          publicacionesTiktok={influencer.publicacionesTiktok}
          likesTiktok={influencer.likesTiktok}
          comentariosTiktok={influencer.comentariosTiktok}
          brandedPostTiktok={influencer.brandedPostTiktok}
          id={influencer.id}
          
        />
      ))}
    </div>
  )
};

export default Influencer;
