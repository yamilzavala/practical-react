import React from 'react';

export default (props) => 
    <div style={{textDecoration: props.todo.complete ? 'line-through' : ''}} 
         onClick={props.markAsComplete}> 
         {props.todo.text} -  {`${props.todo.complete}`}
    </div>