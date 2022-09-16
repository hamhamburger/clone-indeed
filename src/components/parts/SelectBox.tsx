import * as React from 'react';

import {MenuItem,Select,FormControl,InputLabel} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';


type Props = {
  onChange: (event: SelectChangeEvent<any>, child: React.ReactNode) => void;
  name?: string;
  value: string;
  label?: string
  options?: Array<{ key: string, value: string }>
};

export default function SelectBox({onChange,value,label,options,name}:Props):JSX.Element {
 
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        label='エリア'>
        {options?.map((option) => {
          return  (<MenuItem value={option.value} key={option.value}>
            {option.key}
          </MenuItem>)
        })}
      </Select>
    </FormControl>
  );
}
