import { clsx } from 'clsx';
import { InputHTMLAttributes, forwardRef } from 'react';

import styles from './styles.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ fullWidth, className, ...props }, ref) => {
		return (
			<input
				className={clsx(styles.input, className, {
					[styles.fullWidth]: fullWidth,
				})}
				ref={ref}
				{...props}
			/>
		);
	},
);
