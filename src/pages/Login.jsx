import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';


const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Container>
                <Box mt={10}>
                    <Stack spacing={2} justifyContent="center" alignItems="center">
                        <form onSubmit={handleSubmit}>
                            <FormControl variant="standard">
                                <TextField label="Email" variant="standard" />
                                <TextField
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="standard"
                                />
                                <Button sx={{ mt: 1 }} type="submit" variant="contained">LOGIN</Button>
                            </FormControl>
                        </form>
                    </Stack>
                </Box>
            </Container>


        </>
    )
}

export default Login