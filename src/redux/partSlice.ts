import {createSlice} from "@reduxjs/toolkit";
import {IPart} from "../models/IPart";

interface IPartState {
    loadingParts: boolean,
    errorParts: boolean,
    partsList: IPart[] | [],
    loadingBooking: boolean,
    errorBooking: boolean,
    bookedParts: IPart[] | [],
    newPart1: IPart | null,
    newPart2: IPart | null,
    isPartsReceived: boolean
}

const initialState:IPartState = {
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
            state.loadingParts = false;
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
        fetchBookingPartSuccess: (state) => {
            state.loadingBooking = false;
            state.errorBooking = false;
            state.bookedParts = !!state.partsList.length ? state.partsList.filter(item => item.booked) : []
        },
        updatePartList: (state, action) => {
            let changedPart = state.partsList.find(item => item._id === action.payload.id);
            if (changedPart) {
                changedPart.booked = action.payload.booked
                state.partsList = state.partsList.filter(item => item._id !== action.payload.id)
                state.partsList = [...state.partsList, changedPart];
                state.bookedParts = !!state.partsList.length ? state.partsList.filter(item => item.booked) : []
            }
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
