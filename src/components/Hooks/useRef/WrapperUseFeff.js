import React, {useRef, useState} from 'react';
import UseRefComponent from './UseRefComponent'

const WrapperUseRef = () => {
    const [inputValue, setInputValue] = useState('');

    //useRef to do focun on a input field
    const inputRef = useRef();
    const handleFocus = () => {
        inputRef.current.focus()
    }

    return(
        <>
            <form>
                <input 
                value={inputValue}
                ref={inputRef}
                placeholder="test to useEffect"
                onChange={(e) => {setInputValue(e.target.value)}}/>
                <button onClick={handleFocus}>Do Focus on input</button>
            </form>
            <br/>
           
            <h6>Enter a text in the input field</h6>
            <UseRefComponent/>
            <br/>
            
        </>
    )
}

export default WrapperUseRef;