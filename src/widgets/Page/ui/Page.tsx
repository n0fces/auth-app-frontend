import { clsx } from 'clsx';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface PageProps {
	children: ReactNode;
	className?: string;
	isCenter?: boolean;
}

export const Page = ({ children, className, isCenter }: PageProps) => {
	return (
		<div
			className={clsx(styles.page, className, {
				[styles.isCenter]: isCenter,
			})}>
			{children}
		</div>
	);
};
