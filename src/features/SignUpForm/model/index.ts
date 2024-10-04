import { AxiosError } from 'axios';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { registration } from '@/shared/services/authService';
import { ErrorResponseData } from '@/shared/types/errorResponseData';

interface FormData {
	email: string;
	password: string;
	confirmedPassword: string;
};

export const useSignInForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const { register, handleSubmit, formState, getValues, reset, setError } =
		useForm<FormData>({ criteriaMode: 'all' });

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		const { email, password } = data;
		try {
			setIsLoading(true);
			await registration(email, password);
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

	return {
		handleSubmit: handleSubmit(onSubmit),
		formState,
		emailRegister,
		inputPasswordRegister,
		confirmedPasswordRegister,
		isLoading,
		isSubmitted,
	};
};
