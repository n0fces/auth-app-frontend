import axios from 'axios';

import { AuthService } from '../services/authService';

const DATA_API_URL = import.meta.env.VITE_DATA_API_URL;
const DOG_API_ACCESS_KEY = import.meta.env.VITE_DOG_API_ACCESS_KEY;

export const dataApi = axios.create({
	baseURL: DATA_API_URL,
	headers: {
		'x-api-key': DOG_API_ACCESS_KEY,
	},
});

// перед каждым запросом за данными со стороннего api будет осуществляться запрос на проверку того, не просрочен ли токен доступа
dataApi.interceptors.request.use(
	async (config) => {
		await AuthService.checkAccess();
		return config;
	},
	(error) => {
		throw new Error(error);
	},
);
