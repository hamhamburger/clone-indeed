import { Controller, Control } from 'react-hook-form';

import { FormInput } from '../types'
import SelectBox from './SelectBox';



type Props = {
  control: Control<FormInput>;

  options: Array<{ key: string, value: string }>;

};

const AreaInputRHF = ({ control,options}: Props): JSX.Element => {
  return (
    <Controller
      control={control}
      name='name'
      defaultValue={''}
      rules={{ required: { value: true, message: '入力必須です' } }}
      render={({ field, fieldState: { error } }) => (
        // const {onChange} = field
        <SelectBox
          {...field}
          options={options} />

      )}
    />
  );
};

export default AreaInputRHF;
