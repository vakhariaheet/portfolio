/// <reference types="react-scripts" />
declare namespace NodeJS {
	interface ProcessEnv {
		//types of envs
		NODE_ENV: 'development' | 'production' | 'test';
		PUBLIC_URL: string;
		REACT_APP_SERVICE_ID: string;
		REACT_APP_PUBLIC_KEY: string;
		REACT_APP_TEMPLATE_ID: string;
	}
}
declare module '*.pdf';
