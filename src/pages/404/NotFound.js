import React from 'react'
// mui icons
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
function NotFound() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
            <SentimentDissatisfiedOutlinedIcon sx={{ fontSize: 90 }} />
            <h1>404</h1>
            <div style={{ display: 'flex', gap: '20px' }}>
                <p>Go Back To Home Page</p>
                <a href="/">Home</a>
            </div>
        </div>
    )
}
export default NotFound
