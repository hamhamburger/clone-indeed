import { css } from '@emotion/react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { JSX } from '@emotion/react/jsx-runtime';

type Props = {
  title: string;
  placeholder: string;
  options: string[];
  children: JSX.Element;
  onSelect?: () => void;
  onBlur?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Style = css({
  display: 'flex',
  alignItems: 'center',
});

const InputWithTitle2 = ({
  title,
  placeholder,
  options,
  children,
  onSelect,
  onBlur,
  onChange,
}: Props): JSX.Element => {
  return (
    <div css={Style}>
      <Autocomplete
        id='free-solo-demo'
        freeSolo
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              border: '0',
              display: 'block',
              flex: 'auto',
              height: '30px',
              outline: 'none',
            }}
          />
        )}
      />
      {children}
    </div>
  );
};

export default InputWithTitle2;
