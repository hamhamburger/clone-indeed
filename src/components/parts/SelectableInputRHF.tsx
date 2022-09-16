import { Controller, Control } from 'react-hook-form';
import SelectableInput from './SelectableInput';
import { FormInput ,FormName} from '../types';
import { SyntheticEvent } from 'react';
import { AutocompleteInputChangeReason } from '@mui/material';

type Props = {
  control: Control<FormInput>;
  title: string;
  placeholder: string;
  options?: string[];
  children: JSX.Element;
  name: FormName;
  onInputChange?: (
    event: SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason,
  ) => void;
};

const SelectableInputRHF = ({
  control,
  title,
  placeholder,
  options,
  children,
  name,
  onInputChange

}: Props): JSX.Element => {
  return (
    <Controller
      control={control}
      name={name}
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

export default SelectableInputRHF;
