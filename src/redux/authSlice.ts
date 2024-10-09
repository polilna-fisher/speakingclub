import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../models/IUser";

interface IAuthSlice {
  accessToken?: string
}

const initialState: IAuthSlice = {
  accessToken: localStorage.getItem("accessToken") || undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (_, action) => {},
    login: (_, action) => {},
    resetPassword: (_, action) => {},
    logout: () => {},
    setTokens: (state, action: PayloadAction<{ accessToken?: string }>) => {
      state.accessToken = action.payload.accessToken;
    }
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
