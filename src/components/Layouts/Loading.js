import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
function Loading() {
    return (
        <div className='center' style={{
            position: 'fixed',
            top: '0', left: '0', right: '0',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: '999'
        }}>
            <CircularProgress />
        </div>
    )
}

export default Loading