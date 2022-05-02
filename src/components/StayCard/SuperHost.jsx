import React from 'react'
import styled from 'styled-components'

const Host = styled.p`
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 10px;
    line-height: 12.19px;
    color: #4f4f4f;
    padding-block: 6.2px 5.32px;
    padding-inline: 8.86px 7.56px;
    border: 1px solid #4f4f4f;
    border-radius: 12px;
`

const SuperHost = () => {
  return (
      <Host>super host</Host>
  )
}

export default SuperHost