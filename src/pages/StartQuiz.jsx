import { Card, CardContent, CardMedia, CardHeader, List, ListItemButton, Typography, Box, LinearProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';

const StartQuiz = ({ quiz }) => {
    const [value, setValue] = React.useState('');
    const [qnIndex, setQnIndex] = useState(0)
    const [timeTaken, setTimeTaken] = useState(0)
    // let timer;

    // const startTimer = () => {
    //     timer = setInterval(() => {
    //         setTimeTaken(prev => prev + 1)
    //     }, [1000])
    // }
    return (
        <Card
            sx={{
                maxWidth: 640, mx: 'auto', mt: 5,
                '& .MuiCardHeader-action': { m: 0, alignSelf: 'center' }
            }}>
            <CardHeader
            // title={'Question ' + (qnIndex + 1) + ' of 5'}
            // action={<Typography>{getFormatedTime(timeTaken)}</Typography>} 
            />
            <Box>
                {/* <LinearProgress variant="determinate" value={(qnIndex + 1) * 100 / 5} /> */}
            </Box>
            <CardContent>
                <Typography variant="h6">
                    {quiz.question}
                </Typography>
                <List>
                    <FormLabel>{quiz.question}</FormLabel>
                    <RadioGroup
                        name="quiz"
                        value={value}
                    >
                        <FormControlLabel value={quiz.incorrect_answers[0]} control={<Radio />} label={quiz.incorrect_answers[0]} />
                        <FormControlLabel value={quiz.incorrect_answers[1]} control={<Radio />} label={quiz.incorrect_answers[1]} />
                        <FormControlLabel value={quiz.incorrect_answers[2]} control={<Radio />} label={quiz.incorrect_answers[2]} />
                        <FormControlLabel value={quiz.correct_answer} control={<Radio />} label={quiz.correct_answer} />
                    </RadioGroup>

                </List>
            </CardContent>
        </Card>
    )
}

export default StartQuiz