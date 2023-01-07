import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Login = () => {
    return (
        <>
            <Container maxWidth="sm">
                <Box >
                    <Stack spacing={2}>
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <Button variant="contained">Login</Button>
                    </Stack>
                </Box>
            </Container>


        </>
    )
}

export default Login