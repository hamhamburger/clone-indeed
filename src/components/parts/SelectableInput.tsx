import { css } from '@emotion/react';
import {TextField,Box} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { JSX } from '@emotion/react/jsx-runtime';

type Props = {
  title: string;
  placeholder: string;
  options: string[];
  children: JSX.Element;
  onSelect?: () => void;
  onBlur?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  field? : any
};


const SelectableInput = ({
  title,
  placeholder,
  options,
  children,
  onSelect,
  onBlur,
  onChange,
  field
}: Props): JSX.Element => {


  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid',
        borderRadius: '0.5rem',
        padding: '10px',
      }}
    >
      <div css={css({ marginLeft: '10px' })}>{title}</div>
      <Autocomplete
        sx={{
          display: 'block',
          flex: 'auto',
          height: '30px',
        }}
        freeSolo
        options={options}
        renderInput={(params) => (
          <TextField
            {...field}
            variant='standard'
            sx={{
              border: '0',
              height: '30px',
              outline: 'none',
              '& .MuiInput-root': {
                '&:before, :after, :hover:not(.Mui-disabled):before': {
                  borderBottom: 0,
                },
              },
            }}
            placeholder={placeholder}
            {...params}
          />
        )}
      />
      {children}
    </Box>
  );
};

export default SelectableInput;
