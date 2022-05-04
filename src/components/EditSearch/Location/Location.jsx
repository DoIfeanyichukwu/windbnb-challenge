import React from 'react'
import { MdRoom } from 'react-icons/md'
import styled from 'styled-components'

const LI = styled.li`
    display: flex;
    gap: 10px;
    align-items: center;
    font-family: "Mulish", sans-serif;
    color: #4f4f4f;
    font-weight: 400;
    line-height: 17.57px;

    & .location_icon {
        color: inherit;
        width: 24px;
        height: 24px;
    }
`

const Location = ({city}) => {
  return (
      <LI className="location_item">
          <MdRoom className='location_icon'/> {city}
      </LI>
  )
}

export default Location