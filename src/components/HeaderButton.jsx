import React from 'react'
import { MdSearch, MdRoom } from 'react-icons/md'
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
        display: flex;
        align-items: center;
        gap: .4rem;
    }

    
`


const HeaderButton = ({location, guests, handleSearchBtn}) => {
  return (
      <div className="header_button_container">
          <Button
            onClick={handleSearchBtn}
            className="header_button" 
            aria-label='search toggle button'>
              <SPAN className="header_button_span place">
                  {
                      location == ' '  ? <span className='no_added_guest'><MdRoom/> Place</span> : location
                  }
              </SPAN>
              <SPAN className="header_button_span guest">
                  {guests ? `${guests} ${guests>1 ? 'guests': 'guest'}` : <span className='no_added_guest'>Add guests</span>}
              </SPAN>
              <SPAN className="header_button_span search_icon">
                    <MdSearch className='header_button_icon'/>
              </SPAN>
          </Button>
      </div>
  )
}

export default HeaderButton