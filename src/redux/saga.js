import { takeLatest, put, call } from "redux-saga/effects";
import { meetingActions } from "./meetingSlice";
import { fetchMeetingsList, fetchPartsList } from "../service/meetingService";
import {partActions} from "./partSlice";

export function* getMeetingsList(action) {
  try {
    const payload = yield call(fetchMeetingsList, action.payload);
    yield put(meetingActions.fetchMeetingsListSuccess(payload));
  } catch (e) {
    yield put(meetingActions.fetchMeetingsListError());
  }
}
export function* getPartsList(action) {
  try {
    const payload = yield call(fetchPartsList, action.payload);
    yield put(partActions.fetchPartListSuccess(payload));
  } catch (e) {
    yield put(partActions.fetchPartsListError());
  }
}

export function* meetingCurrentWatcher() {
  yield takeLatest(meetingActions.fetchMeetingsList, getMeetingsList);
  yield takeLatest(partActions.fetchPartsList, getPartsList);
}
