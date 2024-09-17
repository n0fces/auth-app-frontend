import { HTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { clsx } from 'clsx';

type TextSize = 'small' | 'regular';
type ColorType = 'primary' | 'secondary' | 'error';
type TextAlign = 'left' | 'center' | 'right';

interface TextProps extends HTMLAttributes<HTMLDivElement> {
	size?: TextSize;
	color?: ColorType;
	align?: TextAlign;
}

export const Text = ({
	children,
	className,
	size = 'regular',
	color = 'primary',
	align = 'left',
}: TextProps) => {
	return (
		<div
			className={clsx(styles[size], styles[color], styles[align], className)}>
			{children}
		</div>
	);
};
