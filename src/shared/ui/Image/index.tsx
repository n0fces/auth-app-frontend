import { clsx } from 'clsx';
import { ImgHTMLAttributes } from 'react';
import styles from './styles.module.scss';

export const Image = ({
	src,
	className,
	width,
	height,
	...props
}: ImgHTMLAttributes<HTMLImageElement>) => {
	return src ? (
		<div
			style={!className ? { width, height } : undefined}
			className={clsx('animation', className)}>
			<img
				className={styles.image}
				src={src}
				width={width}
				height={height}
				loading="lazy"
				{...props}
			/>
		</div>
	) : (
		<div
			style={!className ? { width: width, height: height } : undefined}
			className={clsx(styles.imageCap, className)}
		/>
	);
};
