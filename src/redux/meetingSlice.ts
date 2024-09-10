import { createSlice } from "@reduxjs/toolkit";
import {IMeeting} from "../interfaces/meeting";

interface IInitialMeetingState{
  loadingMeetings: boolean,
  errorMeetings: boolean,
  meetingsList: IMeeting[] | [],
  newMeeting: IMeeting | null,
  isMeetingReceived: boolean,
}

const initialState:IInitialMeetingState = {
  loadingMeetings: true,
  errorMeetings: false,
  meetingsList: [],
  newMeeting: null,
  isMeetingReceived: false,
};

export const meetingSlice = createSlice({
  name: "meetings",
  initialState,
  reducers: {
    fetchMeetingsList: (state) => {
      state.loadingMeetings = true;
      state.errorMeetings = false;
    },
    fetchMeetingsListSuccess: (state, action) => {
      state.loadingMeetings = false;
      state.errorMeetings = false;
      state.meetingsList = action.payload;
    },
    fetchMeetingsListError: (state) => {
      state.loadingMeetings = false;
      state.errorMeetings = true;
    },
    fetchNewMeeting: (state, action) => {
      state.newMeeting = action.payload;
    },
    receiveMeeting: (state, action) => {
      state.isMeetingReceived = action.payload;
    },
  },
});

export default meetingSlice.reducer;

export const meetingActions = meetingSlice.actions;
