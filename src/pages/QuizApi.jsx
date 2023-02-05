

import Quiz from './StartQuiz';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const QuizApi = () => {
    const { type } = useParams()
    const [questions, setQustions] = useState()
    const [score, setScore] = useState(0);

    useEffect(() => {
        handleFetchData();

    }, [])

    const handleFetchData = async () => {
        const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${type}&difficulty=easy&type=multiple`);
        const data = await response.json();
        setQustions(data.results);
    };

    return (
        <Quiz
            questions={questions}
            score={score}
            setScore={setScore}
        />
    )
}

export default QuizApi  