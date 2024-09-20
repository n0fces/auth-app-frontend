import { SignCard } from '@/entities/SignCard';
import { ResetPasswordForm } from '@/features/ResetPasswordForm';
import { Page } from '@/widgets/Page';
import styles from './styles.module.scss';

export const ResetPasswordPage = () => {
	return (
		<Page isCenter className={styles.page}>
			<SignCard
				sign="Reset Password"
				formComp={<ResetPasswordForm />}
				className={styles.card}
			/>
		</Page>
	);
};
