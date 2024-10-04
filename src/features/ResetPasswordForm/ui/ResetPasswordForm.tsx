import { Link } from 'react-router-dom';

import { InputPassword } from '@/entities/InputPassword';

import { routeMap } from '@/shared/config/route-map';
import { Button } from '@/shared/ui/Button';
// import { Checkbox } from '@/shared/ui/Checkbox';
import { Text } from '@/shared/ui/Text';

import { useResetPasswordForm } from '../model';
import { ResendForgotPassword } from './ResendForgotPassword';

interface ResetPasswordFormProps {
	token?: string;
}

export const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {
	const {
		inputPasswordRegister,
		confirmedPasswordRegister,
		// checkboxRegister,
		handleSubmit,
		formState: { errors, isDirty, isValid },
		isLoading,
		isSubmitted,
	} = useResetPasswordForm(token);

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
			{/* <div>
				<Checkbox label="Log out from all devices?" {...checkboxRegister} />
			</div> */}
			<Button
				type={isSubmitted ? 'button' : 'submit'}
				variant={isSubmitted ? 'submitted' : disabled ? 'disabled' : 'submit'}
				disabled={disabled || isSubmitted}
				isLoading={isLoading}>
				Set a new password
			</Button>
			{errors.root && (
				<>
					<Text role="alert" color="error" size="small" align="center">
						{errors.root.serverError.message}
					</Text>
					{/* не очень реализация */}
					{errors.root.serverError.type === '410' && (
						<ResendForgotPassword token={token!} />
					)}
				</>
			)}
			{isSubmitted && (
				<Text align="center" color="primary">
					Awesome! We updated your password. Let&apos;s{' '}
					<Link to={routeMap.signin}>log in</Link>
				</Text>
			)}
		</form>
	);
};
