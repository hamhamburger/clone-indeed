import React from 'react'
import { css } from '@emotion/react';

type Props = {
  title: string,
  placeholder: string,

  children: JSX.Element,
  list?: string[],
  onSelect?: () => void
}

const Style = css({
  border: "1px solid",
  borderRadius: "0.5rem",
  padding: "10px",
  display: "flex",
  alignItems: "center",
})

const InputWithTitle = ({ title, placeholder, children,list,onSelect }: Props):JSX.Element=> {
  
  return (
    <div css={Style}>
      <div css={css({marginLeft:"10px"})}>{title}</div>
      <input placeholder={placeholder} css={css({
        border: "0",
        display: "block",
        flex: "auto",
        height: "30px",
        outline: "none"
      })}
        onSelect={onSelect}
      />
      {children}
    </div>
  )
}

export default InputWithTitle