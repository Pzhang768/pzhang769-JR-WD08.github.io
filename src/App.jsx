import { useState } from 'react'
import './App.css'
import CourseCardList from '../components/CourseCardList'

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "如何摆烂",
      content: "这门课将会教你如何成为人群中最不耀眼的那棵草",
      price: '免费',
      language: '不用言语',
      duration: '永远',
      location: '自己家',
      comments: ['生活必需品', '只要能学到这个，我什么都会做的'],
      difficulty: 'beginner'
    },
    {
      id: 2,
      title: "网站设计",
      content: "这门课将会教你如何成为网站设计大神",
      price: '100000',
      language: '中文',
      duration: '四个月',
      location: '网课',
      comments: ['非常简单'],
      difficulty: 'advanced'
    }
  ]);

  function addComment(newComment, id) {
    setCards(prevCards => 
      prevCards.map(card=>
        card.id === id ? { ...card, comments: [...card.comments, newComment]} : card
      )
    )
  }
  return (
    <>
      <CourseCardList cards={cards} addComment={addComment} />
    </>
  )
}

export default App

