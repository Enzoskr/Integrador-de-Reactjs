import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
  hiddenMenu: true,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, action) => {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
    toggleMenuHidden: (state) => {
      return {
        ...state,
        hiddenMenu: !state.hiddenMenu,
      };
    },
    setVerified: (state, action) => {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          verified: action.payload,
        },
      };
    },
  },
});

export const { setCurrentUser, toggleMenuHidden, setVerified } =
  userSlice.actions;

export default userSlice.reducer;
