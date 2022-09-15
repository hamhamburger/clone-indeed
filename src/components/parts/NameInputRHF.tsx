import { Controller, Control } from 'react-hook-form';
import SelectableInput from './SelectableInput';
import { FormInput } from '../types';

type Props = {
  control: Control<FormInput>;
   title: string;
  placeholder: string;
  options: string[];
  children: JSX.Element;
};

const SelectableInputRHF = ({
  control,
  title,
  placeholder,
  options,
  children,
}: Props): JSX.Element => {
  return (
    <Controller
      control={control}
      name='name'
      defaultValue={''}
      rules={{ required: { value: true, message: '入力必須です' } }}
      render={({ field, fieldState: { error } }) => (
        // const {onChange} = field
        <SelectableInput {...field} 
        title={title} 
          placeholder={placeholder}
          options={options}>
          {children}
        </SelectableInput>  
      )}
    />
  );
};

export default SelectableInputRHF;
