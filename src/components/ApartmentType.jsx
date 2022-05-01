import React from 'react'
import styled from 'styled-components'
import Type from './Type'
import Rate from './Rating'

const Apartment_Type = styled.div`
    display: flex;
    gap: 41px;
`

const ApartmentType = ({superhost, type, rating}) => {
  return (
      <Apartment_Type>
          <Type superhost={superhost} type={type} />
          <Rate rating={rating}/>
      </Apartment_Type>
  )
}

export default ApartmentType