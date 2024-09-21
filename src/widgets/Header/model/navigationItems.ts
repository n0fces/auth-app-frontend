import { routeMap } from '@/shared/config/route-map';
import { useSession } from '@/shared/hooks/useSession';

import { NavigationItem } from '../types';

export const useNavigationItems = () => {
	const context = useSession();

	const navigationItems: NavigationItem[] = [
		{
			to: routeMap.root,
			text: 'Main',
			isAuthOnly: false,
		},
		{
			to: routeMap.signin,
			text: 'Sign in',
			isAuthOnly: Boolean(context?.user),
		},
		{
			to: routeMap.signup,
			text: 'Sign up',
			isAuthOnly: Boolean(context?.user),
		},
		{
			to: routeMap.gallery,
			text: 'Gallery',
			isAuthOnly: !context?.user,
		},
	];

	return navigationItems;
};
