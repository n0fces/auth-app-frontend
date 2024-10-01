import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { useSession } from '../hooks/useSession';
import { ErrorResponseData } from '../types/errorResponseData';

export const SERVER_URL = import.meta.env.VITE_AUTH_SERVER_URL;

export const authApi = axios.create({
	// к каждому запросу куки будут цепляться автоматически
	// за счет того, что я храню токены в cookies, то мне не нужно
	// писать interceptоры request, чтобы цеплять access token
	withCredentials: true,
	baseURL: `${SERVER_URL}/auth`,
});

// интерцептер, который нужен, чтобы обновлять аксесс токен, если рефреш еще норм
authApi.interceptors.response.use(
	// колбэк, который будет срабатывать, если сервер проверил наш токен доступа и он оказался нормальным
	// ! скорее всего, колбэк на положительный исход даже не нужен
	(config) => {
		// если аксесс токен живой, то просто вернем конфиг
		return config;
	},
	// токен доступа оказался просроченным
	async (error) => {
		const serverError = error as AxiosError<ErrorResponseData>;
		// сохраняем исходный запрос пользователя даже в том случае, если аксесс токен просрочился. Когда мы обновим аксесс токен, то необходимо все равно сделать запрос пользователя, чтобы он вообще не заметил, что что-то там внутри произошло
		const originalRequest = serverError.config as AxiosRequestConfig;

		if (serverError.status === 401) {
			// * если ошибка соответстует тому, что access токен именно протух, то мы будем пытаться его обновить
			if (serverError.response?.data.name === 'AccessTokenExpired') {
				try {
					await axios.get(`${SERVER_URL}/access`, {
						withCredentials: true,
					});
					return authApi.request(originalRequest);
				} catch (error) {
					// ! костыльное решение
					const serverError = error as AxiosError<ErrorResponseData>;
					// ! на клиенте буду обрабатывать только RefreshTokenExpired
					// ! сервер сам обработает
					if (serverError.response?.data.name === 'RefreshTokenExpired') {
						// * если протухший рефреш токен и пользователь есть на фронте (в контексте или сторе),
						// * то бесшовно обновляем два токена
						const data = useSession();
						if (data?.user) {
							await axios.get(`${SERVER_URL}/refresh`, {
								withCredentials: true,
							});
							return authApi.request(originalRequest);
						}
					} else if (
						serverError.response?.data.name === 'RefreshTokenInvalid'
					) {
						// ! сделаем logout. Отдельно на сервере будет еще реализована доп логика по обработке этого случая
						// ! на сервере необходимо предусмотреть случаи, связанные также с невалидностью refresh токена
						// ! возможно что-то связанное с блэк листами
						// ! очистить все возможные куки, которые устанавливает сервер
						// ! залогировать это дело
						return await axios.get(`${SERVER_URL}/logout`, {
							withCredentials: true,
						});
					}
				}
			} else if (serverError.response?.data.name === 'AccessTokenInvalid') {
				// * если access токен невалидный, то мы будем пытаться его удалить и залогиниться заново
				return await axios.get(`${SERVER_URL}/logout`, {
					withCredentials: true,
				});
			}
		}

		if (serverError.response?.data.name === 'UnauthorizedError') {
			// Не бросаем ошибку, скрываем её
			return Promise.resolve();
		} else {
			// Все остальные ошибки передаем дальше для обработки
			return Promise.reject(error);
		}
	},
);
