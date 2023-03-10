import React, { useEffect, useState } from 'react';
import { makeStyles } from "@mui/styles"
import { Link } from "react-router-dom"
import { Collapse } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    colorText: {
        color: '#fff',
    },
    colorWhite: {
        color: '#fff',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '4.5rem',
    }
}));

function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div className={classes.root} id="header">
            <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}
            >
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome to <br />
                        <span className={classes.colorText}>Quizify.</span>
                    </h1>
                    <Link to="/home" >
                        <h1 className={classes.colorText}>
                            <span className={classes.colorWhite}>Start Quiz</span>
                        </h1>
                    </Link>
                </div>
            </Collapse>
        </div>
    )
}

export default Header