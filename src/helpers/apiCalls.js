const apiUrl = `http://localhost:3000`;

export const loginUser = async (data) => {
  try {
    return await (
      await fetch(`${apiUrl}/users/login`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })
    ).json();
  } catch (error) {
    return error;
  }
};

export const authenticateUser = async (data) => {
  try {
    const res = await fetch(`${apiUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const data = await res.json();
    if (data.error) return false;
    return data;
  } catch (error) {
    return false;
  }
};
