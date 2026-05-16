import { QueryClient } from '@tanstack/react-query';
<<<<<<< HEAD
=======


export const queryClientInstance = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 1,
		},
	},
});
>>>>>>> 12b236b45efa8c52049dcb45a6ff3cbcad037dda


export const queryClientInstance = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 1,
		},
	},
});
