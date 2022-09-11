import NavLink from "../parts/NavLink";

import React from 'react'
import Header from "../parts/Header";
import InputWithTitle from "../parts/InputWithTitle";
import { FaGithub } from 'react-icons/fa';

const ComponentsTestPage = ():JSX.Element => {
  return(
    <div>
      <Header />
      <InputWithTitle title="キーワード" placeholder="職種、キーワード、会社名など" >
        <FaGithub />
      </InputWithTitle>
    </div>
  )
}

export default ComponentsTestPage