import React from 'react'
import Typography from '@mui/material/Typography';
//components
import Form from '../components/Login/Form'
import Img from '../components/Login/Img'
//css 
import '../css/Login.css'
function Login() {
    return (
        <div className="login">
            <div className="login_form">
                <Typography variant="h4" className="title center" color='warning'>OSH Admin App</Typography>
                <Form />
            </div>
            <div className="login_image">
                <Img />
            </div>
        </div>
    )
}

export default Login