import {call, put, takeLatest} from "redux-saga/effects";
import {authActions} from "../authSlice";
import AuthService from "../../service/authService";
import {AxiosResponse} from "axios";
import {userActions} from "../userSlice";

interface ILoginSaga {
    payload: { email: string, password: string }
}

export function* registerSaga(action: ILoginSaga): Generator<any> {
    try {
        const {email, password} = action.payload
        const response = yield call(AuthService.registration, email, password)
        const responseData = (response as AxiosResponse).data;

        localStorage.setItem('accessToken', responseData.accessToken)
        localStorage.setItem('refreshToken', responseData.refreshToken)

        yield put(authActions.setTokens({
            accessToken: responseData.accessToken,
        }));
    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
        } else {
            console.error('An unexpected error occurred:', e);
        }
    }
}

export function* loginSaga(action: ILoginSaga): Generator<any> {
    try {
        const {email, password} = action.payload
        const response = yield call(AuthService.login, email, password)
        const responseData = (response as AxiosResponse).data;

        localStorage.setItem('accessToken', responseData.accessToken)
        localStorage.setItem('refreshToken', responseData.refreshToken)

        yield put(authActions.setTokens({
            accessToken: responseData.accessToken,
        }));
    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
        } else {
            console.error('An unexpected error occurred:', e);
        }
    }
}

export function* logoutSaga(): Generator<any> {
    try {
        yield call(AuthService.logout);

        yield put(authActions.setTokens({
            accessToken: undefined,
        }));

        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')

        yield userActions.setUser({})
    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
        } else {
            console.error('An unexpected error occurred:', e);
        }
    }
}

export function* authSagaWatcher(): Generator<any> {
    yield takeLatest(authActions.register, registerSaga);
    yield takeLatest(authActions.login, loginSaga);
    yield takeLatest(authActions.logout, logoutSaga);
}