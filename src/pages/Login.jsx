import React from 'react'
import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Center from '../components/Center';
import UseForm from '../../src/hooks/useForm';
const getFreshModel = () => ({
    password: '',
    email: ''
})

const Login = () => {
  
    const {
        values,
        errors,
        setErrors,
        handleInputChange
    } = UseForm(getFreshModel);



    const login = e => {
        e.preventDefault();
        console.log(values);
          if (validate()){
            console.log("valide");
          }
    }

    const validate = () => {
        let temp = {}
        temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid."
        temp.password = values.password !== "" ? "" : "This field is required."
        setErrors(temp)
        return Object.values(temp).every(x => x === "")
    }
    return (
        <Center>
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
                        <form noValidate autoComplete="off" onSubmit={login}>
                            <TextField
                                label="Email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                                variant="outlined"
                                {...(errors.email && { error: true, helperText: errors.email })} />
                            <TextField
                                label="Password"
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleInputChange}
                                variant="outlined"
                                {...(errors.password && { error: true, helperText: errors.password })} />
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{ width: '90%' }}>Start</Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>
    )
}

export default Login