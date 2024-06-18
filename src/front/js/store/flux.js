import React, { useState, useEffect } from "react";
import influencersData from "../../data/influencers.json";

const Flux = () => {
  const [state, setState] = useState({
    message: null,
    influencers: [],
    filteredInfluencers: [],
    filters: {
      redSocial: "",
      estiloDeVida: "",
      categoria: [],
      edadObjetivo: [],
      paisesObjetivo: "",
      engagement: "",
      seguidores: "",
    },
    demo: [
      {
        title: "FIRST",
        background: "white",
        initial: "white",
      },
      {
        title: "SECOND",
        background: "white",
        initial: "white",
      },
    ],
  });

  const loadInfluencers = async () => {
    try {
      console.log("Fetching influencers...");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setState({
        ...state,
        influencers: influencersData,
        filteredInfluencers: influencersData,
      });
      console.log("Influencers cargados:", influencersData);
    } catch (error) {
      console.error("Error cargando influencers:", error);
    }
  };

  useEffect(() => {
    loadInfluencers();
  }, []);

  const setFilter = (name, value) => {
    const filters = { ...state.filters, [name]: value };
    if (name === 'categoria' || name === 'edadObjetivo') {
      filters[name] = Array.from(value);
    }
    const filteredInfluencers = state.influencers.filter((influencer) => {
      return Object.keys(filters).every((key) => {
        if (!filters[key].length && typeof filters[key] !== 'number') return true;
        if (key === "paisesObjetivo") {
          return influencer[key].includes(filters[key]);
        }
        if (key === "estiloDeVida") {
          return influencer.estiloDeVida === filters[key];
        }
        if (key === "seguidores") {
          const seguidoresValue = parseInt(filters[key], 10);
          if (influencer.redSocial === "TikTok") {
            return influencer.seguidoresTiktok >= seguidoresValue;
          } else {
            return influencer.seguidoresInstagram >= seguidoresValue;
          }
        }
        if (key === "engagement") {
          const engagementValue = parseFloat(filters[key]);
          if (influencer.redSocial === "TikTok") {
            return influencer.erTiktok >= engagementValue;
          } else {
            return influencer.erInstagram >= engagementValue;
          }
        }
        if (key === "edadObjetivo") {
          return filters[key].includes(influencer.edadObjetivo);
        }
        if (key === "categoria") {
          return filters[key].includes(influencer.categoria);
        }
        if (key === "sexo") {
          return influencer.sexo === filters[key];
        }
        return influencer[key] === filters[key];
      });
    });
    setState({ ...state, filters, filteredInfluencers });
  };

  const clearFilters = () => {
    setState({
      ...state,
      filters: {
        redSocial: "",
        estiloDeVida: "",
        categoria: [],
        edadObjetivo: [],
        paisesObjetivo: "",
        engagement: "",
        seguidores: "",
      },
      filteredInfluencers: state.influencers,
    });
  };

  return {
    state,
    actions: {
      loadInfluencers,
      setFilter,
      clearFilters,
    },
  };
};

export default Flux;
