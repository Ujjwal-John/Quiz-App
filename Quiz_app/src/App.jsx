import React, { useState } from 'react'
import Quiz from './Components/Quiz'
import QuizStart from './Components/QuizStart/QuizStart'
import "./app.css"


const App = () => {
  const [startQuiz, setStartQuiz] = useState(false)

  
  return (
    <div className='app'>
      {startQuiz? <QuizStart setStartQuiz={setStartQuiz}/>: <Quiz onStart={()=>setStartQuiz(true)}/>}
      
    </div>
  )
}

export default App
