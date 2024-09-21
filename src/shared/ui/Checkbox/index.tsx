import { clsx } from 'clsx';
import { InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export const Checkbox = ({ className, label, ...props }: CheckboxProps) => {
	return (
		<label className={clsx(styles.label, className)}>
			<input type="checkbox" className={styles.checkbox} {...props} />
			<span className={styles.checkmark}></span>
			{label}
		</label>
	);
};
