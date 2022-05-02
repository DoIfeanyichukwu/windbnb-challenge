import React from 'react'
import { MdRoom } from 'react-icons/md'
import styled from 'styled-components'

const LI = styled.li`
    display: flex;
    gap: 10px;
    align-items: center;
`

const Location = ({city}) => {
  return (
      <LI className="location_item">
          <MdRoom className='location_icon'/> {city}
      </LI>
  )
}

export default Location