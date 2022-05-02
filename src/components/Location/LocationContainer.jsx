import React from 'react'
import styled from 'styled-components'

const UL = styled.ul`
    list-style: none;
`

const LocationContainer = (props) => {
  return (
      <UL className='location_container'>
          {props.children}
      </UL>
  )
}

export default LocationContainer