import React, { useState } from 'react'
import Form from './Form'

function CreateProductForm() {
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [formvalues, setFormValues] = useState({
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
        img: null
    });
    const handleFormData = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formvalues, [name]: value });
    };
    //handleImg    
    const handleImg = (event) => {
        setFormValues({ ...formvalues, img: event.target.files[0] })
    };
    //handel colors
    const handleColors = (event) => {
        const {
            target: { value },
        } = event;
        setColors(typeof value === 'string' ? value.split('-') : value);
        setFormValues({ ...formvalues, avilableColors: value })
    };
    //handel sizes
    const handleSizes = (event) => {
        const {
            target: { value },
        } = event;
        setSizes(typeof value === 'string' ? value.split('-') : value);
        setFormValues({ ...formvalues, avilableSizes: value })
    };
    return (
        <>
            <Form handleColors={handleColors} colors={colors}
                handleSizes={handleSizes} sizes={sizes}
                handleImg={handleImg}
                handleFormData={handleFormData}
                formvalues={formvalues}
            />
        </>
    )
}
export default CreateProductForm
