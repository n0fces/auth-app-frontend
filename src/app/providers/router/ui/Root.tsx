import { Outlet } from 'react-router-dom';

import styles from './styles.module.scss';

export const Root = () => {
	return (
		<div className={styles.app}>
			<Outlet />
		</div>
	);
};
