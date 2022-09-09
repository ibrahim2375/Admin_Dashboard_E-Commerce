import React, { useState, useEffect } from 'react'
import Form from './Form'
//router
import { useParams } from 'react-router-dom'
//api request
import { public_request } from '../../util/requestMethods'
const initialState = {
    name: '',
    email: '',
    address: '',
    number: '',
    ban: false
}
function UpdateUser() {
    const param = useParams()
    // const [user, setUser] = useState([])
    const [formData, setFormData] = useState(initialState);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    //get users of osh app e-commerce
    useEffect(() => {
        const getUser = async () => {
            await public_request.post(`/user/get/${param.id}`)
                .then((res) => {
                    if (res?.data && res.status === 200) {
                        setFormData({ ...res.data });
                    }
                })
                .catch(err => console.log(err))
        }
        getUser();
    }, [param.id])
    return (
        <div>
            <Form handleChange={handleChange} formData={formData} />
        </div>
    )
}

export default UpdateUser