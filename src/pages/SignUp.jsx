import React from 'react'
import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Center from '../components/Center';

const SignUp = () => {
    const signup = e => {
        e.preventDefault();
    }
    return (
        <Center>
            <Card sx={{ width: 400 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ my: 3 }}>
                        SignUp
                    </Typography>
                    <Box sx={{
                        '& .MuiTextField-root': {
                            m: 1,
                            width: '90%'
                        }
                    }}>
                        <form noValidate autoComplete="off" onSubmit={signup}>
                            <TextField
                                label="Name"
                                name="name"
                                variant="outlined"
                            />
                            <TextField
                                label="Email"
                                name="email"
                                variant="outlined"
                            />
                            <TextField
                                label="Password"
                                type="password"
                                name="password"
                                variant="outlined"
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{ width: '90%' }}>SignUp</Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>
    )
}

export default SignUp