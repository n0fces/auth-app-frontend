import { useParams } from 'react-router-dom';

import { SignCard } from '@/entities/SignCard';
import { ResetPasswordForm } from '@/features/ResetPasswordForm';
import { Page } from '@/widgets/Page';

import styles from './styles.module.scss';

export const ResetPasswordPage = () => {
	const { token } = useParams();

	return (
		<Page isCenter className={styles.page}>
			<SignCard
				sign="Reset Password"
				formComp={<ResetPasswordForm token={token} />}
				className={styles.card}
			/>
		</Page>
	);
};
