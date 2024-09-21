import { clsx } from 'clsx';
import { ButtonHTMLAttributes } from 'react';

import { Spinner } from '../Spinner';
import styles from './styles.module.scss';

type ButtonVariants =
	| 'submit'
	| 'facebook'
	| 'google'
	| 'submitted'
	| 'logout'
	| 'disabled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariants;
	isLoading?: boolean;
}

export const Button = ({
	children,
	variant,
	className,
	isLoading = false,
	disabled,
	...props
}: ButtonProps) => {
	return (
		<button
			className={clsx(styles.button, variant && styles[variant], className)}
			disabled={disabled || isLoading}
			{...props}>
			{isLoading ? <Spinner radius={8} /> : children}
		</button>
	);
};
