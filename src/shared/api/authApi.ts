/* eslint-disable @typescript-eslint/return-await -- только хотим повторно возобновить изначальный запрос */
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { useSession } from '../hooks/useSession';
import { ErrorResponseData } from '../types/errorResponseData';

export const SERVER_URL = import.meta.env.VITE_AUTH_SERVER_URL;

export const authApi = axios.create({
	withCredentials: true,
	baseURL: `${SERVER_URL}/auth`,
});

authApi.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error) => {
		const serverError = error as AxiosError<ErrorResponseData>;
		// сохраняем исходный запрос пользователя даже в том случае, если аксесс токен просрочился.
		// Когда мы обновим аксесс токен, то необходимо все равно сделать запрос пользователя,
		// чтобы он вообще не заметил, что что-то там внутри произошло
		const originalRequest = serverError.config as AxiosRequestConfig;

		if (serverError.status === 401) {
			//  если ошибка соответстует тому, что access токен именно протух, то мы будем пытаться его обновить
			if (serverError.response?.data.name === 'AccessTokenExpired') {
				try {
					await axios.get(`${SERVER_URL}/auth/access`, {
						withCredentials: true,
					});
					return authApi.request(originalRequest);
				} catch (error) {
					const serverError = error as AxiosError<ErrorResponseData>;

					if (serverError.response?.data.name === 'RefreshTokenExpired') {
						//  если протухший рефреш токен и пользователь есть на фронте (в контексте или сторе),
						//  то бесшовно обновляем два токена
						const data = useSession();
						if (data?.user) {
							await axios.get(`${SERVER_URL}/auth/refresh`, {
								withCredentials: true,
							});
							return authApi.request(originalRequest);
						}
					} else if (
						serverError.response?.data.name === 'RefreshTokenInvalid'
					) {
						// logout. Отдельно на сервере будет еще реализована доп логика по обработке этого случая
						return await axios.get(`${SERVER_URL}/auth/logout`, {
							withCredentials: true,
						});
					}
				}
			} else if (serverError.response?.data.name === 'AccessTokenInvalid') {
				//  если access токен невалидный, то тоже происходит logout
				return await axios.get(`${SERVER_URL}/auth/logout`, {
					withCredentials: true,
				});
			}
		}

		if (serverError.response?.data.name === 'UnauthorizedError') {
			// Не бросаем ошибку, скрываем её
			return Promise.resolve();
		} else {
			// Все остальные ошибки передаем дальше для обработки
			// eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
			return Promise.reject(error);
		}
	},
);
