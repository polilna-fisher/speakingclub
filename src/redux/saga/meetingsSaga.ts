import {takeLatest, put, call} from "redux-saga/effects";
import {meetingActions} from "../meetingSlice";
import {fetchMeetingsList} from "../../service/meetingService";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));



export function* getMeetingsList(): Generator<any> {
    try {
        const payload = yield call(fetchMeetingsList);
        yield put(meetingActions.fetchMeetingsListSuccess(payload));
    } catch (e) {
        yield put(meetingActions.fetchMeetingsListError());
    }
}


export function* meetingCurrentWatcher(): Generator<any> {
    yield takeLatest(meetingActions.fetchMeetingsList, getMeetingsList);
}
