import { Link } from 'react-router-dom';

import { InputPassword } from '@/entities/InputPassword';
import { routeMap } from '@/shared/config/route-map';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';

import { useSignInForm } from '../model';

export const SignUpForm = () => {
	const {
		emailRegister,
		inputPasswordRegister,
		confirmedPasswordRegister,
		handleSubmit,
		formState: { errors, isDirty, isValid },
		isLoading,
		isSubmitted,
	} = useSignInForm();

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
			<InputPassword
				placeholder="Create password"
				aria-label="Create password"
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
				placeholder="Confirm password"
				aria-label="Confirm password"
				autoComplete="new-password"
				aria-invalid={errors.confirmedPassword ? 'true' : 'false'}
				{...confirmedPasswordRegister}
			/>
			{errors.confirmedPassword && (
				<Text role="alert" color="error" size="small">
					{errors.confirmedPassword.message}
				</Text>
			)}
			<Button
				type={isSubmitted ? 'button' : 'submit'}
				variant={isSubmitted ? 'submitted' : disabled ? 'disabled' : 'submit'}
				disabled={disabled || isSubmitted}
				isLoading={isLoading}>
				Sign Up
			</Button>
			{errors.root && (
				<Text role="alert" color="error" size="small" align="center">
					{errors.root.serverError.message}
				</Text>
			)}
			<Text align="center" color="secondary" size="small">
				Already have an account? <Link to={routeMap.signin}>Sign In</Link>
			</Text>
			{isSubmitted && (
				<Text align="center" color="primary">
					We sent a link for you to your email address. Check it out!
				</Text>
			)}
		</form>
	);
};
