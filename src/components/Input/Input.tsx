import React from 'react';
import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';
import './Input.scss';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  validations?: RegisterOptions<FieldValues, string> | undefined;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  description?: string;
  id?: string;
  name: string;
  type?: string;
};

export const Input: React.FC<InputProps> = ({
  label,
  id,
  name,
  type = 'text',
  validations,
  description,
  onBlur,
  ...props
}: InputProps) => {
  const { register, formState } = useFormContext();

  if (!name) return null;

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event);
    }
  };

  const error = formState.errors?.[name]?.message?.toString();

  return (
    <div className={`input`}>
      {label && (
        <label className="input__label" htmlFor={id || name}>
          {label}
        </label>
      )}
      <div className="input__container">
        <input
          id={id || name}
          type={type}
          className="input__field"
          {...props}
          {...register(name, validations)}
          onBlur={handleBlur}
        />
      </div>

      {description && (
        <small className="input__description">{description}</small>
      )}
      {error && <small className="input__error">{error}</small>}
    </div>
  );
};
