import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddReview from './AddReview';
import ReviewList from './ReviewList';
import { useState } from 'react';
import catEating from '../image.jpeg';

const CourseCard = ({ card, addReview }) => {
  const { id, title, content, price, language, duration, location, reviews, difficulty, isCompleted } = card;
  const [hasReview, setReview] = useState(0)
  const [like, setLike] = useState(0)
  return (
    <div className='card'>
      {title ? <h2>{title} {isCompleted ? <CheckCircleIcon/> : ''}</h2> : <h2>No title found</h2>}
      {content ? <p className='padding-bottom-40px'>{content}</p> : <p>No content found</p>}

      {difficulty === 'beginner' ?
        <p className='level-style-beginner'>非常简单</p> :
        difficulty === 'advanced' || difficulty === 'Intermediate' ?
          <p className='level-style-advanced'>有点难度</p>
          :
          <p>No difficulty found</p>
      }

      <div className='card-sub-container'>
        {price ? <p>￥：{price}</p> : <p>No price found</p>}
        {language ? <p>语言：{language}</p> : <p>No language found</p>}
        {duration ? <p>时间：{duration}</p> : <p>No duration found</p>}
        {location ? <p>地点：{location}</p> : <p>No location found</p>}
      </div>

      <div className='card-sub-container'>
        <ReviewList reviews={reviews} />
        {!hasReview
          ? <AddReview addReview={addReview} onReviewAdded={() => setReview(true)} cardId={id} />
          : <img src={catEating} alt="Image of a cat eating" />}
      </div>

      <div className='button-container'>
        <span>已经有{like}个人报名了</span>
        <button className={`button-style ${difficulty === 'beginner' ? 'beginner' : 'advanced'}`} onClick={() => setLike(like + 1)}>
          {!isCompleted ? '现在就加入' : '这个，不需要了'}
        </button>
      </div>
    </div>
  )
}

export default CourseCard