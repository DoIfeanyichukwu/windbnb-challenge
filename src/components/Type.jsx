import React from 'react'
import styled from 'styled-components'
import SuperHost from './SuperHost'

const TypeComponent = styled.div`
    display: flex;
    gap: 9.75px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    color: #828282;
    align-items: center;
`

const Type = ({superhost, type}) => {
  return (
      <TypeComponent>
          {superhost ? <SuperHost/> : ''} 
          <p className="type_component_type">
              {type}
          </p>
      </TypeComponent>
  )
}

export default Type