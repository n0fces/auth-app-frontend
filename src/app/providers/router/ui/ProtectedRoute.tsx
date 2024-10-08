import { Navigate, Outlet } from 'react-router-dom';

import { routeMap } from '@/shared/config/route-map';
import { useSession } from '@/shared/hooks/useSession';

interface ProtectedRouteProps {
	isAuthOnly?: boolean;
}

export const ProtectedRoute = ({ isAuthOnly = true }: ProtectedRouteProps) => {
	const data = useSession();
	const conditional = isAuthOnly ? !data?.user : data?.user;
	return conditional ? <Navigate to={routeMap.root} /> : <Outlet />;
};
