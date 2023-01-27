import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
// import Quiz from './Quiz'
import Quiz from './StartQuiz'
const QuizApi = () => {
    const [quizList, setQuizList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${type}&difficulty=easy&type=multiple`)
            .then(res => res.json())
            .then(data => setQuizList(data.results))
    }, [type])

    console.log(quizList);
    return (
        <div>
            {

                quizList.map(quiz => (
                    <Quiz quiz={quiz} />
                ))
            }
        </div>
    )
}

export default QuizApi  