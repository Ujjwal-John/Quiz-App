import React from 'react'
import "./Quiz.css"

const Quiz = ({onStart}) => {
    
        

    
  return (
    
        <div className='container'>
            <h1>Welcome to the Quiz!</h1>
            <h2>Test Your General Knowledge</h2>
            <p>This Quiz contain 10 questions you have to complete this quiz within 60 Seconds</p>
            <button onClick={onStart}>Start Quiz</button>
        </div>
  )
}

export default Quiz
