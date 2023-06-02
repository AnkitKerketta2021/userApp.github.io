export default (state, action) => {
  switch (action.type) {
    case "LOGIN_USER": {
      return {
        loggedUser: [action.payload],
      };
    }
    case "ALL_USER": {
      return {
        allUsers: [action.payload],
      };
    }
    case "CHAT_USER": {
      return {
        chatData: [action.payload],
      };
    }

    default:
      return state;
  }
};
