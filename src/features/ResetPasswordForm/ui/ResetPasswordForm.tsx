import { InputPassword } from '@/entities/InputPassword';
import { Button } from '@/shared/ui/Button';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Text } from '@/shared/ui/Text';
import { useResetPasswordForm } from '../model';

export const ResetPasswordForm = () => {
	const {
		inputPasswordRegister,
		confirmedPasswordRegister,
		handleSubmit,
		formState: { errors, isDirty, isValid },
		isLoading,
		isSubmitted,
	} = useResetPasswordForm();

	const disabled = !isDirty || !isValid;
	return (
		<form className="form" autoComplete="on" onSubmit={handleSubmit}>
			<InputPassword
				placeholder="Set a new password"
				aria-label="Set a new password"
				autoComplete="new-password"
				aria-invalid={errors.password ? 'true' : 'false'}
				{...inputPasswordRegister}
			/>
			{errors.password && (
				<Text role="alert" color="error" size="small">
					{errors.password.message}
				</Text>
			)}
			<InputPassword
				placeholder="Confirm a new password"
				aria-label="Confirm a new password"
				autoComplete="new-password"
				aria-invalid={errors.confirmedPassword ? 'true' : 'false'}
				{...confirmedPasswordRegister}
			/>
			{errors.confirmedPassword && (
				<Text role="alert" color="error" size="small">
					{errors.confirmedPassword.message}
				</Text>
			)}
			<div>
				<Checkbox label="Log out from all devices?" />
			</div>
			<Button
				type={isSubmitted ? 'button' : 'submit'}
				variant={isSubmitted ? 'submitted' : disabled ? 'disabled' : 'submit'}
				disabled={disabled || isSubmitted}
				isLoading={isLoading}>
				Set a new password
			</Button>
			{errors.root && (
				<Text role="alert" color="error" size="small" align="center">
					{errors.root.serverError.message}
				</Text>
			)}
		</form>
	);
};
