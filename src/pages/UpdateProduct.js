import React from 'react'
import Typography from '@mui/material/Typography'
import UpdateProductForm from '../components/updateProduct/UpdateProductForm'
function UpdateProduct() {
    return (
        <div>
            <Typography variant='h4' style={{ margin: '20px' }}>Update Product</Typography>
            <UpdateProductForm />
        </div>
    )
}

export default UpdateProduct