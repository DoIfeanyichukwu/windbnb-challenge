import React from 'react'

import { StayCardImageContainer } from './StayCardImageContainer'
import ApartmentType from './ApartmentType'
import { StayCardTitle } from './StayCardTitle'



const StayCard = ({superHost, type, rating, photo, title}) => {
  return (
      <article className="staycard">
          <StayCardImageContainer className='staycard_image_container'>
              <img src={photo} alt="" className="staycard_image" loading='lazy' />
          </StayCardImageContainer>

          <ApartmentType superhost={superHost} type={type} rating={rating} />

          <StayCardTitle>
              {title}
          </StayCardTitle>
      </article>
  )
}

export default StayCard