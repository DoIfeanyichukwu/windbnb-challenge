import React from 'react'
import styled from 'styled-components'

const EMPTY = styled.div`
    display: flex;
    align-items: center;
    color: #828282;
    font-size: 4rem;
    font-weight: 700;
    font-family: sans-serif;
    justify-content: center;
    height: 65vh;
    text-align: center;
    width: 100%;
    grid-column: span 3;
`

const NotFound = () => {
  return (
    <EMPTY className="not_found_container">
        <div className="not_found">
            Could not Find Search 
        </div>
    </EMPTY>
  )
}

export default NotFound