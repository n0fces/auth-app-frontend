import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import { useSession } from '@/shared/hooks/useSession';

import styles from './styles.module.scss';

export function MainLayout() {
	const context = useSession();

	useEffect(() => {
		context?.init();
	}, []);

	return (
		<div className={styles.layout}>
			<Header className={styles.header} />
			<main className={styles.main}>
				<Outlet />
			</main>
			<Footer className={styles.footer} />
		</div>
	);
}
