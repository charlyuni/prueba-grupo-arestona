import React from 'react';
import { CheckBox } from '../../../components/CheckBox/CheckBoxs';
import { Question } from '../../../types/theared.types';
import { ArrayInputs } from '../../../components';
import { QUESTION_TYPES } from '../../../types/enums/questionsTypes';

export const FormQuestion: React.FC<{
  question: Question;
  isClose: boolean;
}> = ({ question, isClose }) => {
  return (
    <div className="form__question">
      {question.type === QUESTION_TYPES.CHECK && question.options && (
        <CheckBox
          label={question.label}
          name={question.label}
          options={question.options}
          disabled={isClose}
        />
      )}
      {question.type === QUESTION_TYPES.TEXT && (
        <ArrayInputs
          name={question.label}
          inputs={question.options || []}
          disabled={isClose}
        />
      )}
    </div>
  );
};
