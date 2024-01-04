import { createContext, useReducer } from 'react';
import GitHubReducer from './GitHubReducer';

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    user: [],
    product: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  //SearchUsers
  const SearchUsers = async (text) => {
    setLoading();
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
    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  //get a single profile

  const getUsers = async (login) => {
    setLoading();

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
      dispatch({
        type: 'GET_PRODUCT',
        payload: data,
      });
    }
  };
  //cLEAR uSER

  const ClearUser = () =>
    dispatch({
      type: 'CLEAR_USER',
    });
  //set_loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });
  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        product: state.product,
        loading: state.loading,
        SearchUsers,
        ClearUser,
        getUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
