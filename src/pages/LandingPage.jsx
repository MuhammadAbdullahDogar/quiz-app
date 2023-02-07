import { makeStyles } from "@mui/styles"
import Header from "../components/Header";
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));
const LandingPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
        </div>
    )
}

export default LandingPage