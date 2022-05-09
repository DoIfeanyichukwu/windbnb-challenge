import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.svg'

import HeaderButton from '../components/HeaderButton'

const HeaderElement = styled.header`
  font-family: "Mulish", sans-serif;
  line-height: 17.57px;
  font-weight: 400;
  font-size: 14px;
  color: #333333;
  margin-block: 19px 37px;
`

const Header = ({handleSearchBtn, location, guests}) => {
  return (
    <HeaderElement className="header">
      <div className='logo_container'>
        <a href="/" aria-label='windbnd, back to home' className="logo_link">
          <img src={logo} alt="" />
        </a>
      </div>

      <HeaderButton 
        location={location} 
        guests={guests}  
        handleSearchBtn={handleSearchBtn}
      />
    </HeaderElement>
  )
}

export default Header