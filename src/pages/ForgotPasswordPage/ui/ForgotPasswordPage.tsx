import { Page } from '@/widgets/Page';

import { ForgotPasswordForm } from '@/features/ForgotPasswordForm';

import { FormCard } from '@/entities/FormCard';

import styles from './styles.module.scss';

export const ForgotPasswordPage = () => {
	return (
		<Page isCenter className={styles.page}>
			<FormCard
				sign="Set a new password"
				formComp={<ForgotPasswordForm />}
				className={styles.card}
				withGoBackBtn
			/>
		</Page>
	);
};
