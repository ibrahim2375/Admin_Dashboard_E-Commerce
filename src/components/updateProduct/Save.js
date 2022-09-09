import * as React from 'react';
import Button from '@mui/material/Button';
//router
import { useParams } from 'react-router-dom'
//api request
import { public_request } from '../../util/requestMethods'
export default function ColorButtons({ formData, setMessage }) {
    const param = useParams()
    const updateProduct = async () => {
        await public_request.post(`/product/update/${param?.id}`, { ...formData })
            .then(res => setMessage(res?.data))
            .catch(err => setMessage(err?.message))
        setTimeout(() => setMessage(''), [2000])
    }
    return (
        <Button variant="outlined" color='inherit' onClick={updateProduct}>
            Update
        </Button>
    );
}
