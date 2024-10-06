/// <reference types="vite/client" />

// https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
interface ImportMetaEnv {
	readonly VITE_AUTH_SERVER_URL: string;
	readonly VITE_DATA_API_URL: string;
	readonly VITE_DOG_API_ACCESS_KEY: string;
	readonly VITE_CLIENT_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
