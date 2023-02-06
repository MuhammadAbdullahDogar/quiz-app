import React, { useState, useEffect } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles"
import { Card, CardContent, CardHeader, Typography, Box, LinearProgress,Grid,FormControlLabel,FormHelperText,FormControl,FormLabel} from '@mui/material'
import Radio from '@mui/material/Radio';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/q.avif'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));
const Question = ({
    currQues,
    setCurrQues,
    questions,
    options,
    correct,
    setScore,
    score }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('Choose wisely');
    const [counter, setCounter] = useState(5);
    const classes = useStyles();
    const navigate = useNavigate();
    const handleCheck = (i) => {
        setValue(i);
        if (i === correct) {
            setHelperText('correct Answer');
            setError(false);
            setScore(score + 1);
        } else if (i !== correct) {
            setHelperText('Sorry, wrong answer!');
            setError(true);
        }
    };
    useEffect(() => {
        if (currQues === 9) {
            navigate(`/result/${score}`);
        }
        else if (counter === 0) {
            setCounter(5);
            setCurrQues(currQues + 1);
            setValue();
            setHelperText('Choose wisely');
            setError(false);
        }
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
        // eslint-disable-next-line
    }, [counter])

    const handleNext = () => {
        if (currQues === 9) {
            navigate(`/result/${score}`);
        } else if (value) {
            setCounter(5);
            setCurrQues(currQues + 1);
            setValue();
            setHelperText('Choose wisely');
            setError(false);
        } else if (!value) {
            setError(true);
            setHelperText('Please Choose an option');
        }
    };
    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={12} mt={12}>
                    <Card
                        sx={{
                            maxWidth: 640, mx: 'auto',
                            '& .MuiCardHeader-action': { m: 0, alignSelf: 'center' }
                        }}>
                        <CardHeader
                            title={'Question ' + (currQues + 1) + ' of 10'}

                            action={<Typography>{counter}</Typography>}
                        />
                        <Typography variant='h7' style={{ margin: '1rem' }}>Score : {score}</Typography>
                        <Box>
                            <LinearProgress variant="determinate" value={(currQues + 1) * 100 / 10} />
                        </Box>
                        <form >

                            <CardContent>
                                <FormControl sx={{ m: 3 }} error={error} variant="standard">
                                    <FormLabel>{questions[currQues].question}</FormLabel>
                                    {options &&
                                        options.map((i) => (
                                            <RadioGroup
                                                name="quiz"
                                                value={value}
                                                onChange={() => handleCheck(i)}
                                                key={i}
                                            >
                                                <FormControlLabel value={i} control={<Radio disabled={value} />} label={i} />
                                            </RadioGroup>
                                        ))}
                                    <FormHelperText>{helperText}</FormHelperText>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        style={{ width: 185 }}
                                        onClick={handleNext}
                                    >
                                        {currQues < 10 ? "Next Question" : "View Result"}
                                    </Button>
                                </FormControl>
                            </CardContent>
                        </form>
                    </Card>
                </Grid>
            </Grid>

        </div>
    )
}

export default Question