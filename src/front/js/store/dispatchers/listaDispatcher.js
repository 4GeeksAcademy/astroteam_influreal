export const createListaDispatcher = async (token, nombre, influencers) => {
    const response = await fetch(`${process.env.BACKEND_URL}listas/create`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, influencers }),
    });

    const data = await response.json();

    if (response.ok) {
        return {
            success: true,
            lista: data.lista,
        };
    }

    return {
        success: false,
        message: data.message,
    };
};

export const loadListasDispatcher = async (token) => {
    try{
    const response = await fetch(`${process.env.BACKEND_URL}listas/all`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();

    if (response.ok) {
        console.log(data.listas)
        return {
            success: true,
            listas: data.listas,
        };
    }

    return {
        success: false,
        message: data.message,
    };
    }catch(error){
        console.error('Error al cargar las listas', error);
        return {
            success:false,
            message: error
        }
    }
};

export const addInfluencerToListaDispatcher = async (token, listaId, influencerId) => {
    const response = await fetch(`${process.env.BACKEND_URL}listas/${listaId}/add_influencer`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ influencer_id: influencerId }),
    });

    const data = await response.json();

    if (response.ok) {
        return {
            success: true,
            message: data.message,
        };
    }

    return {
        success: false,
        message: data.message,
    };
};

export const removeInfluencerFromListaDispatcher = async (token, listaId, influencerId) => {
    const response = await fetch(`${process.env.BACKEND_URL}listas/${listaId}/remove_influencer`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ influencer_id: influencerId }),
    });

    const data = await response.json();

    if (response.ok) {
        return {
            success: true,
            message: data.message,
        };
    }

    return {
        success: false,
        message: data.message,
    };
};


export const deleteListaDispatcher = async (token, listaId) => {
    const response = await fetch(`${process.env.BACKEND_URL}listas/${listaId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();

    if (response.ok) {
        return {
            success: true,
            message: data.message,
        };
    }

    return {
        success: false,
        message: data.message,
    };
};


export const selectSingleListDispatcher = async (token, listaId) => {

    try {
        const response = await fetch(`${process.env.BACKEND_URL}listas/${listaId}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": 'application/json',

            }
        });

        const data = await response.json();

        if (response.ok) {
              return {
                success: true,
                lista: data.lista
            }
        }
        return {
            success: false,
            message: data.message
        }

    } catch (error) {
        console.error("Error en el fetch seleccionando lista", error);

        return {
            success: false,
            message: error
        }
    }
}