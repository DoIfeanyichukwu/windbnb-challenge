import React from 'react'

import styled from 'styled-components'
import { MdStarRate } from 'react-icons/md'

const Rating = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    color: #4f4f4f;
    font-size: 12px;
    line-height: 14.63px;

    & .rating {
        font-family: inherit;
        font-weight: inherit;
        color: inherit;
        font-size: inherit;
    }

    & .star_icon {
        color: #EB5757B8;
        width: 13.96px;
        height: 14.07px;
    }
`


const Rate = ({rating}) => {
  return (
      <Rating aria-roledescription='rating of the apartment'>
          <MdStarRate className='star_icon'/> <span className="rating">{rating}</span>
      </Rating>
  )
}

export default Rate