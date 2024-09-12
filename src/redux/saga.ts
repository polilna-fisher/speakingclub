import { takeLatest, put, call } from "redux-saga/effects";
import { meetingActions } from "./meetingSlice";
import {bookPart, fetchMeetingsList, fetchPartsList} from "../service/meetingService";
import {partActions} from "./partSlice";
import {IMeeting} from "../models/meeting";
import {PayloadAction} from "@reduxjs/toolkit";

interface IBookingPartAction {
  "type": "parts/fetchBookingPart",
  "payload": {
    "id": string,
    "isBooked": boolean
  }
}

export function* getMeetingsList():Generator<any> {
  try {
    const payload = yield call(fetchMeetingsList);
    yield put(meetingActions.fetchMeetingsListSuccess(payload));
  } catch (e) {
    yield put(meetingActions.fetchMeetingsListError());
  }
}

export function* getPartsList():Generator<any>  {
  try {
    const payload = yield call(fetchPartsList);
    yield put(partActions.fetchPartListSuccess(payload));
  } catch (e) {
    yield put(partActions.fetchPartsListError());
  }
}

export function* bookingPart(action:IBookingPartAction):Generator<any>  {
  try {
    const payload = yield call(bookPart, {...action.payload});
    yield put(partActions.updatePartList(payload));
  } catch (e) {
    yield put(partActions.fetchBookingPartError());
  }
}

export function* meetingCurrentWatcher():Generator<any>  {
  yield takeLatest(meetingActions.fetchMeetingsList.type, getMeetingsList);
  yield takeLatest(partActions.fetchPartsList, getPartsList);
  yield takeLatest(partActions.fetchBookingPart, bookingPart);
}
