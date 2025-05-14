import React from 'react'
import CourseCard from './CourseCard'
const CourseCardList = ({cards, addComment}) => {
  return (
    (cards.map(card => 
      <CourseCard key={card.id} card={card} addComment={addComment} />
    ))
  )
}

export default CourseCardList