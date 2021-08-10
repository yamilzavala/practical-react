/*
1.Add todo
2.Display todos
3.Cross off todos
4.Show numbers of actives todos
5.Filter all active/complete/all
6.Delete todo
7.Delete all completes
7.1.Only show if atleast one is complete
8.Button to toggle on/off
*/

import shortid from 'shortid';
import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo'

export default class TodoList extends React.Component {

    state = {
        todos: []
    }

    //add
    addTodo = (todo) => {
        this.setState ({
            todos: [todo, ...this.state.todos]
        });
    }

    //delete
    removeTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    //update
    markTodoAsComplete = (id) => {        
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {                    
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                } else {
                    return todo
                }                
            })
        });
    }

    //filters

    render() {

        return(
            <>
                <TodoForm addTodo={this.addTodo}/>
                {this.state.todos.map(todo => (
                    <div key={shortid.generate()}> 
                       <Todo 
                       todo={todo}
                       markAsComplete={() => this.markTodoAsComplete(todo.id)}/>
                        {/* <button onClick={this.removeTodo(todo.id)}>x</button> */}
                    </div>                    
                ))
                }
            </>
        )
    }

}