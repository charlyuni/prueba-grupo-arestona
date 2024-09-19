import axios, { AxiosRequestConfig } from 'axios';

export const AxiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export class httpClient {
  static async get<T>(url: string, params?: unknown) {
    const response = await AxiosClient.get<T>(url, { params });
    return response.data;
  }

  static async post<T>(
    url: string,
    data: unknown,
    options?: AxiosRequestConfig<unknown> | undefined
  ) {
    const response = await AxiosClient.post<T>(url, data, options);
    return response.data;
  }

  static async put<T>(url: string, data: unknown) {
    const response = await AxiosClient.put<T>(url, data);
    return response.data;
  }

  static async delete<T>(url: string) {
    const response = await AxiosClient.delete<T>(url);
    return response.data;
  }
}
