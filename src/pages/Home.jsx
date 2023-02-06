import { makeStyles } from "@mui/styles"
import { Link } from "react-router-dom"
import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material'
import ItImage from '../images/ItImage.jpeg'
import sports from '../images/sports.jpeg'
import gk from '../images/gk.jpeg'
import math from '../images/math.jpeg';
import politics from '../images/politics.jpeg';
import history from '../images/history.jpeg';
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/island3.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));
const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container rowSpacing={2} spacing={2}>
                <Grid item xs={12} mt={10}></Grid>
                <Grid item xs={1.5} ></Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Link to="/quizapi/18" style={{ textDecoration: "none", color: '#fff' }} >
                        <Card sx={{ width: 300 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={ItImage}
                                alt="green iguana"
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h5" >
                                    Computer Science
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Link to="/quizapi/9" style={{ textDecoration: "none", color: '#fff' }}>
                        <Card sx={{ width: 300 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={gk}
                                alt="green iguana"
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h5" >
                                    General Knowledge
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Link to="/quizapi/23" style={{ textDecoration: "none", color: '#fff' }}>
                        <Card sx={{ width: 300 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={history}
                                alt="green iguana"
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h5" >
                                    History
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={1.5}></Grid>
                <Grid item xs={1.5}></Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Link to="/quizapi/19" style={{ textDecoration: "none", color: '#fff' }}>
                        <Card sx={{ width: 300 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={math}
                                alt="green iguana"
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h5" >
                                    Math
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Link to="/quizapi/21" style={{ textDecoration: "none", color: '#fff' }}>
                        <Card sx={{ width: 300 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={sports}
                                alt="green iguana"
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h5" >
                                    sports
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Link to="/quizapi/24" style={{ textDecoration: "none", color: '#fff' }}>
                        <Card sx={{ width: 300 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={politics}
                                alt="green iguana"
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h5" >
                                    Politics
                                </Typography>
                            </CardContent>

                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={1.5}></Grid>
            </Grid>
        </div >
    )
}

export default Home 