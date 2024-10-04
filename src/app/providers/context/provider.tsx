import { createContext, useState } from 'react';

import { getUser } from '@/shared/services/authService';
import { UserDTO } from '@/shared/types/userDTO';

interface UserContextProps {
	user: UserDTO | null;
	isLoading: boolean;
	setUser: React.Dispatch<React.SetStateAction<UserDTO | null>>;
	init: () => void;
}

export const UserContext = createContext<UserContextProps | null>(null);

interface UserProviderProps {
	children: React.ReactNode;
}

const fetchUser = async () => await getUser();

export const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState<UserDTO | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const init = () => {
		void fetchUser().then((response) => {
			const res = response?.data;
			if (res) setUser(res);
			setIsLoading(false);
		});
	};

	const value = {
		user,
		isLoading,
		setUser,
		init,
	};

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
