import {takeLatest, put, call} from 'redux-saga/effects'
import {meetingActions} from "./slice";
import {fetchMeetingsList} from '../service/meetingService'


export function* getMeetingsList(action){
    try {
        const payload = yield call(fetchMeetingsList, action.payload)
        yield put(meetingActions.fetchMeetingsListSuccess(payload))
    }catch (e){
        yield put(meetingActions.fetchMeetingsListError())
    }
}

export function* meetingCurrentWatcher(){
    yield takeLatest(meetingActions.fetchMeetingsList, getMeetingsList)
}