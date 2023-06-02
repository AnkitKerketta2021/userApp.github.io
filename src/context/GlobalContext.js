import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  loggedUser: [],
  allUsers: [],
  chatData: [],
};

export const GlobalState = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // ! ACTIONS
  const loginUser = (user) => {
    dispatch({
      type: "LOGIN_USER",
      payload: user,
    });
  };
  const chatUser = (catUser) => {
    dispatch({
      type: "CHAT_USER",
      payload: catUser,
    });
  };

  // * All API DATA
  const allUser = (alluser) => {
    dispatch({
      type: "ALL_USER",
      payload: alluser,
    });
  };

  return (
    <GlobalState.Provider
      value={{
        user: state.loggedUser,
        allUsers: state.allUsers,
        chatData: state.chatData,
        loginUser,
        allUser,
        chatUser,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
