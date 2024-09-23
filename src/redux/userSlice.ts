import { createSlice } from "@reduxjs/toolkit";
import {IUser} from "../models/IUser";

interface IUserSlice {
  user: IUser | null,
  isAuth: boolean
}

const initialState:IUserSlice = {
  user: null,
  isAuth: false,
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
    }
  },
});

export default userSlice.reducer;

export const userActions = userSlice.actions;
