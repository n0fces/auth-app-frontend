import { IconName } from '@/shared/types/iconNames';
import { SVGProps } from 'react';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
	name: IconName;
}

export const Icon = ({ name, className, ...props }: IconProps) => {
	return (
		<svg aria-hidden className={className} focusable="false" {...props}>
			<use xlinkHref={`/sprite.svg#${name}`} />
		</svg>
	);
};
