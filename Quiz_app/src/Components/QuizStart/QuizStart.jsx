import React, { useEffect, useRef, useState } from 'react'
import "./QuizStart.css"
import { data } from '../../assets/data'
import QuizResult from '../QuizResult/QuizResult'



const QuizStart = ({setStartQuiz}) => {
    let [index, setIndex] = useState(0)
    let [question, setQuestion] = useState(data[index])
    let [lock, setLock] = useState(false)
    let [score, setScore] = useState(0)
    let [result, setResult] = useState(false)
    let [timeLeft, setTimeLeft] = useState(60); // 2-minute timer (120 seconds)


    useEffect(() => {
        if (timeLeft > 0 && !result) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            setResult(true); // Auto-submit when time runs out
        }
    }, [timeLeft, result]);





    let Option1 = useRef(null)
    let Option2 = useRef(null)
    let Option3 = useRef(null)
    let Option4 = useRef(null)

    let Option_array = [Option1, Option2, Option3, Option4]


    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                e.target.classList.add("correct")
                setLock(true)
                setScore((prev) => prev + 1)
            } else {
                e.target.classList.add("wrong")
                setLock(true)
                Option_array[question.ans - 1].current.classList.add("correct")

            }

        }

    }

    const next = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(++index)
            setQuestion(data[index])
            setLock(false)
            Option_array.map((option) => {
                option.current.classList.remove("wrong")
                option.current.classList.remove("correct")
                return null;

            })
        }

    }

    const reset =() =>{
        setIndex(0)
        setQuestion(data[0])
        setScore(0)
        setLock(false)
        setResult(false)
        setStartQuiz(false)
        setTimeLeft(120); // Reset timer
        setStartQuiz(false);
        
    }   



    return (result ? <><QuizResult score={score} Outof={data.length} handleReset={reset}/></> : 
    <>
        <div className="StartContainer">
            <div className="Questionpanel">
                <h1>Question <span>{index + 1} of {data.length}</span></h1>
                <h2 className={timeLeft <= 10 ? "red-timer" : ""}>
                    Timer: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
                </h2>
            </div>


            <h2>{index + 1}.{question.question}</h2>
            <ul>
                <li ref={Option1} onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
                <li ref={Option2} onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
                <li ref={Option3} onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>
                <li ref={Option4} onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
            </ul>
            <button onClick={next}>Next</button>



        </div>

    </>



        

    )
}

export default QuizStart
