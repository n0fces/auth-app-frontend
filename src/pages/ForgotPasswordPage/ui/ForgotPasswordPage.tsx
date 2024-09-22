import { Page } from '@/widgets/Page';

import { ForgotPasswordForm } from '@/features/ForgotPasswordForm';

import { SignCard } from '@/entities/SignCard';

import styles from './styles.module.scss';

export const ForgotPasswordPage = () => {
	return (
		<Page isCenter className={styles.page}>
			<SignCard
				sign="Set a new password"
				formComp={<ForgotPasswordForm />}
				className={styles.card}
				withGoBackBtn
			/>
		</Page>
	);
};
