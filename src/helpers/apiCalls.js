const url = `http://localhost:3000`;

export const loginUser = async (data) => {
  try {
    const res = await (
      await fetch(`${url}/users/login`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })
    ).json();

    return res;
  } catch (error) {
    return [];
  }
};

export const authenticateUser = async () => {
  try {
    const res = await (
      await fetch(`${url}/users/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })
    ).json();

    return res;
  } catch (error) {
    return error;
  }
};

export const signUpUser = async (data) => {
  try {
    const res = await (
      await fetch(`${url}/users`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })
    ).json();

    return res;
  } catch (error) {
    return [];
  }
};

export const logOut = async (data) => {
  try {
    const res = await (
      await fetch(`${url}/users/logOut`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })
    ).json();

    return res;
  } catch (error) {
    return [];
  }
};
