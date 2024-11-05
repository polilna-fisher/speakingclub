import {takeLatest, put, call} from "redux-saga/effects";
import {userActions} from "../userSlice";
import UserService from "../../service/userService";
import {IUser} from "../../models/IUser";
import {AxiosResponse} from "axios";

interface IBookingPartAction {
    "type": "parts/fetchBookingPart",
    "payload": {
        "partId": string,
        "userId": string
    }
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));


export function* getMeSaga(): Generator<any> {
    try {
        yield call(delay, 10)
        const payload = yield call(UserService.fetchMe);

        const me = (payload as AxiosResponse<IUser>).data
        yield put(userActions.setUser(me))
    } catch (e) {
        yield put(userActions.userError());
    }
}

export function* bookingPart(action: IBookingPartAction): Generator<any> {
    try {
        const {partId, userId} = action.payload;
        const payload = yield call(UserService.bookPart, {partId, userId});
        yield put(userActions.setUser(payload));
        yield put(userActions.fetchBookingPartSuccess())
    } catch (e) {
        yield put(userActions.fetchBookingPartError());
    }
}


export function* userCurrentWatcher(): Generator<any> {
    yield takeLatest(userActions.getMe, getMeSaga);
    yield takeLatest(userActions.fetchBookingPart.type, bookingPart);
}
