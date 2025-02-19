import React, { useEffect, useState } from 'react'
import "./QuizResult.css"


const QuizResult = ({score, Outof , handleReset} ) => {

    let [rate,setRate] = useState("looser")

    useEffect(() => {
        if (score >= 8) {
            setRate("Genius! 😎");
        } else if (score >= 5) {
            setRate("Normal 🤓");
        } else if(score >=3) {
            setRate("Very Average 😒");
        }else{
            setRate("Looser 😥")
        }
    }, [score]); 

    return (
        


        <div className='Resultcontainer'>
            <h1>Congratulation you completed the Quiz!</h1>
            <h2>You Scored <span>( {score} / {Outof} )</span> </h2>
            <p>You are {rate}</p>
            <button onClick={handleReset}>Try Again</button>
        </div>


    )
}

export default QuizResult
