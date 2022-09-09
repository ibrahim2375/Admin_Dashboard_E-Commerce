import React, { useState, useEffect } from 'react'
import Form from './Form'
//router
import { useParams } from 'react-router-dom'
//api request
import { public_request } from '../../util/requestMethods'
const initialState = {
    name: '',
    category: '',
    brand: '',
    price: '',
    offer: '',
    type: '',
    state: '',
    arrivalTime: '',
    sellingPort: '',
    description: '',
    location: '',
}
function UpdateProductForm() {
    const param = useParams()
    const [formData, setFormData] = useState(initialState);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    useEffect(() => {
        const getProduct = async () => {
            await public_request.post(`/product/get/${param.id}`)
                .then((res) => {
                    if (res.status === 200) {
                        setFormData({ ...res.data });
                    }
                })
                .catch(err => console.log(err))
        }
        getProduct();
    }, [param.id])
    return (
        <>
            <Form handleChange={handleChange} formData={formData} />
        </>
    )
}

export default UpdateProductForm