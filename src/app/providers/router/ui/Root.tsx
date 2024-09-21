import { Outlet } from 'react-router-dom';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import styles from './styles.module.scss';

export function Root() {
	return (
		<div className={styles.app}>
			<Header className={styles.header} />
			<main className={styles.main}>
				<Outlet />
			</main>
			<Footer className={styles.footer} />
		</div>
	);
}
