import { useState } from 'react'
const AddReview = ({addReview, cardId, onReviewAdded}) => {
  const [content, setContent] = useState('')
  const handleChange = (e) => {
    setContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(content, cardId);
    onReviewAdded();
    setContent('');
  }
  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <input name='review' className='input-style' type="text" placeholder='写点什么吧' value={content} onChange={handleChange}/>
      <button>+</button>
    </form>
  )
}

export default AddReview