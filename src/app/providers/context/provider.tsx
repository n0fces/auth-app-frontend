import { createContext, useEffect, useState } from 'react';

import { AuthService } from '@/shared/services/authService';
import { UserDTO } from '@/shared/types/userDTO';

interface UserContextProps {
	user: UserDTO | null;
	// isLoading: boolean;
	setUser: React.Dispatch<React.SetStateAction<UserDTO | null>>;
}

export const UserContext = createContext<UserContextProps | null>(null);

interface UserProviderProps {
	children: React.ReactNode;
}

const fetchUser = async () => await AuthService.getUser();

export const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState<UserDTO | null>(null);
	// const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		// setIsLoading(true);
		fetchUser().then((response) => {
			const res = response?.data;
			if (res) setUser(res);
		});
		// setIsLoading(false);
	}, []);

	const value = {
		user,
		// isLoading,
		setUser,
	};

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
