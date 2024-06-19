export const checkAuthToken = async (token) => {

    const response = await fetch(`${process.env.BACKEND_URL}auth/check`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
    const data = await response.json()
    if (data.id) {
        return {
            success: true,
            id: data.id
            
        };
    }
    return {
        success: false
    }


}

export const loginDispatcher = async (email, password) => {

    const response = await fetch(`${process.env.BACKEND_URL}auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    });

    const data = await response.json();

    if (data.token) {
        return {
            success: true,
            token: data.token
        }
    }

    return {
        success: false,
    }
}

export const registerDispatcher = async (email, password) => {

    const response = await fetch(`${process.env.BACKEND_URL}auth/register`,{
        method: 'POST',
        headers:{
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({"email": email, "password": password})
    })
    
    const data = await response.json();

    if(data.token){
        return {
            success:true,
            token: data.token
        }
    }
    return {
        success:false
    }
}