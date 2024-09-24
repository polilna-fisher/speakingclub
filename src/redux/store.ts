import { configureStore } from "@reduxjs/toolkit";
import meetingReducer from "./meetingSlice";
import partReducer from "./partSlice"
import commonReducer from "./commonSlice"
import userReducer from "./userSlice"
import createSagaMiddleware from "redux-saga";
import { meetingCurrentWatcher } from "./saga";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {useContext} from "react";

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

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;
