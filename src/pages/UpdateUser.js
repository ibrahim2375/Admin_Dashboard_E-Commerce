import React from 'react'
import Typography from '@mui/material/Typography'
import UpdateUserForm from '../components/updateUser/UpdateUser'
function UpdateUser() {
    return (
        <div>

            <Typography variant='h4'  style={{ margin: '20px' }}>Update User</Typography>
            <UpdateUserForm />

        </div>
    )
}

export default UpdateUser