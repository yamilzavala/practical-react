import React, {useEffect, useState} from 'react';
import { useForm } from '../useState/customHook/useForm';
import Hello from './Hello';
import {useFetchData} from './customHook/useFetchApi';

export default function WrapperUseEffect () {
    const [values, handleValues] = useForm({name: ''});
    const [showHello, setShowHello] = useState(false);

    //useEffect with a render input field dependency
    useEffect(() => {
        console.log('WrapperUseEffect did mount');       
    }, [values.name]);

    //useEffect related with a eventListener
    useEffect(() => {
        const onClickEvent = (e) => {
            console.log(e);
        }
        window.addEventListener('click', onClickEvent);

        return () => {
        window.removeEventListener('click', onClickEvent);
        }
    }, []);

    //useEffect with fetch api and custom hooks
    const [count, setCount] = useState(localStorage.getItem('count') ? JSON.parse(localStorage.getItem('count')) : 1);
    const {data, loading} = useFetchData(`http://numbersapi.com/${count}/trivia`);
    console.log(data, loading);

    //useEffect with local storage    
    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count));        
    },[count]);

    return(
        <>
            <form>
                <input
                value={values.name}
                name="name"
                placeholder="name"
                type="text"
                onChange={handleValues}/>
            </form>

            <button onClick={() => setShowHello(!showHello)}>Toggle Hello Component</button>
            { showHello ? <Hello/> : null  }
            <br/>

            Data from api:
            {loading ? 'Loading...' : data}
            <br/>
            <button onClick={() => setCount(count+1)}>Change count</button>
        </>
    )
}