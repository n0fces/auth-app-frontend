import { LogoutBtn } from '@/features/Logout';

import { useSession } from '@/shared/hooks/useSession';
import { Card } from '@/shared/ui/Card';

import { NavigationItems } from './NavigationItems';
import styles from './styles.module.scss';

interface HeaderProps {
	className?: string;
}

export const Header = ({ className }: HeaderProps) => {
	const context = useSession();

	return (
		!context?.isLoading && (
			<header className={className}>
				<Card
					direction="column"
					className={styles.header}
					maxWidth
					alignItems="center">
					<div className={styles.navigate}>
						<NavigationItems />
					</div>
					<LogoutBtn className={styles.logout} />
				</Card>
			</header>
		)
	);
};
