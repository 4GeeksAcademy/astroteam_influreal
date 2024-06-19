import React, { useState, useEffect } from "react";
import influencersData from "../../data/influencers.json";
import { checkAuthToken, loginDispatcher, registerDispatcher } from "./dispatchers/authDispatcher";
import jwtDecode from "jwt-decode";

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
      paisesObjetivo: [],
      engagement: "",
      seguidores: "",
    },
    auth_token: localStorage.getItem('token') || "", 
    isAuthenticated: false,
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

  const checkAuthentication = async (token) => {
    const response = await checkAuthToken(token);

    if (response.success) {

      setState(prevState => ({ ...prevState, isAuthenticated: true, auth_token: response.token }));
      return true;
    } else {
      localStorage.removeItem('token');
      setState(prevState => ({ ...prevState, isAuthenticated: false, auth_token: "" }));
      return false;
    }
  };

  const login = async (email, password) => {
    const response = await loginDispatcher(email, password);

    if (response.success) {
      localStorage.setItem('token', response.token);
      setState(prevState => ({ ...prevState, isAuthenticated: true, auth_token: response.token }));
    } else {
      localStorage.removeItem('token');
      setState(prevState => ({ ...prevState, isAuthenticated: false, auth_token: "" }));
    }
  };

  const register = async ( email, password ) => {
    const response = await registerDispatcher(email,password)

    if(response.success){
      localStorage.setItem('token', response.token);
      setState({...state, isAuthenticated: true, auth_token: response.token})
      return true;
    }
    localStorage.removeItem('token');
    setState({...state, isAuthenticated: false, auth_token: null})
    return false
  }

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
    if (name === 'categoria' || name === 'edadObjetivo' || name === 'paisesObjetivo') {
      filters[name] = Array.from(value);
    }
    const filteredInfluencers = state.influencers.filter((influencer) => {
      return Object.keys(filters).every((key) => {
        if (!filters[key].length && typeof filters[key] !== 'number') return true;
        if (key === "paisesObjetivo") {
          return filters[key].every((pais) => influencer[key].includes(pais));
        }
        if (key === "estiloDeVida") {
          return influencer.estiloDeVida === filters[key];
        }
        if (key === "seguidores") {
          const seguidoresValue = parseInt(filters[key], 10);
          return influencer.seguidoresInstagram >= seguidoresValue || influencer.seguidoresTiktok >= seguidoresValue;
        }
        if (key === "engagement") {
          const engagementValue = parseFloat(filters[key]);
          return influencer.erInstagram >= engagementValue || influencer.erTiktok >= engagementValue;
        }
        if (key === "edadObjetivo") {
          return filters[key].every((edad) => influencer[key].includes(edad));
        }
        if (key === "categoria") {
          return filters[key].every((categoria) => influencer[key].includes(categoria));
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
        paisesObjetivo: [],
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
      checkAuthentication,
      login,
      register
    },
  };
};

export default Flux;
