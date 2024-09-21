import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';
import { UserProvider } from './app/providers/context/provider';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<UserProvider>
			<App />
		</UserProvider>
	</StrictMode>,
);
