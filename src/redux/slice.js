import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loadingMeetings: true,
    errorMeetings: false,
    meetingsList: []
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
        }
    }
)


export default meetingSlice.reducer

export const meetingActions = meetingSlice.actions