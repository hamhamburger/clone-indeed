import React from 'react'
import { css } from "@emotion/react"



const Style = css({
  padding: '16px 0 ',
  textDecoration: 'none',
  display: 'inline-block',
  color: 'black',
  borderBottom: '3px solid white',
  fontSize: '0.85rem',
  ':hover': {
    borderBottom: '3px solid blue',
  },
});


type Props = {
  title:string,
  link: string,
  selected: boolean,
  spanStyle?: any
}

const NavLink = ({title,link,spanStyle}:Props):JSX.Element => {
  return (
    <span>
      <a href={link} css={Style}>
        <span css={spanStyle}>{title}</span>
      </a>
    </span>
  );
}

export default NavLink