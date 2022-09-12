import React from 'react'
import { css } from "@emotion/react"



const Style = css({
  padding: "16px 0 ",
  textDecoration: "none",
  display:"inline-block",
  color: "black",
  ":hover": {
    borderBottom: "3px solid blue"
  }
})


type Props = {
  title:string,
  link: string,
  selected: boolean
}

const NavLink = ({title,link}:Props):JSX.Element => {
  return (
    <span>
      <a href={link} css={Style}>
        <span>{title}</span>
      </a>
    </span>
  );
}

export default NavLink