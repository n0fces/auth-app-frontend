import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Title } from '@/shared/ui/Title';

import styles from './styles.module.scss';

interface FormCardProps {
	sign: string;
	formComp: ReactNode;
	oauthComp?: ReactNode;
	withGoBackBtn?: boolean;
	className?: string;
}

export const FormCard = ({
	formComp,
	oauthComp,
	sign,
	withGoBackBtn = false,
	className,
}: FormCardProps) => {
	const navigate = useNavigate();

	return (
		<Card
			direction="column"
			alignItems="center"
			justifyContent="center"
			className={clsx(styles.signCard, className)}>
			{withGoBackBtn && (
				<Button
					onClick={() => {
						navigate(-1);
					}}
					className={styles.goBack}>
					Назад
				</Button>
			)}
			<div className={styles.signCardCnt}>
				<Title size="medium">{sign}</Title>
				<div>{formComp}</div>
				{oauthComp && (
					<>
						<div className={styles.breakLine}>
							<span>Or</span>
						</div>
						{/* Это просто будет контейнером для фичей с oauth2.0 */}
						<div>{oauthComp}</div>
					</>
				)}
			</div>
		</Card>
	);
};
