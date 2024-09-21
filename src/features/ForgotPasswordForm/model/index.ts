import { AxiosError } from 'axios';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { AuthService } from '@/shared/services/authService';
import { ErrorResponseData } from '@/shared/types/errorResponseData';

type FormData = {
	email: string;
};

export const useForgotPasswordForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const { register, handleSubmit, formState, reset, setError } =
		useForm<FormData>({ criteriaMode: 'all' });

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		const { email } = data;
		try {
			setIsLoading(true);
			await AuthService.forgotPassword(email);
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

	const emailRegister = register('email', {
		required: 'Email Address is required',
		pattern: {
			value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
			message: 'Invalid email address',
		},
	});

	return {
		handleSubmit: handleSubmit(onSubmit),
		formState,
		emailRegister,
		isLoading,
		isSubmitted,
	};
};
