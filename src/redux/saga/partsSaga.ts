import {takeLatest, put, call} from "redux-saga/effects";
import { fetchPartsList} from "../../service/meetingService";
import {partActions} from "../partSlice";


export function* getPartsList(): Generator<any> {
    try {
        const payload = yield call(fetchPartsList);
        yield put(partActions.fetchPartListSuccess(payload));
    } catch (e) {
        yield put(partActions.fetchPartsListError());
    }
}



export function* partCurrentWatcher(): Generator<any> {
    yield takeLatest(partActions.fetchPartsList, getPartsList);
}
