import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingParts: true,
  errorParts: false,
  partsList: [],
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
