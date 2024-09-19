import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Form } from '../../../types/theared.types';
import { Button } from '../../../components';
import '../styles/Form.scss';
import { extractCfsValues } from '../utils/helpers';
import { FormQuestion } from './FormQuestion';
import { usePostThreadAgreement } from '../hooks/usePostThreadAgreement';

interface FormProps {
  forms: Form[];
  buttonLabel: string;
  isClose: boolean;
  linkPublic: string;
}

const FormTheared: React.FC<FormProps> = ({
  forms,
  buttonLabel,
  isClose,
  linkPublic,
}) => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const { mutate, status } = usePostThreadAgreement();
  const isLoading = status === 'pending';

  const onSubmit = () => {
    const { cfskey, cfstoken } = extractCfsValues(linkPublic);
    mutate({
      cfskey,
      cfstoken,
      forms,
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {forms.map((form) => (
          <div key={form.fid} className="form__section">
            <h3 className="form__title">{form.title}</h3>
            {form.questions.map((question) => (
              <FormQuestion
                key={question.qid}
                question={question}
                isClose={isClose}
              />
            ))}
          </div>
        ))}
        <div className="form__actions">
          <Button
            variant="primary"
            type="submit"
            disabled={isClose}
            loading={isLoading}
          >
            {buttonLabel}
          </Button>
        </div>
        {isClose && (
          <div className="form__warning">
            El formulario está cerrado y no se pueden hacer cambios.
          </div>
        )}
      </form>
    </FormProvider>
  );
};

export default FormTheared;
