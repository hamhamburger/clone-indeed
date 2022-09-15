// こっちのコンポーネントはUIライブラリなしで作ったものです

import { css } from '@emotion/react';

type Props = {
  title: string;
  placeholder: string;
  children: JSX.Element;
  valueFromParent?: string;
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
  valueFromParent,
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
        value={valueFromParent}
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

// このコンポーネント単品でも使えるようにしつつSelectableInputから子コンポーネントとして使われた場合にも値を渡せるようにする設計にするつもりだったが無理だ
// 親コンポーネントでステート管理される設計にします

export default InputWithTitle;
