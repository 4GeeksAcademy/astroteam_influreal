export const createPropuestaDispatcher = async (token, nombre, descripcion) => {
    const response = await fetch(`${process.env.BACKEND_URL}propuestas/create`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, descripcion }),
    });

    const data = await response.json();

    if (response.ok) {
        return {
            success: true,
            propuesta: data.propuesta,
        };
    }

    return {
        success: false,
        message: data.message,
    };
};

export const loadPropuestasDispatcher = async (token) => {
    const response = await fetch(`${process.env.BACKEND_URL}propuestas/all`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();

    if (response.ok) {
        return {
            success: true,
            propuestas: data.propuestas,
        };
    }

    return {
        success: false,
        message: data.message,
    };
};

export const updatePropuestaDispatcher = async (token, propuestaId, nombre, descripcion) => {
    const response = await fetch(`${process.env.BACKEND_URL}propuestas/${propuestaId}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, descripcion }),
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

export const deletePropuestaDispatcher = async (token, propuestaId) => {
    const response = await fetch(`${process.env.BACKEND_URL}propuestas/${propuestaId}`, {
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

export const loadPropuestaDispatcher = async (propuestaId, token) => {
    const url = `${process.env.BACKEND_URL}propuestas/${propuestaId}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        if (response.ok) {
            const propuesta = {
                id: data.propuesta.id,
                nombre: data.propuesta.nombre,
                descripcion: data.propuesta.descripcion,
                fecha_creacion: data.propuesta.fecha_creacion
            };

            return {
                success: true,
                propuesta
            };
        } else {
            return {
                success: false,
                message: data.message || 'Error al obtener la propuesta'
            };
        }
    } catch (error) {
        console.error('Error fetching propuesta:', error);
        return {
            success: false,
            message: 'Error de red al obtener la propuesta. Por favor, intenta de nuevo.'
        };
    }
};


export const sendPropuestaDispatcher = async (token, lista, propuesta) => {
    try {
        const response = await fetch(`${process.env.BACKEND_URL}propuestas/enviar`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                lista: lista, 
                propuesta: propuesta
            })
        });

        if(response.ok){
            return{
                success:true
            }
        }
        return {
            success:false
        }
    } catch (error) {
        console.error("error al enviar el email", error);
        return {
            success: false
        }
    }
}