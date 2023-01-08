import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
const Quiz = ({ quiz }) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value === 'best') {
            setHelperText('You got it!');
            setError(false);
        } else if (value === 'worst') {
            setHelperText('Sorry, wrong answer!');
            setError(true);
        } else {
            setHelperText('Please select an option.');
            setError(true);
        }
    };
    return (
        <Container maxWidth="sm">
            <Box >
                <Stack spacing={2}>
                    <form onSubmit={handleSubmit}>
                        <FormControl sx={{ m: 3 }} error={error} variant="standard">
                            <FormLabel>{quiz.question}</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-error-radios"
                                name="quiz"
                                value={value}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel value="best" control={<Radio />} label={ quiz.incorrect_answers[0] } />
                                <FormControlLabel value="worst" control={<Radio />} label={ quiz.incorrect_answers[1] } />
                                <FormControlLabel value="good" control={<Radio />} label={ quiz.incorrect_answers[2] } />
                            </RadioGroup>
                            <FormHelperText>{helperText}</FormHelperText>
                            <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                                Check Answer
                            </Button>
                        </FormControl>
                    </form>
                </Stack>
            </Box>
        </Container>
    )
}

export default Quiz