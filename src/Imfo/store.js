import { createStore } from "@reduxjs/toolkit";
const initialState = {
  userInfo: null,
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER_INFO":
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
}
const store = createStore(rootReducer);
export default store;
