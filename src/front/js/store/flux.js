import React, { useState, useEffect } from "react";
import influencersData from "../../data/influencers.json";

const Flux = () => {
  const [state, setState] = useState({
    message: null,
    influencers: [],
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
      setState({ ...state, influencers: influencersData });
      console.log("Influencers cargados:", influencersData);
    } catch (error) {
      console.error("Error cargando influencers:", error);
    }
  };

  useEffect(() => {
    loadInfluencers();
  }, []);

  const changeColor = (index, color) => {
    const updatedDemo = state.demo.map((elm, i) => {
      if (i === index) return { ...elm, background: color };
      return elm;
    });
    setState({ ...state, demo: updatedDemo });
  };

  return {
    state,
    actions: {
      loadInfluencers,
      changeColor,
    },
  };
};

export default Flux;
