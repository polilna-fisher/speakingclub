import { createSlice } from "@reduxjs/toolkit";
import {IUser} from "../models/IUser";

interface IUserSlice {
  user: IUser | null,
  isAuth: boolean,
  isLoading: boolean,
  isError: boolean,
}

const initialState:IUserSlice = {
  user: null,
  isAuth: false,
  isLoading: true,
  isError: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isError = false;

    },
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    userLoading: (state) => {
      state.isLoading = true
    },
    userError: (state) => {
      state.isError = true
    }
  },
});

export default userSlice.reducer;

export const userActions = userSlice.actions;
