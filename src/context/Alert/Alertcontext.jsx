import { createContext, useReducer } from 'react';
import ALertreducer from './Alertreducer';

const Alertcontext = createContext();

export const Alertprovider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(ALertreducer, initialState);

  // set an Alert

  const setAlert = (msg, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { msg, type },
    });
    setTimeout(() => {
      dispatch({ type: 'REMOVE_ALERT' });
    }, 8000);
  };
  return (
    <Alertcontext.Provider value={{ alert: state, setAlert }}>
      {children}
    </Alertcontext.Provider>
  );
};
export default Alertcontext;
