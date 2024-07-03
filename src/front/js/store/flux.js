import {
  checkAuthToken,
  loginDispatcher,
  registerDispatcher,
  changePasswordDispatcher,
} from "./dispatchers/authDispatcher.js";
import {
  createListaDispatcher,
  loadListasDispatcher,
  addInfluencerToListaDispatcher,
  removeInfluencerFromListaDispatcher,
  deleteListaDispatcher,
  selectSingleListDispatcher,
} from "./dispatchers/listaDispatcher.js";
import {
  createPropuestaDispatcher,
  loadPropuestasDispatcher,
  updatePropuestaDispatcher,
  deletePropuestaDispatcher,
  loadPropuestaDispatcher
} from "./dispatchers/propuestasDispatcher.js";
import {
  loadInfluencersDispatcher,
  loadSingleInfluencerDispatcher,
  addInfluencerDispatcher
} from "./dispatchers/influencerDispatcher.js";


const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      singleList: null,
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
      listas: [],
      propuestas: [],
    },
    actions: {

      checkAuthentication: async (token) => {
        const response = await checkAuthToken(token);
        console.log("Auth Response:", response);

        if (response.success) {
          setStore({
            isAuthenticated: true,
            auth_token: token,
            current_user: { email: response.email },
          });
          return true;
        } else {
          localStorage.removeItem("token");
          setStore({
            isAuthenticated: false,
            auth_token: "",
          });
          return false;
        }
      },

      addInfluencer: async (influencer) => {
        const response = await addInfluencerDispatcher(influencer);

        if (response.success) {
          return {
            success: true,
          }
        }
        return {
          success: false,
          message: response.message
        }

      },

      login: async (email, password) => {
        const response = await loginDispatcher(email, password);

        if (response.success) {
          localStorage.setItem("token", response.token);
          setStore({
            isAuthenticated: true,
            auth_token: response.token,
          });
        } else {
          localStorage.removeItem("token");
          setStore({
            isAuthenticated: false,
            auth_token: "",
          });
        }
      },

      register: async (email, password) => {
        const response = await registerDispatcher(email, password);

        if (response.success) {
          localStorage.setItem("token", response.token);
          setStore({
            isAuthenticated: true,
            auth_token: response.token,
          });
          return true;
        }
        localStorage.removeItem("token");
        setStore({
          isAuthenticated: false,
          auth_token: null,
        });
        return false;
      },

      changePassword: async (password) => {
        try {
          const store = getStore();
          const response = await changePasswordDispatcher(store.auth_token, password);
          return response.success
            ? { success: true }
            : { success: false, message: response.message };
        } catch (error) {
          console.error(error);
        }
      },
      loadSingleInfluencer: async (id) => {

        const response = await loadSingleInfluencerDispatcher(id);
        if (response.success) {
          return {
            success: true,
            influencer: response.influencer
          }
        }
        return {
          success: false
        }
      },

      loadInfluencers: async () => {
        try {
          const influencersData = await loadInfluencersDispatcher();
          const influencers = influencersData.influencers.map((influencer) => ({
            ...influencer,
            categoria: influencer.categoria || [],
          }));

          setStore({
            influencers: influencers,
            filteredInfluencers: influencers,
          });
          console.log("Influencers cargados:", influencers);
        } catch (error) {
          console.error("Error cargando influencers:", error);
        }
      },

      setFilter: (name, value) => {
        const store = getStore();
        const filters = { ...store.filters, [name]: value };

        const filteredInfluencers = store.influencers.filter((influencer) => {
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
              return filters[key].every((categoria) =>
                influencer.categorias.includes(categoria)
              );
            }
            if (key === "sexo") {
              return influencer.sexo === filters[key];
            }
            return influencer[key] === filters[key];
          });
        });

        setStore({
          filters: filters,
          filteredInfluencers: filteredInfluencers,
        });
      },

      clearFilters: () => {
        const store = getStore();
        setStore({
          filters: {
            redSocial: "",
            estiloDeVida: "",
            categoria: [],
            edadObjetivo: [],
            paisesObjetivo: [],
            engagement: "",
            seguidores: "",
          },
          filteredInfluencers: store.influencers,
        });
      },

      sendPropuesta: async (listaId, propuestaId) => {

        const store = getStore();
        const listaResponse = await getActions().selectLista(listaId);
        const propuestaResponse = await getActions().selectPropuesta(propuestaId)
        const response = await sendPropuestaDispatcher(listaResponse.lista, propuestaResponse.propuesta)

      },

      createListas: async (nombre, influencers) => {
        const store = getStore();
        const response = await createListaDispatcher(store.auth_token, nombre, influencers);
        if (response.success) {
          const updatedListas = [...store.listas, response.lista];
          setStore({ listas: updatedListas });
        }
      },

      loadListas: async () => {
        const store = getStore();
        const response = await loadListasDispatcher(store.auth_token);
        if (response.success) {
          setStore({ listas: response.listas });
          return response.listas;
        }
      },


      addInfluencerToLista: async (listaId, influencerId) => {
        const store = getStore();
        const response = await addInfluencerToListaDispatcher(store.auth_token, listaId, influencerId);
        if (response.success) {
          getActions().selectLista(listaId);
        }
      },

      removeInfluencerFromLista: async (listaId, influencerId) => {
        const store = getStore();
        const response = await removeInfluencerFromListaDispatcher(store.auth_token, listaId, influencerId);
        if (response.success) {
          getActions().selectLista(listaId);
          return {
            success: true
          }
        }
        return {
          success: false
        }
      },

      createPropuesta: async (nombre, descripcion) => {
        const store = getStore();
        const response = await createPropuestaDispatcher(store.auth_token, nombre, descripcion);
        if (response.success) {
          const updatedPropuestas = [...store.propuestas, response.propuesta];
          setStore({ propuestas: updatedPropuestas });
        }
      },

      loadPropuestas: async () => {
        const store = getStore();
        const response = await loadPropuestasDispatcher(store.auth_token);
        if (response.success) {
          setStore({ propuestas: response.propuestas });
          return response.propuestas;
        }
      },

      updatePropuesta: async (propuestaId, nombre, descripcion) => {
        const store = getStore();
        const response = await updatePropuestaDispatcher(store.auth_token, propuestaId, nombre, descripcion);
        if (response.success) {
          getActions().loadPropuestas();
        }
      },

      deleteLista: async (listaId) => {
        const store = getStore();
        const response = await deleteListaDispatcher(store.auth_token, listaId);
        if (response.success) {
          getActions().loadListas();
        }
      },

      deletePropuesta: async (propuestaId) => {
        const store = getStore();
        const response = await deletePropuestaDispatcher(store.auth_token, propuestaId);
        if (response.success) {
          getActions().loadPropuestas();
        }
      },

      selectLista: async (listaId) => {
        const store = getStore();
        try {
          const response = await selectSingleListDispatcher(store.auth_token, listaId);
          console.log(response.lista);
          if (response.success) {
            setStore({ singleList: response.lista });
            return {
              success: true,
              lista: response.lista
            };
          }
          return { success: false };
        } catch (error) {
          console.error("Error seleccionando la lista", error);
          return { success: false };
        }
      },

      selectPropuesta: async (propuestaId) => {
        const store = getStore();
        try {
          const response = await loadPropuestaDispatcher(propuestaId, store.auth_token);
          console.log(response.propuesta);
          if (response.success) {
            return {
              success: true,
              propuesta: response.propuesta
            };
          }
          return { success: false };
        } catch (error) {
          console.error("Error seleccionando la propuesta", error);
          return { success: false };
        }
      },


    },
  };
};

export default getState;

