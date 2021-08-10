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
        todos: [],
        todosToShow: 'all',
        toggleAllComplete: true
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
    
    removeCompletesTodo = () => {
        console.log('delete completes');
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
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
    whatToShow = (filterText) => {
        console.log(filterText);
       this.setState({
           todosToShow: filterText
        })       
    }

    //toggle
    toggleTodos = () => {
        this.setState({toggleAllComplete: !this.state.toggleAllComplete});
        console.log('toggle', this.state.toggleAllComplete);
        this.setState({ 
            todos: this.state.todos.map(todo => 
                ({...todo, complete: this.state.toggleAllComplete})
                )
        })
    }

    render() {
        let todosToShow = [];
        if (this.state.todosToShow === 'all') todosToShow = this.state.todos;
        if (this.state.todosToShow === 'completes') todosToShow = this.state.todos.filter(todo => todo.complete);
        if (this.state.todosToShow === 'actives') todosToShow = this.state.todos.filter(todo => !todo.complete); 

        return(
            <>
                <TodoForm addTodo={this.addTodo}/>
                {todosToShow.map(todo => (
                    <div key={shortid.generate()}> 
                       <Todo 
                       todo={todo}
                       markAsComplete={() => this.markTodoAsComplete(todo.id)}
                       removeTodo={() => this.removeTodo(todo.id)}/>                       
                    </div>                                      
                ))
                }
               
                Actives todos:
                {this.state.todos.filter(todo => !todo.complete).length}<br/>

                <button onClick={() => this.whatToShow('all')}>Show all</button>  <br/>
                <button onClick={() => this.whatToShow('actives')}>Show actives</button>   <br/>
                <button onClick={() => this.whatToShow('completes')}>Show completes</button>  <br/>
                <button onClick={this.toggleTodos}>Toggle state</button>  <br/>
                {this.state.todos.some(todo => todo.complete) ?
                    <button onClick={this.removeCompletesTodo}>Delete all completes</button>
                    : null
                }                
            </>
        )
    }

}