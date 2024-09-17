import { Button } from '@/shared/ui/Button';
import styles from './styles.module.scss';
import { Icon } from '@/shared/ui/Icon';
import { clsx } from 'clsx';

export const Oauth2 = () => {
	return (
		<div className={styles.oauth2}>
			<Button variant="facebook" className={styles.button}>
				<Icon name="facebook" className={clsx(styles.icon, styles.facebook)} />
				Login with Facebook
			</Button>
			<Button variant="google" className={styles.button}>
				<Icon name="google" className={styles.icon} />
				Login with Google
			</Button>
		</div>
	);
};
