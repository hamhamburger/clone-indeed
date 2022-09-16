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
    <FormControl sx={{ minWidth: '100px', maxWidth: '200px' }}>
      <InputLabel sx={{ fontSize: '0.9rem', fontWeight: '400', border: 0 }}>
        {label}
      </InputLabel>
      <Select
        variant='filled'
        sx={{
          backgroundColor: '#e4e2e0',
          '& .MuiInput-root': {
            '&:before, :after, :hover:not(.Mui-disabled):before': {
              borderBottom: 0,
            },
          },
        }}
        name={name}
        value={value}
        onChange={onChange}
        label='エリア'
      >
        {options?.map((option) => {
          return (
            <MenuItem value={option.value} key={option.value}>
              {option.key}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
