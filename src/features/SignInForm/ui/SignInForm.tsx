import { Link } from 'react-router-dom';

import { InputPassword } from '@/entities/InputPassword';

import { routeMap } from '@/shared/config/route-map';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';

import { useSignInForm } from '../model';

export const SignInForm = () => {
	const {
		emailRegister,
		inputPasswordRegister,
		handleSubmit,
		isLoading,
		formState: { errors, isDirty, isValid },
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
				placeholder="Password"
				aria-label="Password"
				autoComplete="current-password"
				aria-invalid={errors.password ? 'true' : 'false'}
				{...inputPasswordRegister}
			/>
			{errors.password && (
				<Text role="alert" color="error" size="small">
					{errors.password.message}
				</Text>
			)}
			<Text align="center" size="small">
				<Link to={routeMap.forgot}>Forgot Password?</Link>
			</Text>
			<Button
				type={isSubmitted ? 'button' : 'submit'}
				variant={isSubmitted ? 'submitted' : disabled ? 'disabled' : 'submit'}
				disabled={disabled || isSubmitted}
				isLoading={isLoading}>
				Sign In
			</Button>
			{errors.root && (
				<Text role="alert" color="error" size="small" align="center">
					{errors.root.serverError.message}
				</Text>
			)}
			<Text align="center" color="secondary" size="small">
				Don&apos;t have an account? <Link to={routeMap.signup}>Sign Up</Link>
			</Text>
		</form>
	);
};
