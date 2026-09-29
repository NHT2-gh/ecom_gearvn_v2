import { AxiosError } from "axios";

// ----------------------------------------------------------------------

export enum ErrorType {
  NETWORK = "network",
  AUTHENTICATION = "authentication",
  AUTHORIZATION = "authorization",
  RESOURCE_NOT_FOUND = "resource_not_found",
  VALIDATION = "validation",
  SERVER = "server",
  UNKNOWN = "unknown",
}

export type AppError = {
  message: string;
  type: ErrorType;
  code?: number;
  details?: Record<string, unknown>;
};

/**
 * Create a standardized app error object from any caught error
 */
export const createAppError = (error: unknown): AppError => {
  // Handle axios errors
  if (error instanceof AxiosError) {
    const status = error.response?.status;

    // Authentication errors (401)
    if (status === 401) {
      return {
        message: "Authentication failed. Please login again.",
        type: ErrorType.AUTHENTICATION,
        code: status,
      };
    }

    // Authorization errors (403)
    if (status === 403) {
      return {
        message: "You do not have permission to perform this action.",
        type: ErrorType.AUTHORIZATION,
        code: status,
      };
    }

    // Resource not found (404)
    if (status === 404) {
      return {
        message: "The requested resource was not found.",
        type: ErrorType.RESOURCE_NOT_FOUND,
        code: status,
      };
    }

    // Validation errors (400, 422)
    if (status === 400 || status === 422) {
      return {
        message: error.response?.data?.message || "Invalid request data.",
        type: ErrorType.VALIDATION,
        code: status,
        details: error.response?.data,
      };
    }

    // Server errors (500+)
    if (status && status >= 500) {
      return {
        message: "A server error occurred. Please try again later.",
        type: ErrorType.SERVER,
        code: status,
      };
    }

    // Network errors
    if (error.code === "ECONNABORTED" || !error.response) {
      return {
        message:
          "Network connection error. Please check your internet connection.",
        type: ErrorType.NETWORK,
      };
    }

    // Other axios errors
    return {
      message: error.message || "An error occurred with the request.",
      type: ErrorType.UNKNOWN,
      code: status,
    };
  }

  // Handle standard Error objects
  if (error instanceof Error) {
    return {
      message: error.message || "An unknown error occurred.",
      type: ErrorType.UNKNOWN,
      details: { stack: error.stack },
    };
  }

  // Handle unknown errors
  return {
    message: String(error) || "An unknown error occurred.",
    type: ErrorType.UNKNOWN,
  };
};

export const logError = (error: unknown): void => {
  const appError = createAppError(error);

  // In development, we can log more details
  if (process.env.NODE_ENV === "development") {
    console.error("Error details:", appError);

    if (error instanceof Error) {
      console.error("Original error:", error);
    }
  } else {
    // In production, log minimal information
    console.error(`[${appError.type}] ${appError.message}`);
  }
};
