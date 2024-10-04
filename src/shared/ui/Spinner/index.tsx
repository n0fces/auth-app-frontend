import styles from './styles.module.scss';

interface SpinnerProps {
	radius: number;
}

export const Spinner = ({ radius }: SpinnerProps) => {
	return (
		<div
			className={styles.spinner}
			style={{
				width: `${String(2 * radius)}px`,
				height: `${String(2 * radius)}px`,
				borderWidth: `${String(radius * 0.2)}px`,
			}}></div>
	);
};
