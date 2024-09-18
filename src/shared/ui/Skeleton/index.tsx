import { clsx } from 'clsx';

interface SkeletonProps {
	className?: string;
	width?: number;
	height?: number;
	borderRadius?: number;
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
