import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../models/IUser";

interface IToastSlice {
  show: boolean;
  message: string;
  type: ToastType
  currentTimeout: any
}

export enum ToastType {
  WARNING = "warning",
  ERROR = "error",
  INFO = "info",
}

const initialState: IToastSlice = {
  show: false,
  message: "",
  type: ToastType.INFO,
  currentTimeout: null,
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<{ message: string; type: ToastType  }>) => {
      state.show = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    setUpTimeout: (state, action) => {
      clearTimeout(state.currentTimeout)
      state.currentTimeout = action.payload;
    },
    resetToast: (state) => {
      clearTimeout(state.currentTimeout)
      return initialState
    }
  },
});

export default toastSlice.reducer;
export const toastActions = toastSlice.actions;
