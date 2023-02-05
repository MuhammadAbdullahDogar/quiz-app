import React from 'react'
import { Link } from "react-router-dom"
import { Typography, Paper, Grid, Box } from '@mui/material'

const Home = () => {
    const myBox = {
        backgroundColor: '#444', color: '#fff'
        , borderRadius: '5px', padding: '20px'
        , fontSize: '150%',
        marginTop: '2rem',
   


    };
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={2}>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={1.5} ></Grid>
                    <Grid item xs={3} style={myBox}>
                        <Link to="/quizapi/18" style={{ textDecoration: "none", color: '#fff' }} >
                            <Typography variant="h5">Computer Science</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={3} style={myBox}>
                        <Link to="/quizapi/9" style={{ textDecoration: "none", color: '#fff' }}>
                            <Typography variant="h5">General Knowledge</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={3} style={myBox}>
                        <Link to="/quizapi/23" style={{ textDecoration: "none", color: '#fff' }}>
                            <Typography variant="h5">History</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={1.5}></Grid>
                    <Grid item xs={1.5}></Grid>
                    <Grid item xs={3} style={myBox}>
                        <Link to="/quizapi/19" style={{ textDecoration: "none", color: '#fff' }}>
                            <Typography variant="h5">Math</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={3} style={myBox}>
                        <Link to="/quizapi/21" style={{ textDecoration: "none", color: '#fff' }}>
                            <Typography variant="h5">sports</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={3} style={myBox}>
                        <Link to="/quizapi/24" style={{ textDecoration: "none", color: '#fff' }}>
                            <Typography variant="h5">Politics</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={1.5}></Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Home 