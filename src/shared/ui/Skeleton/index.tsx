import { clsx } from 'clsx';

interface SkeletonProps {
	className?: string;
	width?: number | string;
	height?: number | string;
	borderRadius?: number | string;
}

export const Skeleton = ({
	className,
	width = 300,
	height = 300,
	borderRadius = 0,
}: SkeletonProps) => {
	return (
		<div
			className={clsx('animation', className)}
			style={{ width, height, borderRadius }}></div>
	);
};
