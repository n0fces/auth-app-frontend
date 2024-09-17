import { Link } from 'react-router-dom';
import { useNavigationItems } from '../model/navigationItems';

export const NavigationItems = () => {
	const navigationItems = useNavigationItems();
	return navigationItems.map(({ to, isAuthOnly, text }, idx) =>
		!isAuthOnly ? (
			<Link to={to} key={idx}>
				{text}
			</Link>
		) : null,
	);
};
