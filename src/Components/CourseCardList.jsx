import React from 'react'
import CourseCard from './CourseCard'
const CourseCardList = ({cards, addReview}) => {
  return (
    (cards.map(card => 
      <CourseCard key={card.id} card={card} addReview={addReview} />
    ))
  )
}

export default CourseCardList