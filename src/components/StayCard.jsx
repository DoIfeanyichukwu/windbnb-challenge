import React from 'react'

import { StayCardImageContainer } from './StayCardImageContainer'
import ApartmentType from './ApartmentType'
import { StayCardTitle } from './StayCardTitle'



const StayCard = ({superhost, type, rating, photo, title}) => {
  return (
      <article className="staycard">
          <StayCardImageContainer>
              <img src={photo} alt="" className="staycard_image" />
          </StayCardImageContainer>

          <ApartmentType superhost={superhost} type={type} rating={rating} />

          <StayCardTitle>
              {title}
          </StayCardTitle>
      </article>
  )
}

export default StayCard