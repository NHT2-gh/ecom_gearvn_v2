import axios, {
  type AxiosError,
  type AxiosResponse,
  type AxiosRequestConfig,
} from "axios";
import qs from "qs";

// Custom params serializer to handle filterAttributes as JSON
const customSerializer = (params: Record<string, unknown>): string => {
  const result: string[] = [];

  Object.entries(params).forEach(([key, value]) => {
    if (
      key === "filterAttributes" &&
      typeof value === "object" &&
      value !== null
    ) {
      // Serialize filterAttributes as JSON string
      result.push(`${key}=${encodeURIComponent(JSON.stringify(value))}`);
    } else {
      // Use qs for other params
      const serialized = qs.stringify({ [key]: value }, { skipNulls: true });
      if (serialized) {
        result.push(serialized);
      }
    }
  });

  return result.join("&");
};

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  paramsSerializer: customSerializer,
});
// Add a request interceptor for things like authentication tokens
axiosInstance.interceptors.request.use(
  async (config) => {
    // You can add common headers or other request configurations here
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling common error patterns
axiosInstance.interceptors.response.use(
  async (res) => res,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.warn("Authentication failed - 401 response received");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

// -----------------------------------------------------------------------------

export const fetcher = async <T>(
  args: string | [string, AxiosRequestConfig]
): Promise<T> => {
  const [url, config] = Array.isArray(args) ? args : [args];
  const defaultConfig: AxiosRequestConfig = { method: "GET", ...config };
  const res: AxiosResponse<T> = await axiosInstance.request<T>({
    url,
    ...defaultConfig,
  });

  return res.data;
};

// ----------------------------------------------------------------------
