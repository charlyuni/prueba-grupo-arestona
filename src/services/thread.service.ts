import { Form, ThreadResponse } from '../types/theared.types';
import { API_ENDPOINTS } from './api-endpoints';
import { httpClient } from './httpClient';

export const postThreadAgreement = async (
  cfskey: string,
  cfstoken: string,
  threadData: Form[]
): Promise<Form[]> => {
  const url = API_ENDPOINTS.THEARED.CREATE.replace(
    '{{cfskey}}',
    cfskey
  ).replace('{{cfstoken}}', cfstoken);

  const response = await httpClient.post<Form[]>(url, threadData);

  return response;
};

export const getThread = async (
  cfskey: string,
  cfstoken: string
): Promise<ThreadResponse> => {
  const url = API_ENDPOINTS.THEARED.GET.replace('{{cfskey}}', cfskey).replace(
    '{{cfstoken}}',
    cfstoken
  );
  const response = await httpClient.get<ThreadResponse>(url);
  return response;
};
