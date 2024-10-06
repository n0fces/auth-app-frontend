import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { routeMap } from '@/shared/config/route-map';
import { useSession } from '@/shared/hooks/useSession';
import { logout } from '@/shared/services/authService';
import { Button } from '@/shared/ui/Button';

interface LogoutProps {
	className?: string;
}

export const LogoutBtn = ({ className }: LogoutProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const data = useSession();
	const navigate = useNavigate();

	const onLogout = async () => {
		setIsLoading(true);
		await logout();
		data?.setUser(null);
		setIsLoading(false);
		navigate(routeMap.root);
	};

	return data?.user ? (
		<Button
			variant="logout"
			isLoading={isLoading}
			onClick={onLogout}
			className={className}>
			Log out
		</Button>
	) : null;
};
