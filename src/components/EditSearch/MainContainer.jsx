import React from 'react'
import { SearchButton } from './SearchButton'
import { MdSearch } from 'react-icons/md'
import styled from 'styled-components'

const LABEL = styled.label`
  color: #333333;
  font-weight: 800;
  font-family: "Mulish", sans-serif;
  font-size: 9px;
  position: absolute;
  text-transform: uppercase;
  display: block;
  line-height: 11px;
  top: 11px;
  left: 26px;
`

const INPUT = styled.input`
  max-inline-size: 100%;
  width: 100%;
  font-weight: 400;
  font-family: "Mulish", sans-serif;
  font-size: 14px;
  color: #333333;
  padding-block: 27px 10px;
  padding-inline: 26px;
  background: #fff; 
  line-height: 17px;
  border: none;

  &::placeholder {
    color: #bdbdbd;
    font-family: "Mulish", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
`

const MainContainer = (props) => {
  return (
    <div className='edit_search_main'>
      <div className="edit_search_main_inputs">
        <div className="edit_search_main_location edit_search_sub">
          <LABEL htmlFor="location_input">location</LABEL>
          <INPUT type="text" id="location_input" defaultValue={"Helsinki, Finland"} />
        </div>

        <div className="edit_search_main_guest edit_search_sub">
          <LABEL htmlFor='guests_input'>guests</LABEL>
          <INPUT type="text" id='guests_input' placeholder='Add guests' />
        </div>

      </div>


      <div className="edit_search_btn">
        <SearchButton>
          <MdSearch className='edit_search_btn_icon'/>
          <span>Search</span>
        </SearchButton>
      </div>
    </div>
  )
}

export default MainContainer