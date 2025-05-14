import { useState } from 'react'
const AddComment = ({addComment, cardId, onCommentAdded}) => {
  const [content, setContent] = useState('')
  const handleChange = (e) => {
    setContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(content, cardId);
    onCommentAdded();
    setContent('');
  }
  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <input name='comment' className='input-style' type="text" placeholder='写点什么吧' value={content} onChange={handleChange}/>
      <button>+</button>
    </form>
  )
}

export default AddComment