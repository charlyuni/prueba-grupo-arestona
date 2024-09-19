import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { Form } from '../../../types/theared.types';
import { errorAlert, successAlert } from '../../../utils/alerts';
import { postThreadAgreement } from '../../../services';

export const usePostThreadAgreement = (): UseMutationResult<
  Form[],
  Error,
  { cfskey: string; cfstoken: string; forms: Form[] },
  unknown
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      cfskey,
      cfstoken,
      forms,
    }: {
      cfskey: string;
      cfstoken: string;
      forms: Form[];
    }) => postThreadAgreement(cfskey, cfstoken, forms),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['thread'] });
      successAlert('Formulario enviado correctamente');
    },
    onError: (error) => {
      errorAlert('Error al enviar el formulario');
      console.error('Error al enviar el formulario', error);
    },
  });
};
