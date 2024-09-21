import { clsx } from 'clsx';
import { HTMLAttributes } from 'react';

import styles from './styles.module.scss';

type AlignItemsType = 'left' | 'center' | 'right';
type JustifyContentType =
	| 'left'
	| 'center'
	| 'right'
	| 'spaceBetween'
	| 'spaceAround';

type BaseProps = Pick<HTMLAttributes<HTMLDivElement>, 'children' | 'className'>;

interface CardProps extends BaseProps {
	direction?: 'row' | 'column';
	alignItems?: AlignItemsType;
	justifyContent?: JustifyContentType;
	maxWidth?: boolean;
	maxHeight?: boolean;
}

export const Card = ({
	children,
	className,
	direction = 'row',
	alignItems = 'left',
	justifyContent = 'left',
	maxWidth,
	maxHeight,
}: CardProps) => {
	return (
		<div
			className={clsx(
				styles.card,
				styles[`direction_${direction}`],
				styles[`align_${alignItems}`],
				styles[`justify_${justifyContent}`],
				className,
				{
					[styles.maxWidth]: maxWidth,
					[styles.maxHeight]: maxHeight,
				},
			)}>
			{children}
		</div>
	);
};
