import { Controller, Control } from 'react-hook-form';
import SelectableInput from './SelectableInput';
import { FormInput } from '../types';
import { SyntheticEvent } from 'react';
import { AutocompleteInputChangeReason } from '@mui/material';

type Props = {
  control: Control<FormInput>;
  title: string;
  placeholder: string;
  options: string[];
  children: JSX.Element;
  onInputChange?: (
    event: SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason,
  ) => void;
};

const NameInputRHF = ({
  control,
  title,
  placeholder,
  options,
  children,
  onInputChange

}: Props): JSX.Element => {
  return (
    <Controller
      control={control}
      name='keyword'
      defaultValue={''}
      render={({ field, fieldState: { error } }) => (
        <SelectableInput
          field={field}
          title={title}
          placeholder={placeholder}
          options={options}
          onInputChange={onInputChange}
        >
          {children}
        </SelectableInput>
      )}
    />
  );
};

export default NameInputRHF;
