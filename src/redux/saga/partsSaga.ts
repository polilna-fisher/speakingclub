import {takeLatest, put, call} from "redux-saga/effects";
import { fetchPartsList, getPartsInfo} from "../../service/meetingService";
import {partActions} from "../partSlice";
import {meetingActions} from "../meetingSlice";
import {getMeetingsList} from "./meetingsSaga";
import {IPart} from "../../models/IPart";

interface IBookingPartAction {
    "type": "parts/fetchBookingPart",
    "payload": {
        "ids": Array<string>,
    }
}

interface IGetPartsAction {
    "type": "parts/fetchBookingPart",
    "payload":  Array<string>
}

export function* getBookedPartsInfo(action: IGetPartsAction): Generator<any> {
    try {
        const partIds = action.payload
        const payload = yield call(getPartsInfo, partIds)

        yield put(partActions.partsInfoFetched(payload));
    } catch (e) {
        yield put(partActions.errorPartsInfo());
    }
}



export function* getPartsList(): Generator<any> {
    try {
        const payload = yield call(fetchPartsList);
        yield put(partActions.fetchPartListSuccess(payload));
    } catch (e) {
        yield put(partActions.fetchPartsListError());
    }
}



export function* partCurrentWatcher(): Generator<any> {
    yield takeLatest(partActions.fetchPartsInfo.type, getBookedPartsInfo);
    yield takeLatest(partActions.fetchPartsList, getPartsList);
}
