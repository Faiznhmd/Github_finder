const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const SearchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await fetch(
    `${import.meta.env.VITE_GITHUB_URL}/search/users?${params}`,
    {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    }
  );

  const { items } = await response.json();
  return items;
};
//get a single profile

export const getUsers = async (login) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });
  const response = await fetch(
    `${import.meta.env.VITE_GITHUB_URL}/users/${login}`,
    {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    }
  );

  if (response.status === 404) {
    window.location = '/notFound';
  } else {
    const data = await response.json();
    // console.log(data);
    return data;
  }
};
