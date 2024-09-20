import { authApi } from '../api/authApi';
import { UserDTO } from '../types/userDTO';

export class AuthService {
	static async registration(email: string, password: string) {
		return authApi.post('/registration', { email, password });
	}

	static async login(email: string, password: string) {
		return authApi.post<UserDTO>('/login', { email, password });
	}

	static async forgotPassword(email: string) {
		return authApi.post('/forgot-password', {
			email,
		});
	}

	static async resetPassword(
		token: string,
		password: string,
		logoutAllDevices: boolean,
	) {
		return authApi.post('/reset-password', {
			token,
			password,
			logoutAllDevices,
		});
	}

	static async logout() {
		return authApi.post('/logout');
	}

	static async access() {
		return authApi.post('/access');
	}

	static async checkAccess() {
		return authApi.get('/check-access');
	}

	static async getUser() {
		return authApi.get<UserDTO | null>('/get-user');
	}
}
