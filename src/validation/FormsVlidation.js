import * as yup from 'yup'

export const CreateProductFormSchema = yup.object().shape({
    name: yup.string().required('name is required')
        .min(3, 'name can not be less than 3 characters')
        .max(50, 'name can not be more than 50 characters'),
    category: yup.string().required('category is required'),
    brand: yup.string().required('brand is required')
        .min(2, 'brand can not be less than 2 characters')
        .max(30, 'brand can not be more than 30 characters'),
    price: yup.number().min(5, 'price can not be less than 5$')
        .required('price is required').max(5000, 'price can not be more than 5000$'),
    offer: yup.string().required('offer is required').min(2).max(30),
    type: yup.string().required('type is required'),
    state: yup.string().required('state is required'),
    arrivalTime: yup.string().required('arrivalTime is required').min(2).max(30),
    sellingPort: yup.string().required('sellingPort is required'),
    description: yup.string().required('description is required').min(2).max(200),
    // img: yup.object().required(),
    avilableSizes: yup.array(),
    avilableColors: yup.array()
})
export const UpdateUserFormSchema = yup.object().shape({

})
export const LoginForm = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Please Enter your password')
        .min(4, 'password can not be less 6 characters')
        .max(30, 'password can not be greater 30 characters')
        
})

    // .matches(
    //     "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    // )