import React from 'react'
import styled from 'styled-components'
import MainContainer from './MainContainer'
import { MdClear } from 'react-icons/md'
import LocationContainer from './Location/LocationContainer'
import Location from './Location/Location'
import GuestContainer from './Guest/GuestContainer'

const EditSearchComponent = styled.div`
    position: fixed;
    background-color: #fff;
    max-inline-size: 100%;
    right: 0;
    left: 0;
    top: 0;

    & * {
        max-inline-size: 100%;
    }

    @media (min-width: 1440px) {
        max-width: 1440px;
        margin: auto;
    }
`

const P = styled.p`
    font-weight: 700;
    color: #333333;
    font-size: 12px;
    line-height: 15px;
    font-family: "Mulish", sans-serif;
`

const CLOSE = styled.button`
    background: transparent;
    border: none;
    color: #333333;
`

const EditSearch = (props) => {
  return (
      <EditSearchComponent className="edit_search">
          <div className="edit_search_pseudo_nav">
              <P>Edit your search</P>
              <CLOSE aria-label='close button for small screens'> 
                <MdClear className='close_icon'/>
              </CLOSE>
          </div>

          <MainContainer />

          <div className="edit_search_aside">
                <LocationContainer>
                    <Location city={"Helsinki, Finland"} />
                    <Location city={"Turku, Finland"} />
                    <Location city={"Oulu, Finland"} />
                    <Location city={"Vaasa, Finland"} />
                </LocationContainer>

                <GuestContainer />
          </div>
      </EditSearchComponent>
  )
}

export default EditSearch