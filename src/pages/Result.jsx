import React from 'react'
import { useParams } from "react-router-dom"
import { makeStyles } from "@mui/styles"
import { Button,Box, Card, CardContent, Typography } from '@mui/material'
import Center from '../components/Center';
import { Link } from "react-router-dom"
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/q.avif'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));
const Result = () => {
    const { score } = useParams()
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Center >
                <Card sx={{ width: 400 }}>
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" sx={{ my: 3 }}>
                            Result
                        </Typography>
                        <Box sx={{
                            '& .MuiTextField-root': {
                                m: 1,
                                width: '90%'
                            }
                        }}>
                            <Typography variant="h6" sx={{ my: 3 }}>
                                {score} Points
                            </Typography>
                            <Link to="/home" style={{ textDecoration: "none" }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    sx={{ width: '90%' }}
                                > Try Again
                                </Button>
                            </Link>
                        </Box>
                    </CardContent>
                </Card>
            </Center>
        </div>
    )
}

export default Result