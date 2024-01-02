import { createContext, useState } from 'react';

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    setUser(data);
    setLoading(false);
  };

  return (
    <GithubContext.Provider value={{ user, loading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
