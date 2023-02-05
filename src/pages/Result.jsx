import React from 'react'
import { useParams } from "react-router-dom"
import { Button, Card, CardContent, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Center from '../components/Center';
import { Link } from "react-router-dom"

const Result = () => {
    const { score } = useParams()
    return (

        <Center>
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
    )
}

export default Result