import { Skeleton } from '@/shared/ui/Skeleton';

interface FallbackProps {
	amount?: number;
}

export const Fallback = ({ amount = 3 }: FallbackProps) => {
	return [...Array(amount)].map(() => (
		<Skeleton width={200} height={200} borderRadius={16} />
	));
};
