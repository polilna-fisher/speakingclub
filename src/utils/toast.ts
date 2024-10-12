import {dispatchHelper} from "../redux/store";
import {toastActions, ToastType} from "../redux/toastSlice";

interface IShowToastParams {
    timeout?: number;
    type?: ToastType;
}

const DEFAULT_TYPE = ToastType.INFO
const DEFAULT_TIMEOUT = 3000

export const showToast = (message: string, params?: IShowToastParams) => {
    dispatchHelper(toastActions.showToast({ message, type: params?.type || DEFAULT_TYPE }));

    const timeout = setTimeout(() => {
        hideToast()
    }, params?.timeout || DEFAULT_TIMEOUT);

    dispatchHelper(toastActions.setUpTimeout(timeout));
}

export const hideToast = () => {
    dispatchHelper(toastActions.resetToast());

}