const GitHubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case 'GET_PRODUCT':
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
        case: 'CLEAR_USER',
      };
    case 'CLEAR_USER':
      return {
        ...state,
        user: [],
      };
    default:
      return state;
  }
};

export default GitHubReducer;
