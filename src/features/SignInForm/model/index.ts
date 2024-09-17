import { routeMap } from '@/shared/config/route-map';
import { useSession } from '@/shared/hooks/useSession';
import { AuthService } from '@/shared/services/authService';
import { ErrorResponseData } from '@/shared/types/errorResponseData';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormData = {
	email: string;
	password: string;
};

export const useSignInForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const { register, handleSubmit, formState, setError } = useForm<FormData>({
		criteriaMode: 'all',
	});
	const navigate = useNavigate();
	const context = useSession();

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		const { email, password } = data;
		try {
			setIsLoading(true);
			const user = await AuthService.login(email, password);
			context?.setUser(user.data);
			setIsSubmitted(true);
			navigate(routeMap.root);
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

	return {
		handleSubmit: handleSubmit(onSubmit),
		formState,
		emailRegister,
		inputPasswordRegister,
		isLoading,
		isSubmitted,
	};
};
