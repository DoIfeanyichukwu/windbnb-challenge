import React from 'react'
import { MdRoom } from 'react-icons/md'
import styled from 'styled-components'

const LI = styled.li`
    font-family: "Mulish", sans-serif;
    font-weight: 400;
    line-height: 17.57px;
`

const Button = styled.button`
    display: block;
    background: transparent;
    border: none;
    display: flex;
    gap: 10px;
    align-items: center;
    color: #4f4f4f;
    cursor: pointer;

    & .location_icon {
        color: inherit;
        width: 24px;
        height: 24px;
    }
`



const Location = ({city, handleClick}) => {
  return (
      <LI className="location_item">
          <Button
            onClick={handleClick}
          >
              <MdRoom className='location_icon'/> {city}    
          </Button>
      </LI>
  )
}

export default Location