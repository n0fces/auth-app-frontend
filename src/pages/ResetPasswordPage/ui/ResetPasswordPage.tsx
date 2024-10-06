import { useParams } from 'react-router-dom';

import { Page } from '@/widgets/Page';

import { ResetPasswordForm } from '@/features/ResetPasswordForm';

import { FormCard } from '@/entities/FormCard';

import styles from './styles.module.scss';

export const ResetPasswordPage = () => {
	const { token } = useParams();

	return (
		<Page isCenter className={styles.page}>
			<FormCard
				sign="Reset Password"
				formComp={<ResetPasswordForm token={token} />}
				className={styles.card}
			/>
		</Page>
	);
};
