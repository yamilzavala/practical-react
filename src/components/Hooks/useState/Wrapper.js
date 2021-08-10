import React from 'react';
import { useForm } from './customHook/useForm';

export default function Wrapper () {
    const [values, handleValues] = useForm({email: '', name: ''});

    return(
        <>
            <form>
                <input
                value={values.name}
                name="name"
                placeholder="name"
                type="text"
                onChange={handleValues}/>
                
                <input
                value={values.email}
                name="email"
                placeholder="email"
                type="email"
                onChange={handleValues}/>
            </form>
        </>
    )
}