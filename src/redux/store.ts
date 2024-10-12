import {configureStore} from "@reduxjs/toolkit";
import meetingReducer from "./meetingSlice";
import partReducer from "./partSlice"
import commonReducer from "./commonSlice"
import userReducer from "./userSlice"
import authSlice from "./authSlice";
import toastSlice from "./toastSlice";
import createSagaMiddleware from "redux-saga";
import {meetingCurrentWatcher} from "./saga/saga";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {authSagaWatcher} from "./saga/authSaga";
import {all} from "redux-saga/effects";

const saga = createSagaMiddleware();
const store = configureStore({
    reducer: {
        meetings: meetingReducer,
        parts: partReducer,
        common: commonReducer,
        user: userReducer,
        auth: authSlice,
        toast: toastSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

function* rootSaga() {
    yield all(
        [
            authSagaWatcher(),
            meetingCurrentWatcher()
        ]
    )
}

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const dispatchHelper = store.dispatch

export default store;
