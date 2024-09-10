import { createSlice } from "@reduxjs/toolkit";

interface IInitialCommonState{
  activeNavItem: null | number
}

const initialState:IInitialCommonState = {
  activeNavItem: null
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggleActiveNavItem: (state, action) => {
      state.activeNavItem = action.payload;
    },
  },
});

export default commonSlice.reducer;

export const commonActions = commonSlice.actions;
