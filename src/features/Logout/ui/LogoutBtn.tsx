import { useNavigate } from 'react-router-dom';

import { routeMap } from '@/shared/config/route-map';
import { useSession } from '@/shared/hooks/useSession';
import { logout } from '@/shared/services/authService';
import { Button } from '@/shared/ui/Button';

interface LogoutProps {
	className?: string;
}

export const LogoutBtn = ({ className }: LogoutProps) => {
	const data = useSession();
	const navigate = useNavigate();

	const onLogout = async () => {
		await logout();
		data?.setUser(null);
		navigate(routeMap.root);
	};

	return data?.user ? (
		<Button variant="logout" onClick={onLogout} className={className}>
			Log out
		</Button>
	) : null;
};
