import { routeMap } from '@/shared/config/route-map';
import { useSession } from '@/shared/hooks/useSession';

import { NavigationItem } from '../types';

export const useNavigationItems = () => {
	const context = useSession();

	const navigationItems: NavigationItem[] = [
		{
			to: routeMap.root,
			text: 'Main',
			// этот роут всегда будет доступен
			isActive: true,
		},
		{
			to: routeMap.signin,
			text: 'Sign in',
			// этот роут будет доступен только когда пользователь не авторизован
			isActive: !context?.user,
		},
		{
			to: routeMap.signup,
			text: 'Sign up',
			// этот роут будет доступен только когда пользователь не авторизован
			isActive: !context?.user,
		},
		{
			to: routeMap.gallery,
			text: 'Gallery',
			// этот роут будет доступен только когда пользователь авторизован
			isActive: !!context?.user,
		},
	];

	return navigationItems;
};
