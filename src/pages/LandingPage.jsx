import React from 'react'
import { Stack, Button, Grid, CardContent, TextField, Typography } from '@mui/material'
import Center from '../components/Center';
const LandingPage = () => {
    return (
        <Stack direction="column" justifyContent="center" alignItems="center" mt={{ xs: 2, md: 17 }}>
            <Typography variant="h3">Play, Host Create<br />Live Trivia Games</Typography>
        </Stack>
    )
}

export default LandingPage