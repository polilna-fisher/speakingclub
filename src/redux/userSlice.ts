import { createSlice } from "@reduxjs/toolkit";
import {IUser} from "../models/IUser";

interface IUserSlice {
  user: IUser | null,
  isAuth: boolean,
  isLoading: boolean,
  isError: boolean,
  loadingBooking: boolean,
  errorBooking: boolean,
}

const initialState:IUserSlice = {
  user: null,
  isAuth: false,
  isLoading: true,
  isError: false,
  loadingBooking: false,
  errorBooking: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getMe: () => {},

    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    userError: (state) => {
      state.isError = true
    },
    fetchBookingPart: (state, action) => {
      state.loadingBooking = true;
      state.errorBooking = false;
    },
    fetchBookingPartError: (state) => {
      state.loadingBooking = false;
      state.errorBooking = true;
    },
    fetchBookingPartSuccess: (state) => {
      state.loadingBooking = false;
      state.errorBooking = false;
      // state.user?.bookedParts = !!state.partsList.length ? state.partsList.filter(item => item.booked) : []
    },

  },
});

export default userSlice.reducer;

export const userActions = userSlice.actions;
