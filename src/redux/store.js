import {configureStore} from "@reduxjs/toolkit";
import reducer from './slice';
import createSagaMiddleware from 'redux-saga'
import {meetingCurrentWatcher} from "./saga";


const saga = createSagaMiddleware()
const store = configureStore({
    reducer: {
        meetings: reducer
    },middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),

})

saga.run(meetingCurrentWatcher)


export default store