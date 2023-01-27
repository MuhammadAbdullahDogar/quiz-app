import React from 'react'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Center from '../components/Center';
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <Box sx={{ width: '100%',margin:20 }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <Link to="/quizapi/18" style={{ textDecoration: "none" }}><Typography variant="h5">Computer Science</Typography></Link>
                        </Grid>
                        <Grid item xs={4} >
                            <Link to="/quizapi/9" style={{ textDecoration: "none" }}><Typography variant="h5">General Knowledge</Typography></Link>
                        </Grid>
                        <Grid item xs={4} >
                            <Link to="/quizapi/23" style={{ textDecoration: "none" }}><Typography variant="h5">History</Typography></Link>
                        </Grid>
                        <Grid item xs={4} >
                            <Typography variant="h5">Math</Typography>
                        </Grid>
                        <Grid item xs={4} >
                            <Typography variant="h5">Quiz 5</Typography>
                        </Grid>
                        <Grid item xs={4} >
                            <Typography variant="h5">Quiz 6</Typography>
                        </Grid>
                    </Grid>
                </Box>
        </>
    )
}

export default Home 