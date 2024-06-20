export const checkAuthToken = async (token) => {
  const response = await fetch(`${process.env.BACKEND_URL}auth/check`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log("Response Data:", data);

  if (data.id) {
    return {
      success: true,
      id: data.id,
      email: data.email,
    };
  }

  return {
    success: false,
  };
};
export const loginDispatcher = async (email, password) => {
  const response = await fetch(`${process.env.BACKEND_URL}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const data = await response.json();

  if (data.token) {
    return {
      success: true,
      token: data.token,
    };
  }

  return {
    success: false,
  };
};

export const registerDispatcher = async (email, password) => {
  const response = await fetch(`${process.env.BACKEND_URL}auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });

  const data = await response.json();

  if (data.token) {
    return {
      success: true,
      token: data.token,
    };
  }
  return {
    success: false,
  };
};

export const changePasswordDispatcher = async (token, password) => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}auth/change-password`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: password }),
      }
    );

    if (response.ok) {
      return {
        success: true,
      };
    }
  } catch (error) {
    console.error(error);
    const data = await response.json();
    return {
      success: false,
      message: data.msg,
    };
  }
};
