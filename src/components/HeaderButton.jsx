import React from 'react'
import { MdSearch } from 'react-icons/md'
import styled from 'styled-components'

const Button = styled.button`
    background-color: #fff;
    border: none;
    border-radius: 1rem;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
   
`

const SPAN = styled.span`
    display: inline-block;
    padding-block: 19px 18px;
    padding-inline: 1rem;
    vertical-align: middle;
    &.guest {
        border-inline: 1px solid #f2f2f2;
    }
    & > .no_added_guest {
        color: #bdbdbd;
    }

    
`

const HeaderButton = ({place, guest}) => {
  return (
      <div className="header_button_container">
          <Button className="header_button" aria-label='search toggle button'>
              <SPAN className="header_button_span place">
                  {place}
              </SPAN>
              <SPAN className="header_button_span guest">
                  {guest ? guest : <span className='no_added_guest'>Add guests</span>}
              </SPAN>
              <SPAN className="header_button_span search_icon">
                    <MdSearch className='header_button_icon'/>
              </SPAN>
          </Button>
      </div>
  )
}

export default HeaderButton