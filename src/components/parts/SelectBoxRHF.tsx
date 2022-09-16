import { Controller, Control } from 'react-hook-form';

import { FormInput, FormName } from '../types'
import SelectBox from './SelectBox';



type Props = {
  control: Control<FormInput>;
  name: FormName
  options: Array<{ key: string, value: string }>;
  label?: string;
};

const SelectBoxRHF = ({ control,options,label,name}: Props): JSX.Element => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      // rules={{ required: { value: true, message: '入力必須です' } }}
      render={({ field, fieldState: { error } }) => (
        // const {onChange} = field
        <SelectBox
          onChange={field.onChange}
          value={field.value}
          name={field.name}
          options={options}
          label={label}
        />

      )}
    />
  );
};

export default SelectBoxRHF;
