import { createBrowserRouter } from 'react-router-dom';

import { ErrorPage } from '@/pages/ErrorPage';
import { ForgotPasswordPage } from '@/pages/ForgotPasswordPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { MainPage } from '@/pages/MainPage';
import { ResetPasswordPage } from '@/pages/ResetPasswordPage';
import { SignInPage } from '@/pages/SignInPage';
import { SignUpPage } from '@/pages/SignUpPage';

import { routeMap } from '@/shared/config/route-map';

import { ProtectedRoute } from '../ui/ProtectedRoute';
import { Root } from '../ui/Root';

export const router = createBrowserRouter([
	{
		path: routeMap.root,
		element: <Root />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{ index: true, element: <MainPage /> },
					{
						element: <ProtectedRoute isAuthOnly={false} />,
						children: [
							{
								path: routeMap.signin,
								element: <SignInPage />,
							},
							{
								path: routeMap.signup,
								element: <SignUpPage />,
							},
						],
					},
					{
						element: <ProtectedRoute />,
						children: [
							{
								path: routeMap.gallery,
								element: <GalleryPage />,
							},
						],
					},
					{
						path: '*',
						element: <ErrorPage />,
					},
				],
			},
		],
	},
	{
		path: routeMap.forgot,
		element: <ForgotPasswordPage />,
	},
	{
		path: routeMap.reset,
		element: <ResetPasswordPage />,
	},
]);
