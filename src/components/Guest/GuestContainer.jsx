import React from 'react'
import { GuestType, GuestDesc, GuestBtn, GuestForm } from './guestUtil'



const GuestContainer = (props) => {
  return (
    <div className='guest_container'>
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
                <GuestBtn>-</GuestBtn>
                <input type="number" name="adults" disabled id="adults" />
                <GuestBtn>+</GuestBtn>
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
                <GuestBtn>-</GuestBtn>
                <input type="number" name="children" disabled id="children" />
                <GuestBtn>+</GuestBtn>
            </GuestForm>
        </div>
    </div>
  )
}

export default GuestContainer