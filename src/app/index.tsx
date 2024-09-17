import { RouterProvider } from 'react-router-dom';
import { router } from './providers/router/config';
import './styles/index.scss';

export const App = () => (
	<RouterProvider
		router={router}
		// fallbackElement={<div>x</div>}
	/>
);
