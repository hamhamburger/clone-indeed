// こっちのコンポーネントはUIライブラリなしで作ったものです

import React, { useState, useRef, useEffect } from 'react';
import { css } from '@emotion/react';
import InputWithTitle from './InputWithTitleOriginal';

type Props = {
  title: string;
  placeholder: string;
  children: JSX.Element;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Style = css({
  border: '1px solid',
  borderRadius: '0.5rem',
  padding: '10px',
  position: 'relative',
});

const SelectableInput = ({
  title,
  placeholder,
  children,
  options,
  onChange,
}: Props): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const insideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = insideRef.current;
    if (el === undefined) return;

    const handleClickOutside = (e: MouseEvent): void => {
      if (!(el?.contains(e.target as Node) ?? false)) {
        setExpanded(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
    // ここの実装は https://hirakublog.com/react-click-outside/を参考にさせていただきました
  }, [insideRef]);

  return (
    <div css={Style} ref={insideRef}>
      <InputWithTitle
        title={title}
        placeholder={placeholder}
        onSelect={() => setExpanded(true)}
        onChange={onChange}
        value={value}
      >
        {children}
      </InputWithTitle>
      <div className='list' css={css({ position: 'relative', zIndex: '2' })}>
        {expanded ? (
          options?.map((value) => {
            return (
              <div
                key={value}
                css={css({
                  ':hover': { backgroundColor: 'lightblue' },
                })}
                onClick={() => {
                  setValue(value);
                  setExpanded(false);
                }}
              >
                {value}
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SelectableInput;
