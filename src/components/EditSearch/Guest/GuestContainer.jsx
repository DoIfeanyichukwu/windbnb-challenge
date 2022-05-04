import React from 'react'
import { GuestType, GuestDesc, GuestBtn, GuestForm } from './guestUtil'
import { MdAdd, MdRemove } from 'react-icons/md'
import styled from 'styled-components'

const INPUT = styled.input`
    border: none;
    padding-inline: 1rem;
    font-family: "Mulish", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 17.57px;
    color: #333333;
    width: 40px;
`

const GuestContainer = (props) => {
  return (
    <div className='guest_container' id='guest_container'>
        <div className="guest_section">
            <label htmlFor="adults">
                <GuestType>
                    Adults
                </GuestType>
                <GuestDesc>
                    Ages 13 or above
                </GuestDesc>
            </label>
            <GuestForm>
                <GuestBtn aria-label='minus guest by 1'><MdRemove className='sign_icon'/></GuestBtn>
                <INPUT type="number" name="adults" defaultValue={0} disabled id="adults" />
                <GuestBtn aria-label='add one guest'><MdAdd className='sign_icon'/></GuestBtn>
            </GuestForm>
        </div>

        <div className="guest_section">
            <label htmlFor="children">
                <GuestType>
                    Children
                </GuestType>
                <GuestDesc>
                    Ages 2-12
                </GuestDesc>
            </label>
            <GuestForm>
                <GuestBtn  aria-label='minus guest by 1'><MdRemove className='sign_icon'/></GuestBtn>
                <INPUT type="number" name="children" disabled defaultValue={0} id="children" />
                <GuestBtn aria-label='add one guest'><MdAdd className='sign_icon'/></GuestBtn>
            </GuestForm>
        </div>
    </div>
  )
}

export default GuestContainer