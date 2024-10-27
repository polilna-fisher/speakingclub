import {call, put, takeLatest} from "redux-saga/effects";
import {authActions} from "../authSlice";
import AuthService from "../../service/authService";
import {AxiosResponse} from "axios";
import {userActions} from "../userSlice";
import {showToast} from "../../utils/toast";
import {ToastType} from "../toastSlice";

interface ILoginSaga {
    payload: { email: string, password: string , name: string, country?: string, about?: string, role: string, link: string };
}

export function* registerSaga(action: ILoginSaga): Generator<any> {
    try {
        const {email, password, name, country, about, role} = action.payload
        const response = yield call(AuthService.registration, email, password, name, country, about, role)
        const responseData = (response as AxiosResponse).data;

        localStorage.setItem('accessToken', responseData.accessToken)
        localStorage.setItem('refreshToken', responseData.refreshToken)

        yield put(authActions.setTokens({
            accessToken: responseData.accessToken,
        }));
    } catch (e) {
        const error = e as any

        yield call(showToast, error.response.data.message, {type: ToastType.ERROR})
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
        yield put(authActions.authenticated())
    } catch (e) {
        const error = e as any
        yield put(authActions.error())
        yield call(showToast, error.response.data.message, {type: ToastType.ERROR})
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

        yield put(userActions.setUser(null))

    } catch (e) {
        const error = e as any

        yield call(showToast, error.response.data.message, {type: ToastType.ERROR})
    }
}

export function* resetPasswordSaga(action: ILoginSaga): Generator<any> {
    try {
        const {email} = action.payload
        const response = yield call(AuthService.resetPassword, email)
        const responseData = (response as AxiosResponse).data;
    } catch (e) {
        const error = e as any

        yield call(showToast, error.response.data.message, {type: ToastType.ERROR})
    }
}

export function* setPasswordSaga(action: ILoginSaga): Generator<any> {
    try {
        const {link, password} = action.payload
        const response = yield call(AuthService.setPassword, link, password)
        const responseData = (response as AxiosResponse).data;
    } catch (e) {
        const error = e as any

        yield call(showToast, error.response.data.message, {type: ToastType.ERROR})
    }
}

export function* authSagaWatcher(): Generator<any> {
    yield takeLatest(authActions.register, registerSaga);
    yield takeLatest(authActions.loading, loginSaga);
    yield takeLatest(authActions.logout, logoutSaga);
    yield takeLatest(authActions.resetPassword, resetPasswordSaga);
    yield takeLatest(authActions.setPassword, setPasswordSaga);
}