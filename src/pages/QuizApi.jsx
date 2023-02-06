

import Quiz from './StartQuiz';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/island3.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));
const QuizApi = () => {
    const classes = useStyles();
    const { type } = useParams()
    const [questions, setQustions] = useState()
    const [score, setScore] = useState(0);

    useEffect(() => {
        handleFetchData();
// eslint-disable-next-line
    }, [])

    const handleFetchData = async () => {
        const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${type}&difficulty=easy&type=multiple`);
        const data = await response.json();
        setQustions(data.results);
    };

    return (
        <div className={classes.root}>
            <Quiz
                questions={questions}
                score={score}
                setScore={setScore}
            />
        </div>
    )
}

export default QuizApi  