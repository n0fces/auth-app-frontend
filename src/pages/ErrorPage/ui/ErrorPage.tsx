import { Link, useRouteError } from 'react-router-dom';

import { routeMap } from '@/shared/config/route-map';
import { Page } from '@/widgets/Page';

import styles from './styles.module.scss';

export const ErrorPage = () => {
	const error = useRouteError() as Error;

	return (
		<Page isCenter className={styles.page}>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.message}</i>
				<br />
				<Link to={routeMap.root}>Go home page</Link>
			</p>
		</Page>
	);
};
