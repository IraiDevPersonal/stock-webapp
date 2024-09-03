import { HttpMethod } from "@utils/types";
import { getError, logError } from "./error";

type RequestOptions = {
	method?: HttpMethod;
	withToken?: boolean;
	fileName: string;
} & RequestInit;

export function fetcher(baseUrl: string) {
	return function (endpoint: string, options: RequestOptions) {
		const { method = "get", headers, ...requestOptions } = options;

		try {
			const adaptedEndpoint = endpoint.startsWith("/")
				? endpoint
				: `/${endpoint}`;
			const initHeaders = new Headers(headers);
			//  const token = new LocalStorage<string>("TOKEN_KEY")
			const token = "123";

			if (requestOptions.withToken) {
				// headers.append("x-token", token.get())
				initHeaders.append("x-token", token);
			}

			return fetch(`${baseUrl}${adaptedEndpoint}`, {
				...requestOptions,
				headers: initHeaders,
				method
			});
		} catch (e) {
			logError(e, requestOptions.fileName);
			const error = getError(e);
			throw new Error(error.message);
		}
	};
}
