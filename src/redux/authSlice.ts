import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthSlice {
  accessToken?: string,
  isLoading?: boolean,
  isError?: boolean,
  isAuth?: boolean,
  isResetLoading?: boolean,
  isResetError?: boolean,
}

const initialState: IAuthSlice = {
  accessToken: localStorage.getItem("accessToken") || undefined,
  isLoading: false,
  isError: false,
  isAuth: false,
  isResetLoading: false,
  isResetError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (_, action) => {},
    setPassword: (_, action) => {},
    logout: () => {},
    againSendActivationLink: (_, action) => {},
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
    resetLoading: (state, action) => {
      state.isResetLoading = true
      state.isResetError = false
    },
    resetError: (state) => {
      state.isResetLoading = false
      state.isResetError = true
    },
    isResetPassword: (state) => {
      state.isResetLoading = false
      state.isResetError = false
    }

  }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
