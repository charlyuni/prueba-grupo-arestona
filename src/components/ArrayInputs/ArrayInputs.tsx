import React from 'react';
import { FieldValues, RegisterOptions } from 'react-hook-form';
import { Input } from '../Input/Input';
import { QuestionOption } from '../../types/theared.types';

type ArrayInputProps = {
  inputs: QuestionOption[];
  validations?: RegisterOptions<FieldValues, string> | undefined;
  name: string;
  label?: string;
  disabled?: boolean;
};

export const ArrayInputs: React.FC<ArrayInputProps> = ({
  inputs,
  validations,
  name,
  label,
  disabled,
}: ArrayInputProps) => {
  return (
    <div>
      {label && <label> {label}</label>}
      {inputs.map((input) => (
        <Input
          key={input.oid}
          id={`${name}_${input.oid}`}
          name={`${name}_${input.oid}`}
          label={input.label}
          type="text"
          disabled={disabled}
          validations={{
            required: validations?.required,
            minLength: {
              value: input.input?.min || 3,
              message: `Mínimo de ${input.input?.min} caracteres`,
            },
            maxLength: {
              value: input.input?.max || 100,
              message: `Máximo de ${input.input?.max} caracteres`,
            },
          }}
        />
      ))}
    </div>
  );
};
