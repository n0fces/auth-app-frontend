import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { InputHTMLAttributes } from 'react';

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
