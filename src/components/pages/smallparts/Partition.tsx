import React from 'react'
import { jsx,css } from "@emotion/react"




const Style = css({
  padding: '18px 0 ',
  textDecoration: 'none',
  display: 'inline-block',
  height:"18px"
});


const Partition = ():JSX.Element => {
  return (
    <span css={Style}>
      <span css={css({ border: 'solid 0.01px #e4e2e0' })}></span>
    </span>
  );
}

export default Partition