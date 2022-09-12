import React, { useState,useRef,useEffect } from 'react';
import { css } from '@emotion/react';
import InputWithTitle from './InputWithTitle';

type Props = {
  title: string;
  placeholder: string;
  children: JSX.Element;
  list?: string[];
  onChange: (s: string) => void;
};


const Style = css({
  border: "1px solid",
  borderRadius: "0.5rem",
  padding: "10px",
  position:"relative"
});

const SelectableInput = ({
  title,
  placeholder,
  children,
  list,
  onChange
}: Props): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [value, setValue] = useState<string>("")
  const insideRef = useRef<HTMLDivElement>(null);

  const onChangeChild = (e: React.ChangeEvent<HTMLInputElement>): void => setValue(e.target.value) 
  
  useEffect(() => {
    const el = insideRef.current;
    if (el === undefined) return;

    const handleClickOutside = (e: MouseEvent): void => {
      if (!((el?.contains(e.target as Node)) ?? false)) {
        setExpanded(false);
      } 
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
    // ここの実装は https://hirakublog.com/react-click-outside/を参考にさせていただきました

  }, [insideRef])
  
  useEffect(() => {
    onChange(value)
  
  }, [value])
  

  return (
      <div css={Style}  ref={insideRef}>
        <InputWithTitle
          title={title}
          placeholder={placeholder}
          onSelect={() => setExpanded(true)}
          onChange={onChangeChild}
          valueFromParent={value}
        >
          {children}
        </InputWithTitle>
        <div className='list' css={css({position:"relative",zIndex:"2"})}>
          {expanded ? (
            list?.map((value) => {
              return (
                <div
                  key={value}
                  css={css({
                    ":hover": {backgroundColor:"lightblue"}
                  })}
                  onClick={() => {
                    setValue(value)
                    setExpanded(false)

                  }
                  }
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


