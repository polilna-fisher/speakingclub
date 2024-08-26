import { configureStore } from "@reduxjs/toolkit";
import meetingReducer from "./meetingSlice";
import partReducer from "./partSlice"
import commonReducer from "./commonSlice"
import userReducer from "./userSlice"
import createSagaMiddleware from "redux-saga";
import { meetingCurrentWatcher } from "./saga";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    meetings: meetingReducer,
    parts: partReducer,
    common: commonReducer,
    user:userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(meetingCurrentWatcher);

export default store;
