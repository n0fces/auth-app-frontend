import { ReactNode } from 'react';
import styles from './styles.module.scss';
import { Title } from '@/shared/ui/Title';
import { Card } from '@/shared/ui/Card';

interface SignCardProps {
	formComp: ReactNode;
	oauthComp: ReactNode;
	sign: 'Sign In' | 'Sign Up';
}

export const SignCard = ({ formComp, oauthComp, sign }: SignCardProps) => {
	return (
		<Card
			direction="column"
			alignItems="center"
			justifyContent="center"
			className={styles.signCard}>
			<Title>{sign}</Title>
			<div>{formComp}</div>
			<div className={styles.breakLine}>
				<span>Or</span>
			</div>
			{/* Это просто будет контейнером для фичей с oauth2.0 */}
			<div>{oauthComp}</div>
		</Card>
	);
};
