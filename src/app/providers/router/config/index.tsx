import { ErrorPage } from '@/pages/ErrorPage';
import { MainPage } from '@/pages/MainPage';
import { SignInPage } from '@/pages/SignInPage';
import { SignUpPage } from '@/pages/SignUpPage';
import { routeMap } from '@/shared/config/route-map';
import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../ui/Root';
import { ProtectedRoute } from '../ui/ProtectedRoute';
import { GalleryPage } from '@/pages/GalleryPage';

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
]);
