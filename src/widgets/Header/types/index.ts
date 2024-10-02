import { routeMap } from '@/shared/config/route-map';

export interface NavigationItem {
	to: (typeof routeMap)[keyof typeof routeMap];
	text: string;
	isActive: boolean;
}
