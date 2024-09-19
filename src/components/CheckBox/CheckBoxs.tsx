import React from 'react';
import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';
import './CheckBoxs.scss';
import { QuestionOption } from '../../types/theared.types';

type CheckBoxProps = {
  label?: string;
  validations?: RegisterOptions<FieldValues, string> | undefined;
  name: string;
  options?: QuestionOption[];
  disabled?: boolean;
};

export function CheckBox({
  label,
  name,
  validations,
  options = [],
  disabled,
}: CheckBoxProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message;
  const hasError = Boolean(errorMessage);

  return (
    <div className={`checkbox ${hasError ? 'checkbox--error' : ''}`}>
      {label && <span className="checkbox__label">{label}</span>}
      {options.length > 0 ? (
        options.map((option) => (
          <div key={option.oid} className="checkbox__option">
            <input
              id={`${name}_${option.oid}`}
              type="checkbox"
              className="checkbox__input"
              {...register(`${name}_${option.oid}`, validations)}
              disabled={disabled}
              defaultChecked={option.default}
            />
            <label
              htmlFor={`${name}_${option.oid}`}
              className="checkbox__option-label"
            >
              {option.label}
            </label>
          </div>
        ))
      ) : (
        <input
          id={name}
          type="checkbox"
          className="checkbox__input"
          aria-invalid={hasError}
          {...register(name, validations)}
          disabled={disabled}
        />
      )}

      {hasError && (
        <span className="checkbox__error-message">
          {errorMessage?.toString()}
        </span>
      )}
    </div>
  );
}
