import React, {useReducer} from 'react';

function reducer(state, action) {
   switch (action.type) {
       case 'INCREMENT':
           return state + 1;
       case 'DECREMENT':
           return state - 1;
        default:
           return state;
   }
}

//useReducer is for save the state. Take a reducer an inicial state as a paramethers
const WrapperUseReducer = () => {
    const [state, dispatch] = useReducer(reducer,0);

    return(
        <>
            State local: {state} <br/>   
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button> <br/>  
            <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>            
        </>
    )
}

export default WrapperUseReducer;