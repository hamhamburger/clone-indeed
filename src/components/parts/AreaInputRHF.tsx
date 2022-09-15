import { Controller, Control } from 'react-hook-form';
import 
import { FormInput } from '../types';

type Props = {
  control: Control<FormInput>;
};

const SelectableInputRHF = ({ control }: Props): JSX.Element => {
  return (
    <Controller
      control={control}
      name='name'
      defaultValue={''}
      rules={{ required: { value: true, message: '入力必須です' } }}
      render={({ field, fieldState: { error } }) => (
        // const {onChange} = field
        <SelectableInput {...field} error={error?.message !== null} />
      )}
    />
  );
};

export default SelectableInputRHF;
