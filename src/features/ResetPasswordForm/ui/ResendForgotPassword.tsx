import { AuthService } from '@/shared/services/authService';
import { Button } from '@/shared/ui/Button';
import { useState } from 'react';

interface ResendForgotPasswordProps {
	token: string;
}

export const ResendForgotPassword = ({ token }: ResendForgotPasswordProps) => {
	const [isClicked, setIsClicked] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const onClick = async () => {
		try {
			setIsLoading(true);
			await AuthService.resendForgotPassword(token);
			setIsClicked(true);
		} catch (error) {
			if (error instanceof Error) {
				setErrorMessage(error.message);
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Button
			type={isClicked ? 'button' : 'submit'}
			variant={isClicked ? 'submitted' : isLoading ? 'disabled' : 'submit'}
			disabled={isClicked || isLoading}
			isLoading={isLoading}
			onClick={onClick}>
			{errorMessage || 'Resend a reset password link'}
		</Button>
	);
};
