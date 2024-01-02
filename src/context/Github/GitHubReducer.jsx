const GitHubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default GitHubReducer;
