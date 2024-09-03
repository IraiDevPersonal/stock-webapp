import { ERROR_MESSAGE } from "@utils/messages";
import { ErrorType } from "@utils/types";

const { UNEXPECTED_ERROR, SERVER_ERROR } = ERROR_MESSAGE;

export function logError(error: unknown, where: string) {
	console.error(`ERROR EN ARCHIVO: ${where.toLocaleUpperCase()}:\n `, error);
}

export function getError(error: unknown): {
	message: string;
	errorType: ErrorType;
} {
	const { message } = error as { message: string; stack: string };

	if (error instanceof DOMException) {
		return {
			errorType: "cancelled",
			message: ""
		};
	}

	return {
		errorType: "unexpected",
		message: message ?? UNEXPECTED_ERROR
	};
}

export function apiErrorHandler(
	status: number,
	message: string | null | undefined
) {
	if (status >= 500) {
		throw new Error(message || SERVER_ERROR);
	}

	if (status < 200 || status > 299) {
		throw new Error(message || UNEXPECTED_ERROR);
	}
}
