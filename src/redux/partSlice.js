import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingParts: true,
  errorParts: false,
  partsList: [],
  loadingBooking: false,
  errorBooking: false,
  bookedParts: [],
  newPart1: null,
  newPart2: null,
  isPartsReceived: false
};

export const partSlice = createSlice({
  name: "parts",
  initialState,
  reducers: {
    fetchPartsList: (state) => {
      state.loadingParts = true;
      state.errorParts = false;
    },
    fetchPartListSuccess: (state, action) => {
      state.loadingPart = false;
      state.errorParts = false;
      state.partsList = action.payload;
    },
    fetchPartsListError: (state) => {
      state.loadingParts = false;
      state.errorParts = true;
    },
    fetchBookingPart: (state, _action) => {
      state.loadingBooking = true;
      state.errorBooking = false;
    },
    fetchBookingPartSuccess: (state, action) => {
      state.loadingBooking = false;
      state.errorBooking = false;
      state.bookedParts =  !!state.partsList.length && state.partsList.filter(item => !!item.booked)
    },
    fetchBookingPartError: (state) => {
      state.loadingBooking = false;
      state.errorBooking = true;
    },
    fetchNewPart1: (state, action) => {
      state.newPart1 = action.payload;
    },
    fetchNewPart2: (state, action) => {
      state.newPart2 = action.payload;
    },
    receiveParts: (state, action) => {
      state.isPartsReceived = action.payload;
    }
  },
});

export default partSlice.reducer;

export const partActions = partSlice.actions;
