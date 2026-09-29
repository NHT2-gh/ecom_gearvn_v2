import { fetcher } from "@/utils/axios";
import { AxiosRequestConfig } from "axios";
import { createAppError } from "@/utils/error-service";
import {
  API_DOMAIN,
  BUILDPC_API_DOMAIN,
  GEARVN_DOMAIN,
  NEXTJS_SERVER,
  WEBAPI_DOMAIN,
} from "../../global-config";

type DOMAIN_TYPE =
  | "API_DOMAIN"
  | "WEBAPI_DOMAIN"
  | "NEXTJS_SERVER"
  | "GEARVN_DOMAIN"
  | "BUILDPC_API_DOMAIN";

type RequestType = {
  domain: DOMAIN_TYPE;
  method: string;
  endpoint: string;
  opts?: { body?: unknown; params?: unknown };
  customHeaders?: Record<string, string>;
  auth?: boolean;
};

class ApiService {
  private getBaseURL(key: DOMAIN_TYPE): string {
    if (key === "API_DOMAIN" && API_DOMAIN) {
      return API_DOMAIN;
    }
    if (key === "WEBAPI_DOMAIN" && WEBAPI_DOMAIN) {
      return WEBAPI_DOMAIN;
    }
    if (key === "NEXTJS_SERVER" && NEXTJS_SERVER) {
      return NEXTJS_SERVER;
    }
    if (key === "GEARVN_DOMAIN" && GEARVN_DOMAIN) {
      return GEARVN_DOMAIN;
    }
    if (key === "BUILDPC_API_DOMAIN" && BUILDPC_API_DOMAIN) {
      return BUILDPC_API_DOMAIN;
    }
    console.error(
      `Missing domain configuration for ${key}. Check your environment variables.`
    );
    return "";
  }

  //   private async getAuthHeaders(
  //     token?: string
  //   ): Promise<Record<string, string>> {
  //     const headers: Record<string, string> = {
  //       "Content-Type": "application/json",
  //     };
  //     if (token) {
  //       headers.Authorization = `Bearer ${token}`;
  //     } else if (typeof window !== "undefined") {
  //       const tokenFromCookie = document.cookie
  //         .split("; ")
  //         .find((row) => row.startsWith("token="))
  //         ?.split("=")[1];
  //       if (tokenFromCookie) {
  //         headers.Authorization = `Bearer ${tokenFromCookie}`;
  //       }
  //     }
  //     return headers;
  //   }

  private async handleRequest<T>({
    domain,
    method,
    endpoint,
    opts,
    customHeaders,
  }: // auth = false,
  RequestType): Promise<T> {
    try {
      const headers = {
        // ...(await this.getAuthHeaders(token)),
        "Content-Type": "application/json",
        ...customHeaders,
      };

      const baseURL = this.getBaseURL(domain);
      if (!baseURL) {
        throw new Error(`No base URL configured for domain: ${domain}`);
      }

      const config: AxiosRequestConfig = {
        baseURL,
        method,
        url: endpoint,
        headers,
        data: opts?.body,
        params: opts?.params,
      };

      const response = await fetcher<T>([endpoint, config] as [
        string,
        AxiosRequestConfig
      ]);

      return response;
    } catch (error) {
      const appError = createAppError(error);
      throw appError;
    }
  }

  get<T>(
    endpoint: string,
    domain: DOMAIN_TYPE,
    opts?: { params?: unknown },
    headers?: Record<string, string>,
    auth?: boolean
  ) {
    return this.handleRequest<T>({
      method: "GET",
      endpoint,
      domain,
      opts,
      customHeaders: headers,
      auth,
    });
  }

  post<T>(
    endpoint: string,
    domain: DOMAIN_TYPE,
    opts?: { body?: unknown; params?: unknown },
    headers?: Record<string, string>,
    auth?: boolean
  ) {
    return this.handleRequest<T>({
      method: "POST",
      endpoint,
      domain,
      opts,
      customHeaders: headers,
      auth,
    });
  }

  put<T>(
    endpoint: string,
    domain: DOMAIN_TYPE,
    opts?: { body?: unknown; params?: unknown },
    headers?: Record<string, string>,
    auth?: boolean
  ) {
    return this.handleRequest<T>({
      method: "PUT",
      endpoint,
      domain,
      opts,
      customHeaders: headers,
      auth,
    });
  }
  patch<T>(
    endpoint: string,
    domain: DOMAIN_TYPE,
    opts?: { body?: unknown; params?: unknown },
    headers?: Record<string, string>,
    auth?: boolean
  ) {
    return this.handleRequest<T>({
      method: "PATCH",
      endpoint,
      domain,
      opts,
      customHeaders: headers,
      auth,
    });
  }

  delete<T>(endpoint: string, domain: DOMAIN_TYPE, auth?: boolean) {
    return this.handleRequest<T>({
      method: "DELETE",
      endpoint,
      domain,
      auth,
    });
  }
}

export const apiService = new ApiService();
