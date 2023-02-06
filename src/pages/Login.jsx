import React from 'react'
import { makeStyles } from "@mui/styles"
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import Center from '../components/Center';
import { Link } from "react-router-dom"
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/island3.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));

const Login = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Center >
                <Card sx={{ width: 400 }}>
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography variant="h3" sx={{ my: 3 }}>
                            Quiz App
                        </Typography>
                        <Box sx={{
                            '& .MuiTextField-root': {
                                m: 1,
                                width: '90%'
                            }
                        }}>
                            <form>
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
                                <Link to="/" style={{ textDecoration: "none" }}><Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    sx={{ width: '90%' }}>Login</Button>
                                </Link>
                            </form>
                        </Box>
                    </CardContent>
                </Card>
            </Center>
        </div>
    )
}

export default Login