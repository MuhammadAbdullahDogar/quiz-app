import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material';
import Question from './Question';
import Center from '../components/Center';
const StartQuiz = ({ questions, score, setScore, }) => {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
    useEffect(() => {
        setOptions(
            questions &&
            handleShuffle([
                questions[currQues]?.correct_answer,
                ...questions[currQues]?.incorrect_answers,
            ])
        );
    }, [currQues, questions]);
    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
    };

    return (
        <>
            {
                questions ? (
                    <Question
                        currQues={currQues}
                        setCurrQues={setCurrQues}
                        questions={questions}
                        options={options}
                        correct={questions[currQues]?.correct_answer}
                        score={score}
                        setScore={setScore}
                    />
                )
                    : (
                        <Center>
                            <CircularProgress
                                size={100}
                                thickness={2} />
                        </Center>

                    )
            }

        </>
    )
}

export default StartQuiz