import { AxiosResponse } from 'axios';

import { authApi } from '../api/authApi';
import { UserDTO } from '../types/userDTO';

export const registration = async (email: string, password: string) => {
	return authApi.post('/registration', { email, password });
};

export const login = async (email: string, password: string) => {
	return authApi.post<UserDTO>('/login', { email, password });
};

export const forgotPassword = async (email: string) => {
	return authApi.post('/forgot-password', {
		email,
	});
};

export const resendForgotPassword = async (token: string) => {
	return authApi.post('/resend-forgot-password', {
		token,
	});
};

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

export const logout = async () => {
	return authApi.post('/logout');
};

export const access = async () => {
	return authApi.post('/access');
};

export const checkAccess = async () => {
	return authApi.get('/check-access');
};

export const getUser = async (): Promise<
	AxiosResponse<UserDTO> | undefined
> => {
	return authApi.get<UserDTO>('/get-user');
};
