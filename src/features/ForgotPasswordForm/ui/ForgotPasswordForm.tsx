import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';

import { useForgotPasswordForm } from '../model';

export const ForgotPasswordForm = () => {
	const {
		emailRegister,
		handleSubmit,
		formState: { errors, isDirty, isValid },
		isLoading,
		isSubmitted,
	} = useForgotPasswordForm();

	const disabled = !isDirty || !isValid;
	return (
		<form className="form" autoComplete="on" onSubmit={handleSubmit}>
			<Input
				type="email"
				placeholder="Email"
				aria-label="Email"
				autoComplete="email"
				aria-invalid={errors.email ? 'true' : 'false'}
				{...emailRegister}
			/>
			{errors.email && (
				<Text role="alert" color="error" size="small">
					{errors.email.message}
				</Text>
			)}
			<Button
				type={isSubmitted ? 'button' : 'submit'}
				variant={isSubmitted ? 'submitted' : disabled ? 'disabled' : 'submit'}
				disabled={disabled || isSubmitted}
				isLoading={isLoading}>
				Send instructions to current email
			</Button>
			{errors.root && (
				<Text role="alert" color="error" size="small" align="center">
					{errors.root.serverError.message}
				</Text>
			)}
			{isSubmitted && (
				<Text align="center" color="primary">
					We sent a link for you to reset your password. Check it out!
				</Text>
			)}
		</form>
	);
};
