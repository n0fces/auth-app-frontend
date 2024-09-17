import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { Input, InputProps } from '@/shared/ui/Input';
import { forwardRef, MouseEvent, useState } from 'react';
import styles from './styles.module.scss';

type InputPasswordProps = Omit<InputProps, 'type'>;

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
	(props, ref) => {
		const [shownPassword, setShownPassword] = useState(false);

		const toggleShownPassword = (
			event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
		) => {
			event.preventDefault();
			setShownPassword(!shownPassword);
		};

		return (
			<div className={styles.inputCnt}>
				<Input
					type={shownPassword ? 'text' : 'password'}
					className={styles.inputPass}
					ref={ref}
					{...props}
				/>
				<Button
					onClick={(e) => toggleShownPassword(e)}
					className={styles.eyeBtn}>
					{shownPassword ? (
						<Icon name="eye" className={styles.eye} />
					) : (
						<Icon name="crossed-eye" className={styles.crossedEye} />
					)}
				</Button>
			</div>
		);
	},
);
