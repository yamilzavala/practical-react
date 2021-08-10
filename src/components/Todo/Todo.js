import React from 'react';

export default (props) => (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{textDecoration: props.todo.complete ? 'line-through' : ''}} 
            onClick={props.markAsComplete}> 
            {props.todo.text} -  {`${props.todo.complete}`}            
        </div>
        <button onClick={props.removeTodo}>x</button>
    </div>
    )