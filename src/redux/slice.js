import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loadingMeetings: true,
    errorMeetings: false,
    meetingsList: [],
    loadingParts: true,
    errorParts: false,
    partsList: []
}

export const meetingSlice = createSlice(
    {
        name: 'meetings',
        initialState,
        reducers: {
            fetchMeetingsList: (state) => {
                state.loadingMeetings = true;
                state.errorMeetings = false
            },
            fetchMeetingsListSuccess: (state, action) => {
                state.loadingMeetings = false;
                state.errorMeetings = false;
                state.meetingsList = action.payload
            },
            fetchMeetingsListError: (state) => {
                state.loadingMeetings = false;
                state.errorMeetings = true
            },
            fetchPartsList: (state) => {
                state.loadingParts = true;
                state.errorParts = false
            },
            fetchPartListSuccess: (state, action) => {
                state.loadingPart = false;
                state.errorParts = false;
                state.partsList = action.payload
            },
            fetchPartsListError: (state) => {
                state.loadingParts = false;
                state.errorParts = true
            }
        }
    }
)


export default meetingSlice.reducer

export const meetingActions = meetingSlice.actions