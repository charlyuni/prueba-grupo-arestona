import { useQuery } from '@tanstack/react-query';
import { ThreadResponse } from '../../../types/theared.types';
import { getThread } from '../../../services';

type GetThreadParams = {
  cfskey: string;
  cfstoken: string;
};

export const useGetThreadQuery = ({ cfskey, cfstoken }: GetThreadParams) => {
  return useQuery<ThreadResponse, Error>({
    queryKey: ['thread', cfskey, cfstoken],
    queryFn: () => getThread(cfskey, cfstoken),
    enabled: !!cfskey && !!cfstoken,
    staleTime: 10000,
    refetchOnWindowFocus: false,
  });
};
