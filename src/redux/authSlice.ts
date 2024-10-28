import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../models/IUser";

interface IAuthSlice {
  accessToken?: string,
  isLoading?: boolean,
  isError?: boolean,
  isAuth?: boolean,
  resetAllowed?: boolean
}

const initialState: IAuthSlice = {
  accessToken: localStorage.getItem("accessToken") || undefined,
  isLoading: false,
  isError: false,
  isAuth: false,
  resetAllowed: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (_, action) => {},
    resetPassword: (_, action) => {},
    setPassword: (_, action) => {},
    logout: () => {},
    setTokens: (state, action: PayloadAction<{ accessToken?: string }>) => {
      state.accessToken = action.payload.accessToken;
    },
    register: (state, action) => {
      state.isLoading = true
      state.isError = false
    },
    loading: (state, action) => {
      state.isLoading = true
      state.isError = false
    },
    activeForm: (state) => {
      state.isLoading = false
      state.isError = false
    },
    error: (state) => {
      state.isLoading = false
      state.isError = true
    },
    allowResetPassword: (state, action) => {
     state.resetAllowed = action.payload;
    }
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
