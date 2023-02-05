import React from 'react'
import { Button, Card, CardContent, TextField, Typography,Box } from '@mui/material'
import Center from '../components/Center';
import { Link } from "react-router-dom"

const SignUp = () => {
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
                        <form >
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
                             <Link to="/login" style={{ textDecoration: "none" }}><Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{ width: '90%' }}>SignUp</Button></Link>
                            
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>
    )
}

export default SignUp