import { createContext, useReducer } from 'react';
import GitHubReducer from './GitHubReducer';

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    user: [],
    loading: false,
  };

  //fetchUsers
  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    dispatch({
      type: 'GET_USERS',
      payload: data,
    });
  };
  //set_loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });
  return (
    <GithubContext.Provider
      value={{ user: state.user, loading: state.loading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
