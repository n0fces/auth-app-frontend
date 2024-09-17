import { Card } from '@/shared/ui/Card';

interface FooterProps {
	className?: string;
}

export const Footer = ({ className }: FooterProps) => {
	return (
		<footer className={className}>
			<Card alignItems="center" justifyContent="center" maxHeight>
				Footer
			</Card>
		</footer>
	);
};
