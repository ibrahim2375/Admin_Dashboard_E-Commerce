import * as React from 'react';
import Button from '@mui/material/Button';
//router 
import { useNavigate } from 'react-router-dom'
//api request
import { public_request } from '../../util/requestMethods'
//validation 
import { CreateProductFormSchema } from '../../validation/FormsVlidation'
export default function ColorButtons({ formvalues, setErrors }) {
    const Navigate = useNavigate();
    const Submit = async () => {
        if (formvalues.img !== null) {
            await CreateProductFormSchema.validate({ ...formvalues })
                .catch(err => setErrors(err.errors))
                .then(async (valid) => {
                    setErrors('')
                    if (valid) {
                        const formdata = new FormData();
                        formdata.append('name', formvalues.name);
                        formdata.append('img', formvalues.img);
                        formdata.append('category', formvalues.category);
                        formdata.append('brand', formvalues.brand);
                        formdata.append('avilableColors', formvalues.avilableColors);
                        formdata.append('avilableSizes', formvalues.avilableSizes);
                        formdata.append('price', formvalues.price);
                        formdata.append('description', formvalues.description);
                        formdata.append('type', formvalues.type);
                        formdata.append('sellingPort', formvalues.sellingPort);
                        formdata.append('arrivalTime', formvalues.arrivalTime);
                        formdata.append('offer', formvalues.offer);
                        formdata.append('state', formvalues.state);
                        formdata.append('location', formvalues.location);
                        await public_request.post('/products/create', formdata)
                            .then(res => {
                                if (res.status === 200) {
                                    Navigate('/products');
                                }
                            }).catch(err => setErrors(err.message))
                    }
                })
        } else {
            setErrors("img can not be empty")
        }

    }
    return (
        <Button variant="outlined" color='inherit' onClick={Submit}>
            Create
        </Button>
    );
}
