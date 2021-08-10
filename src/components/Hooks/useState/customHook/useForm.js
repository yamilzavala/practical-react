import {useState} from 'react';

//custom state.. return an array with the state and the function setState [value, setValue]
export const useForm = initialValues => {
    const [values, setValue] = useState(initialValues);
       
    return[
        values,
        e => {
            setValue({
                ...values,
                [e.target.name]: e.target.value
            })
        }         
    ]
}