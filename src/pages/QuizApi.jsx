import React, { useState, useEffect } from 'react'
import Quiz from './Quiz'

const QuizApi = () => {
    const [quizList, setQuizList] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch(`https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`)
            .then(res => res.json())
            .then(data => setQuizList(data.results))
    }
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