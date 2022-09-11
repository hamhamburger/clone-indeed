/* eslint-disable react/no-unknown-property */
import { css } from '@emotion/react'
import React from 'react'
import Partition from '../pages/smallparts/Partition';
import NavLink from './NavLink';
import logo from '../../assets/free-logo.svg';




const HeaderStyle = css({
  display: "flex",
  justifyContent:"space-between"
})


const Header = ():JSX.Element => {
  return (
    <div className='Header' css={HeaderStyle}>
      <div
        className='left-section'
        css={css({ display: 'flex', gap: '0 20px' })}
      >
        <img src={logo} css={css({height:"50px",width:"auto"})} alt="free" />
        <NavLink
          title='求人検索'
          link='https://jp.indeed.com/'
          selected={false}
        />
        <NavLink
          title='企業口コミ'
          link='https://jp.indeed.com/'
          selected={false}
        />
      </div>
      <div
        className='right-section'
        css={css({ display: 'flex', gap: '0 20px' })}
      >
        <NavLink
          title='履歴書・プロフィール'
          link='https://jp.indeed.com/'
          selected={false}
        />
        <NavLink
          title='ログイン'
          link='https://jp.indeed.com/'
          selected={false}
        />
        <Partition />

        <NavLink
          title='求人広告掲載'
          link='https://jp.indeed.com/'
          selected={false}
        />
      </div>
    </div>
  );
}

export default Header