import React from 'react'
import Typography from '@mui/material/Typography'
import CreateProductForm from '../components/CreateProducts/CreateProductForm'
import '../css/CreateProductForm.css'
function CreateProduct() {
    return (
        <div>
            <Typography variant='h4'  style={{ margin: '20px' }}>Create Product</Typography>
            <CreateProductForm />
        </div>
    )
}

export default CreateProduct