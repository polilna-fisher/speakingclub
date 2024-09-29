import axios from "axios";
import {AuthResponse} from "../models/authReponse";
import {dispatchHelper} from "../redux/store";
import {authActions} from "../redux/authSlice";
export const API_URL = 'http://localhost:5000/api'

const $api = axios.create({
    withCredentials: true,
    baseURL:API_URL

})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config
})

$api.interceptors.response.use(
    (response) => response, // Directly return successful responses.
    async error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; // Mark the request as retried to avoid infinite loops.


            try {
                const refreshToken = localStorage.getItem('refreshToken'); // Retrieve the stored refresh token.

                // Make a request to your auth server to refresh the token.
                const response = await axios.post<AuthResponse>(`${API_URL}/refresh`, { refreshToken }, { withCredentials: true })
                const { accessToken, refreshToken: newRefreshToken } = response.data;

                // Store the new access and refresh tokens.
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', newRefreshToken);

                dispatchHelper(authActions.setTokens({ accessToken: accessToken }));

                $api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

                return $api(originalRequest); // Retry the original request with the new access token.
            } catch (refreshError) {
                // Handle refresh token errors by clearing stored tokens and redirecting to the login page.
                console.error('Token refresh failed:', refreshError);
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                dispatchHelper(authActions.setTokens({ accessToken: undefined }));

                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error); // For all other errors, return the error as is.
    }
);
export default $api