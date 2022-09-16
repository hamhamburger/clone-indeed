// こっちのコンポーネントはUIライブラリなしで作ったものです

import { css } from '@emotion/react';

type Props = {
  title: string;
  placeholder: string;
  children: JSX.Element;
  value?: string;
  onSelect?: () => void;
  onBlur?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Style = css({
  display: 'flex',
  alignItems: 'center',
});

const InputWithTitle = ({
  title,
  placeholder,
  value: string,
  children,
  onSelect,
  onBlur,
  onChange,
}: Props): JSX.Element => {
  return (
    <div css={Style}>
      <div css={css({ marginLeft: '10px' })}>{title}</div>
      <input
        placeholder={placeholder}
        value={string}
        css={css({
          border: '0',
          display: 'block',
          flex: 'auto',
          height: '30px',
          outline: 'none',
        })}
        onSelect={onSelect}
        onBlur={onBlur}
        onChange={(e) => onChange(e)}
      />
      {children}
    </div>
  );
};

export default InputWithTitle;
