import React, { useState, useEffect } from "react";
// import influencersData from "../../data/influencers.json";
import {
  checkAuthToken,
  loginDispatcher,
  registerDispatcher,
  changePasswordDispatcher,
} from "./dispatchers/authDispatcher";
import jwtDecode from "jwt-decode";
import { loadInfluencersDispatcher } from "./dispatchers/influencerDispatcher";

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
    auth_token: localStorage.getItem("token") || "",
    isAuthenticated: false,
    current_user: {
      email: "",
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

  const checkAuthentication = async (token) => {
    const response = await checkAuthToken(token);
    console.log("Auth Response:", response);

    if (response.success) {
      setState((prevState) => ({
        ...prevState,
        isAuthenticated: true,
        auth_token: token,
        current_user: { email: response.email },
      }));
      return true;
    } else {
      localStorage.removeItem("token");
      setState((prevState) => ({
        ...prevState,
        isAuthenticated: false,
        auth_token: "",
      }));
      return false;
    }
  };
  const login = async (email, password) => {
    const response = await loginDispatcher(email, password);

    if (response.success) {
      localStorage.setItem("token", response.token);
      setState((prevState) => ({
        ...prevState,
        isAuthenticated: true,
        auth_token: response.token,
      }));
    } else {
      localStorage.removeItem("token");
      setState((prevState) => ({
        ...prevState,
        isAuthenticated: false,
        auth_token: "",
      }));
    }
  };

  const register = async (email, password) => {
    const response = await registerDispatcher(email, password);

    if (response.success) {
      localStorage.setItem("token", response.token);
      setState({ ...state, isAuthenticated: true, auth_token: response.token });
      return true;
    }
    localStorage.removeItem("token");
    setState({ ...state, isAuthenticated: false, auth_token: null });
    return false;
  };

  const changePassword = async (password) => {
    console.log("hola");
    try {
      const response = await changePasswordDispatcher(
        state.auth_token,
        password
      );
      if (response.success) {
        return {
          success: true,
        };
      }
      return {
        success: false,
        message: response.message,
      };
    } catch (error) {}
  };

  const loadInfluencers = async () => {
    try {
      const influencersData = await loadInfluencersDispatcher();
      const influencers = influencersData.influencers.map((influencer) => ({
        ...influencer,
        categoria: influencer.categoria || [],
      }));

      setState({
        ...state,
        influencers: influencers,
        filteredInfluencers: influencers,
      });
      console.log("Influencers cargados:", influencers);
    } catch (error) {
      console.error("Error cargando influencers:", error);
    }
  };

  const setFilter = (name, value) => {
    const filters = { ...state.filters, [name]: value };

    const filteredInfluencers = state.influencers.filter((influencer) => {
      return Object.keys(filters).every((key) => {
        if (!filters[key].length) return true;

        if (key === "paisesObjetivo") {
          return filters[key].every(
            (pais) => influencer[key] && influencer[key].includes(pais)
          );
        }
        if (key === "estiloDeVida") {
          return influencer.estiloDeVida === filters[key];
        }
        if (key === "seguidores") {
          const seguidoresValue = parseInt(filters[key], 10);
          return (
            influencer.seguidoresInstagram >= seguidoresValue ||
            influencer.seguidoresTiktok >= seguidoresValue
          );
        }
        if (key === "engagement") {
          const engagementValue = parseFloat(filters[key]);
          return (
            influencer.erInstagram >= engagementValue ||
            influencer.erTiktok >= engagementValue
          );
        }
        if (key === "edadObjetivo") {
          return filters[key].every(
            (edad) => influencer[key] && influencer[key].includes(edad)
          );
        }
        if (key === "categoria") {
          return influencer.categorias.some((categoria) =>
            filters[key].includes(categoria)
          );
        }
        if (key === "sexo") {
          return influencer.sexo === filters[key];
        }
        return influencer[key] === filters[key];
      });
    });

    setState((prevState) => ({
      ...prevState,
      filters: filters,
      filteredInfluencers: filteredInfluencers,
    }));
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
      register,
      changePassword,
    },
  };
};

export default Flux;
