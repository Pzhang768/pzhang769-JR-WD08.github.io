import React from 'react'

const ReviewList = ({reviews}) => {
  return (
    <div>
      {reviews.map((review, index)=>
        <p key={index}>{review}</p>
      )}
    </div>
  )
}

export default ReviewList