import * as React from 'react';
import Button from '@mui/material/Button';
//router
import { useParams } from 'react-router-dom'
//api request
import { public_request } from '../../util/requestMethods'
export default function ColorButtons({ formData, setMessage }) {
    const param = useParams()
    const updateUser = async () => {
        await public_request.post(`/user/update/${param?.id}`, { ...formData })
            .then(res => setMessage(res?.data))
            .catch(err => setMessage(err?.message))

        setTimeout(() => setMessage(''), [2000])
    }
    return (
        <Button variant="outlined" color='inherit' onClick={updateUser}>
            Update
        </Button>
    );
}
