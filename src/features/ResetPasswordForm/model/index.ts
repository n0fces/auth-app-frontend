import { AuthService } from '@/shared/services/authService';
import { ErrorResponseData } from '@/shared/types/errorResponseData';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useParams } from 'react-router-dom';

type FormData = {
	password: string;
	confirmedPassword: string;
	logoutCheckbox: boolean;
};

export const useResetPasswordForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const { token } = useParams();
	const { register, handleSubmit, formState, getValues, reset, setError } =
		useForm<FormData>({ criteriaMode: 'all' });

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		const { password, logoutCheckbox } = data;
		try {
			setIsLoading(true);
			await AuthService.resetPassword(
				token as string,
				password,
				logoutCheckbox,
			);
			setIsSubmitted(true);
			reset();
		} catch (error) {
			const serverError = error as AxiosError<ErrorResponseData>;
			setError('root.serverError', {
				type: String(serverError.response?.status),
				message: serverError.response?.data.message,
			});
		} finally {
			setIsLoading(false);
		}
	};

	const inputPasswordRegister = register('password', {
		required: 'Password is required',
		minLength: {
			value: 8,
			message: 'Password must be at least 8 characters long',
		},
	});
	const confirmedPasswordRegister = register('confirmedPassword', {
		required: 'Confirmed password is required',
		minLength: {
			value: 8,
			message: 'Password must be at least 8 characters long',
		},
		validate: (value) => {
			const { password } = getValues();
			return password === value || 'Passwords should match!';
		},
	});
	const checkboxRegister = register('logoutCheckbox');

	return {
		handleSubmit: handleSubmit(onSubmit),
		formState,
		inputPasswordRegister,
		confirmedPasswordRegister,
		checkboxRegister,
		isLoading,
		isSubmitted,
	};
};
