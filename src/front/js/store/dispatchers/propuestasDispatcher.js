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
