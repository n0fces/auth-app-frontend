import { AxiosResponse } from 'axios';

import { authApi } from '../api/authApi';
import { UserDTO } from '../types/userDTO';

/**
 * Асинхронная функция, которая отправляет POST-запрос к эндпоинту '/registration'
 * с заполненными email и password.
 * @param {string} email - Email-адрес пользователя, который регистрируется.
 * @param {string} password - The `password` parameter is a string that represents the user's chosen
 * password for registration.
 * @returns Если регистрация проходит успешно, то серверная часть просто устанавливает статус-код 200.
 * Если что-то пошло не так, то сервер отправит ошибку, о которой уведомляется пользователь 
 * через сообщение в форме регистрации.
 */
export const registration = async (email: string, password: string) => {
	return authApi.post('/registration', { email, password });
};

/**
 * The `login` function is an asynchronous function that sends a POST request to the '/login' endpoint
 * with the provided email and password.
 * @param {string} email - Email is a string that represents the user's email address.
 * @param {string} password - The `password` parameter in the `login` function is a string that
 * represents the user's password. It is used as part of the authentication process when a user tries
 * to log in to the system.
 * @returns The `login` function is returning a Promise that resolves to a UserDTO object after making
 * a POST request to the '/login' endpoint with the provided email and password.
 */
export const login = async (email: string, password: string) => {
	return authApi.post<UserDTO>('/login', { email, password });
};

/**
 * The `forgotPassword` function sends a POST request to the '/forgot-password' endpoint with the
 * provided email address.
 * @param {string} email - The `forgotPassword` function is an asynchronous function that takes an
 * email address as a parameter. This function sends a POST request to the `/forgot-password` endpoint
 * of the `authApi` with the provided email address.
 * @returns The `forgotPassword` function is returning a promise that resolves to the result of the
 * `authApi.post` call, which is sending a POST request to the '/forgot-password' endpoint with the
 * provided email address.
 */
export const forgotPassword = async (email: string) => {
	return authApi.post('/forgot-password', {
		email,
	});
};

/**
 * The function `resendForgotPassword` sends a request to resend a forgot password token using the
 * provided token.
 * @param {string} token - The `token` parameter is a string that represents the unique token
 * associated with a user's forgot password request. This token is used to verify the user's identity
 * and allow them to reset their password securely.
 * @returns The `resendForgotPassword` function is returning a promise that resolves to the result of
 * the `authApi.post` call, which is sending a POST request to the '/resend-forgot-password' endpoint
 * with the provided `token`.
 */
export const resendForgotPassword = async (token: string) => {
	return authApi.post('/resend-forgot-password', {
		token,
	});
};

/**
 * The `resetPassword` function sends a POST request to the '/reset-password' endpoint with a token,
 * password, and optional flag to logout from all devices.
 * @param {string} token - A unique token generated for resetting the password.
 * @param {string} password - The `password` parameter is a string that represents the new password
 * that the user wants to set for their account during a password reset process.
 * @param {boolean} [logoutAllDevices] - The `logoutAllDevices` parameter is a boolean flag that
 * indicates whether the user wants to log out from all devices after resetting the password. If
 * `logoutAllDevices` is set to `true`, the user will be logged out from all active sessions on
 * different devices. If it is set to `
 * @returns The `resetPassword` function is returning a promise that makes a POST request to the
 * '/reset-password' endpoint with the provided `token`, `password`, and optional `logoutAllDevices`
 * parameters.
 */
export const resetPassword = async (
	token: string,
	password: string,
	logoutAllDevices?: boolean,
) => {
	return authApi.post('/reset-password', {
		token,
		password,
		logoutAllDevices,
	});
};

/**
 * The `logout` function sends a POST request to the `/logout` endpoint of the `authApi`.
 * @returns The `logout` function is returning a promise that resolves to the result of the
 * `authApi.post('/logout')` call.
 */
export const logout = async () => {
	return authApi.post('/logout');
};

/**
 * The function `access` makes an asynchronous POST request to the `/access` endpoint using the
 * `authApi`.
 * @returns The `access` function is being returned, which is an asynchronous function that makes a
 * POST request to the `/access` endpoint using the `authApi`.
 */
export const access = async () => {
	return authApi.post('/access');
};

/**
 * Асинхронная функция для запроса состояния токена доступа.
 * @returns Если сервер возвращает статус-код 200, то все вернется к выполнению изначального запроса.
 * Если сервер ответил ошибкой, то дальше будет отрабавать логика в interceptor.response по обновлению
 * токена или logout (зависит от серверной ошибки)
 */
export const checkAccess = async () => {
	return authApi.get('/check-access');
};

/**
 * The function `getUser` makes an asynchronous request to the server to fetch user data using Axios
 * and returns a Promise with the response containing UserDTO or undefined.
 * @returns The `getUser` function is returning a Promise that resolves to an AxiosResponse containing
 * a UserDTO object, or undefined if the request fails.
 */
export const getUser = async (): Promise<
	AxiosResponse<UserDTO> | undefined
> => {
	return authApi.get<UserDTO>('/get-user');
};
