import { createSlice } from "@reduxjs/toolkit";

interface IUserSlice {
  user: any,
  isAuth: boolean
}

const initialState:IUserSlice = {
  user: {},
  isAuth: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export default userSlice.reducer;

export const userActions = userSlice.actions;
