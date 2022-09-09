import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
//validation 
import { LoginForm } from '../../validation/FormsVlidation'
//api request
import { public_request } from '../../util/requestMethods'
// import {  } from 'react-router-dom'
//redux
import { useDispatch } from 'react-redux'
import * as Actions from '../../Redux/actions/Actions'
function Form() {
    //dispatch data
    const dispatch = useDispatch()
    const [errors, setErrors] = useState('');
    const [formvalues, setFormValues] = useState({
        email: '',
        password: '',
    });
    const handleFormData = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formvalues, [name]: value });
    };
    //submit login
    const Submit = async () => {
        await LoginForm.validate({ ...formvalues })
            .catch(err => setErrors(err.errors))
            .then(async (valid) => {
                if (valid) {
                    setErrors('')
                    await public_request.post('/login', { ...formvalues })
                        .then(res => {
                            if (res.status === 200) {
                                dispatch(Actions.get_admin(res.data, true))

                            }
                        }).catch(err => setErrors(err?.response?.data?.message))
                }
            })
    }

    return (
        <Container>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }} autoComplete="on">
                <div className="inputs">
                    <Typography variant="h4" className="center" >Login</Typography>
                    <Typography variant="p" color='error'>{errors}</Typography>
                    {/* email */}
                    <TextField
                        label="Email"
                        type="email"
                        variant="standard"
                        style={{ width: '100%' }}
                        value={formvalues?.email}
                        name="email"
                        onChange={handleFormData}
                    />
                    {/* password */}
                    <TextField
                        label="Password"
                        type="password"
                        variant="standard"
                        style={{ width: '100%' }}
                        value={formvalues?.password}
                        name='password'
                        onChange={handleFormData}
                    />
                    <Button variant="outlined" color='inherit' onClick={Submit}>
                        Login
                    </Button>
                </div>
            </Box>
        </Container>
    )
}

export default Form