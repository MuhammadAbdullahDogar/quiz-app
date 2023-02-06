import React from 'react'
import { Link } from "react-router-dom"
import { Typography, Grid, Box, Card, CardContent, } from '@mui/material'

const Home = () => {

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={2} spacing={2} mt={5}>
                    
                    <Grid item xs={1.5} ></Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Link to="/quizapi/18" style={{ textDecoration: "none", color: '#fff' }} >
                            <Card sx={{ width: 300 }}>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="h4" sx={{ my: 3 }}>
                                        Easy
                                    </Typography>
                                    <Box>
                                        <Typography variant="h5">Computer Science</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Link to="/quizapi/9" style={{ textDecoration: "none", color: '#fff' }}>
                            <Card sx={{ width: 300 }}>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="h4" sx={{ my: 3 }}>
                                        Easy
                                    </Typography>
                                    <Box >
                                        <Typography variant="h5">General Knowledge</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Link to="/quizapi/23" style={{ textDecoration: "none", color: '#fff' }}>
                            <Card sx={{ width: 300 }}>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="h4" sx={{ my: 3 }}>
                                        Easy
                                    </Typography>
                                    <Box >
                                        <Typography variant="h5">History</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={1.5}></Grid>
                    <Grid item xs={1.5}></Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Link to="/quizapi/19" style={{ textDecoration: "none", color: '#fff' }}>
                            <Card sx={{ width: 300 }}>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="h4" sx={{ my: 3 }}>
                                        Easy
                                    </Typography>
                                    <Box >
                                        <Typography variant="h5">Math</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Link to="/quizapi/21" style={{ textDecoration: "none", color: '#fff' }}>
                            <Card sx={{ width: 300 }}>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="h4" sx={{ my: 3 }}>
                                        Easy
                                    </Typography>
                                    <Box >
                                        <Typography variant="h5">Sports</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Link to="/quizapi/24" style={{ textDecoration: "none", color: '#fff' }}>
                            <Card sx={{ width: 300 }}>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="h4" sx={{ my: 3 }}>
                                        Easy
                                    </Typography>
                                    <Box >
                                        <Typography variant="h5">Politics</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={1.5}></Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Home 