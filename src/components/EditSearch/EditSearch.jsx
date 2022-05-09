import React from 'react'
import styled from 'styled-components'
import MainContainer from './MainContainer'
import { MdClear } from 'react-icons/md'
import LocationContainer from './Location/LocationContainer'
import Location from './Location/Location'
import GuestContainer from './Guest/GuestContainer'

const Container = styled.div`
    position: fixed;
    background-color: #fff;
    max-inline-size: 100%;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);

    &::after {
        content: " ";
        background-color: rgba(0, 0, 0, 0.3);
        height: 100vh;
        position: absolute;
        width: 100vw;
        backdrop-filter: blur(5px);
    }
`

const EditSearchComponent = styled.div`

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



const EditSearch = ({handleClose, handleGuestAdd, handleGuestSubtract, guestNo, handleInputChange, handleLocationButtonClick}) => {
  return (
    <Container className='edit_search_container'>

        <EditSearchComponent className="edit_search">
            <div className="edit_search_pseudo_nav">
                <P>Edit your search</P>
                <CLOSE 
                    onClick={handleClose}
                    aria-label='close button for small screens'> 
                    <MdClear className='close_icon'/>
                </CLOSE>
            </div>

            <MainContainer guests={guestNo} handleInput={handleInputChange}/>

            <div className="edit_search_aside">
                    <LocationContainer>
                        <Location 
                            city={"Helsinki, Finland"} 
                            handleClick={handleLocationButtonClick} 
                        />
                        <Location 
                            handleClick={handleLocationButtonClick}
                            city={"Turku, Finland"} 
                        />
                        <Location 
                            handleClick={handleLocationButtonClick}
                            city={"Oulu, Finland"} 
                        />
                        <Location 
                            handleClick={handleLocationButtonClick}
                            city={"Vaasa, Finland"} 
                        />
                    </LocationContainer>

                    <GuestContainer
                        handleGuestAdd={handleGuestAdd}
                        handleGuestSubtract={handleGuestSubtract} 
                    />
            </div>
        </EditSearchComponent>
    </Container>
  )
}

export default EditSearch